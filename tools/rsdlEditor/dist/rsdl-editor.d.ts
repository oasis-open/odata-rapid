declare type RsdlUpdatedCallback = (rsdl: string) => any;
declare function initRsdlEditor(domElement: HTMLElement, onRsdlUpdated: RsdlUpdatedCallback): {
    updateContent: (rsdl: any) => void;
    getContent: () => string;
};
export { initRsdlEditor, RsdlUpdatedCallback };
