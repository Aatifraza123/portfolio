declare module 'gsap-trial/SplitText' {
  export class SplitText {
    constructor(element: any, options?: any);
    revert(): void;
    chars: any[];
    words: any[];
    lines: any[];
  }
  export default SplitText;
}

declare module 'gsap-trial/ScrollSmoother' {
  export class ScrollSmoother {
    static create(options?: any): ScrollSmoother;
    static refresh(hard?: boolean): void;
    scrollTop(value?: number): number | void;
    scrollTo(target: any, smooth?: boolean, position?: string): void;
    paused(value?: boolean): boolean | void;
  }
  export default ScrollSmoother;
}