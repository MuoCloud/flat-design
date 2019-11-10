export declare const getContentColorSystem: (color: string) => "dark-content" | "light-content";
export declare const adjustBrightness: (col: string, amt: number) => string;
export declare const darken: (color: string, amt: number) => string;
export declare const lighten: (color: string, amt: number) => string;
export declare const themeColorSeq: (name: string, color: string) => {
    [key: string]: string;
};
