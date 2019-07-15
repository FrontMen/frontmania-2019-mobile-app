export function functionToString(fn: Function): string {
  return `
    ${fn.toString()}
    ${fn.name}();
  `;
}
