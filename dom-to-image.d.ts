declare module 'dom-to-image' {
  export function toJpeg(node: HTMLElement, options?: { quality?: number, width?: number, height?: number }): Promise<string>;
  // Add other functions and types as needed
} 