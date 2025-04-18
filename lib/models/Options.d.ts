export interface CommonOptions {
    readonly canvasStyle: string;
    readonly enableToolbar: boolean;
    readonly height: number | string;
    readonly spacing: number;
    readonly viewPortHeight: number;
    readonly viewPortWidth: number;
    readonly width: number | string;
}
export interface NodeOptions {
    readonly nodeBorderColor: string;
    readonly nodeBorderWidth: number;
    readonly nodeWidth: number;
    readonly onNodeClick?: (node: any) => void;
}
export interface EdgeOptions {
    readonly edgeGradientFill: boolean;
    readonly edgeOpacity: number;
}
export interface FontOptions {
    readonly fontColor: string;
    readonly fontFamily: string;
    readonly fontSize: string;
    readonly fontWeight: string;
}
export interface TooltipOptions {
    readonly enableTooltip: boolean;
    readonly tooltipBGColor: string;
    readonly tooltipBorderColor: string;
    readonly tooltipId: string;
    readonly tooltipTemplate?: (content: any) => string;
}
export type SankeyOptions = CommonOptions & EdgeOptions & FontOptions & NodeOptions & TooltipOptions;
export declare const DefaultOptions: SankeyOptions;
