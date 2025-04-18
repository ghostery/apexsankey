import { SankeyOptions } from './models/Options';
import { GraphData, SankeyGraph } from './models/Graph';

export declare class ApexSankey {
    element: HTMLElement;
    options: SankeyOptions;
    graph: SankeyGraph;
    constructor(element: HTMLElement, options: SankeyOptions);
    render(data: GraphData): SankeyGraph;
}
