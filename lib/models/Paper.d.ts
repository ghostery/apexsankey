import { SankeyOptions } from './Options';
import { Element, Svg } from '@svgdotjs/svg.js';

export declare class Paper {
    element: HTMLElement;
    options: SankeyOptions;
    canvas: Svg;
    constructor(element: HTMLElement, options: SankeyOptions);
    private getYShift;
    add(element: Element): void;
    clear(): void;
    resetViewBox(): void;
    updateViewBox(x: number, y: number, width: number, height: number): void;
    get height(): number;
    get spacing(): number;
    get width(): number;
}
