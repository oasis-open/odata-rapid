import { createPrimitiveType, createUnknownType, findProperty, findStructuredType, getAllPropertiesNames, getEntityContainer, getModel, getNavigationSource, ISchema, ISchemaType, isPrimitiveType, PrimitiveType } from "./json-model";
import { IError, peekStack } from './common';


export function parsePath(path: string, schema: ISchema, startPos: number = 0): IPathParseResult {
    const parser = new PathParser(path, schema);
    parser.parse();
    
    const result = {
        errors: parser.errors,
        segments: parser.segments,
        schema,
        input: path
    };
    
    return result;
}


export class PathSegment {
    segmentType: string;
    schemaType: ISchemaType;
    raw: IRawSegment;
    constructor(schemaType: ISchemaType, raw: IRawSegment) {
        this.schemaType = schemaType;
        this.raw = raw;
    }
}

export class UnknownSegment extends PathSegment {
    segmentType = 'unknown';
}

export class EntitySetSegment extends PathSegment {
    segmentType = 'entitySet';
}

export class SingletonSegment extends PathSegment {
    segmentType = 'singleton';
}

export class KeySegment extends PathSegment {
    segmentType = 'key';
}

export class PropertySegment extends PathSegment {
    segmentType = 'property'
}

export class NavigationPropertySegment extends PathSegment {
    segmentType = 'navigationProperty'
}

export class CountSegment extends PathSegment {
    segmentType = 'count';
}

export interface IRawSegment {
    segment: string;
    range: { start: number, stop: number }
}

export function syntaxParse(path: string): IRawSegment[] {
    let currSegment = '';
    let currentStart = 0;
    const segments: IRawSegment[] = [];
    for (let i = 0; i < path.length; i++) {
        const ch = path[i];

        if (ch == '/') {
            segments.push({
                segment: currSegment,
                range: {
                    start: currentStart,
                    stop: i - 1
                }
            });
            currSegment = '';
            currentStart = i + 1;
        }
        else {
            currSegment += ch;
        }
    }
    
    if (currSegment || path[path.length - 1] === '/') {
        segments.push({
            segment: currSegment,
            range: {
                start: currentStart,
                stop: path.length - 1
            }
        });
    }

    return segments;
}

export interface IPathParseResult {
    input: string;
    segments: PathSegment[];
    errors: IError[];
    schema: ISchema;
}

export class PathParser {
    input: string;
    schema: ISchema;
    typeStack: ISchemaType[];
    errors: IError[] = [];
    segments: PathSegment[] = [];
    modelName: string;
    serviceName: string;

    constructor(input: string, schema: ISchema) {
        this.input = input;
        this.schema = schema;
        this.typeStack = [];
        [this.modelName, this.serviceName] = this.schema['$EntityContainer'].split('.');
    }

    parse() {
        const rawSegments = syntaxParse(this.input);
        this.semanticParse(rawSegments);
    }

    semanticParse(rawSegments: IRawSegment[]) {
        for (let raw of rawSegments) {
            if (!this.segments.length) {
                this.parseFirstSegment(raw);
            }
            else {
                this.parseSegment(raw);
            }
        }
    }
    parseSegment(raw: IRawSegment) {
        const prev = peekStack(this.segments);
        const [text, keyPart] = raw.segment.split('(');

        if (text === '$count') {
            if (!prev.schemaType.$Collection) {
                this.addError('$count should only be used on a collection', raw);
            }
            this.segments.push(new CountSegment(createPrimitiveType(PrimitiveType.Int32), raw));
        }
        else if (prev instanceof EntitySetSegment) {
            // assume this is a keysegment, we don't support functions/actions yet
            const type = { ...prev.schemaType };
            type.$Collection = false;
            this.segments.push(new KeySegment(type, raw));
        }
        else if(prev instanceof KeySegment || prev instanceof SingletonSegment || PropertySegment || NavigationPropertySegment) {
            const typeDef = findStructuredType(prev.schemaType.$Type, this.schema);
            const propType = findProperty(text, typeDef);
            if (!propType) {
                this.addError(`The property '${text}' is not defined on type '${prev.schemaType.$Type}'`, raw);
                this.segments.push(new UnknownSegment(createUnknownType(), raw));
            }
            else if (propType.$Kind === 'NavigationProperty') {
                this.segments.push(new NavigationPropertySegment(propType, raw));
                if (keyPart) {
                    const type = { $Type: propType.$Type };
                    this.segments.push(new KeySegment(type, raw));
                }
            }
            else {
                this.segments.push(new PropertySegment(propType, raw));
            }
        }
        else {
            this.segments.push(new UnknownSegment(createUnknownType(), raw));
        }
    }

    parseFirstSegment(raw: IRawSegment) {
        const model = getModel(this.modelName, this.schema);
        const service = getEntityContainer(this.serviceName, model);
        const [text, key] = raw.segment.split('(');

        if (!service) {
            this.addError('No service container has been defined', raw);
        }

        const navSource = getNavigationSource(text, service);
        if (!navSource) {
            this.addError(`'${text}' is not a navigation source in the Service container`, raw);
            const segment = new UnknownSegment(createUnknownType(), raw);
            this.segments.push(segment);
            return;
        }

        if (navSource.$Collection) {
            this.segments.push(new EntitySetSegment(navSource, raw));
            if (key) {
                // assume it has a key
                const type = {... navSource };
                type.$Collection = false;
                const keySeg = new KeySegment(type, raw);
                this.segments.push(keySeg);
            }
        }
        else {
            this.segments.push(new SingletonSegment(navSource, raw));
        }
    }

    addError(message: string, seg: IRawSegment) {
        // todo, actual range
        this.errors.push({
            message: message,
            range: seg.range
        });
    }
}

export class PathAutoComplete {
    schema: ISchema;
    segments: PathSegment[];
    input: string;
    modelName: string;
    serviceName: string;

    constructor(input: string, schema: ISchema, segments: PathSegment[]) {
        this.schema = schema;
        this.segments = segments;
        this.input = input;
        [this.modelName,this.serviceName] = schema['$EntityContainer'].split('.');
    }

    getCompletions(pos: number): string[] {
        // for now let's assume we're just get completions at the end
        const rawSegments = this.input.split('/');
        if (rawSegments.length === 0) return [];
        if (rawSegments.length === 1) {
            const model = getModel(this.modelName, this.schema);
            const service = getEntityContainer(this.serviceName, model);
            const navSources = getAllPropertiesNames(service);
            return navSources;
        }
        // get second last segment
        const prev = this.segments[this.segments.length - 2];

        const prevType = prev.schemaType;
        if (prevType.$Collection) {
            return ['$count', '('];
        }
        else if (!isPrimitiveType(prevType)) {
            const typeDef = findStructuredType(prevType.$Type, this.schema);
            const properties = getAllPropertiesNames(typeDef);
            return properties;
        }

        return [];
    }
}