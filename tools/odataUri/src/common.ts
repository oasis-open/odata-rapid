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
