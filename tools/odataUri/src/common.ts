export interface IError {
  message: string;
  range: {
    start: number;
    stop: number;
  };
}

export function peekStack<T>(stack: T[]): T {
  return stack[stack.length - 1];
}

export function parseQualifiedName(qualifiedName: string): [string, string] {
  const parts = qualifiedName.split(".");
  const serviceName = parts.pop();
  const modelName = parts.join(".");
  return [modelName, serviceName];
}
