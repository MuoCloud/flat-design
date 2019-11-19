import { BoxProps } from '../types/common-props';
export declare const extractBoxMarginStyles: (props: BoxProps) => any;
export declare const extractBoxPaddingStyles: (props: BoxProps) => any;
export declare const extractBoxStyles: (props: BoxProps) => any;
export declare const excludeBoxProps: <T extends BoxProps>(props: T) => Pick<T, Exclude<keyof T, "padding" | "pt" | "pb" | "pl" | "pr" | "px" | "py" | "margin" | "mt" | "mb" | "ml" | "mr" | "mx" | "my">>;
