import { SankeyOptions } from '../models/Options';

/**
 * Sankey layout
 * @constructor sankey
 */
export declare function sankey(options: Partial<SankeyOptions>): {
    (linksIn?: any, nodesIn?: any, data?: any): import('graphlib').Graph;
    nodes(): any[];
    links(): any[];
    order(): any;
    /**
     * Set size of layout.
     * @method size
     * @param size {[width, height]} - size
     * @returns {sankeyLayout|Number[]}
     */
    size(x: any): number[] | {
        (G: any, order: any): any[];
        scaleToFit(G: any, order: any): void;
        size(x?: any): number[] | any;
        separation(x?: any): ((a: any, b: any, c: any) => number) | any;
        whitespace(x?: number): number | any;
        scale(x?: number): any;
    } | any;
    separation(x: any): ((a: any, b: any, c: any) => number) | {
        (G: any, order: any): any[];
        scaleToFit(G: any, order: any): void;
        size(x?: any): number[] | any;
        separation(x?: any): ((a: any, b: any, c: any) => number) | any;
        whitespace(x?: number): number | any;
        scale(x?: number): any;
    } | any;
    whitespace(x: any): number | {
        (G: any, order: any): any[];
        scaleToFit(G: any, order: any): void;
        size(x?: any): number[] | any;
        separation(x?: any): ((a: any, b: any, c: any) => number) | any;
        whitespace(x?: number): number | any;
        scale(x?: number): any;
    } | any;
    edgeValue(_x: any): any;
    scale(x: any): any;
};
