declare interface CursorConfigs {
    field: string;
    operator: '$gt' | '$lt' | '$gte' | '$lte';
    limit?: number;
    frontPos?: boolean;
}
declare interface CursorState extends LifeCycleState {
    cursorAt?: string;
    polling?: boolean;
}
declare interface OffsetConfigs {
    limit?: number;
}
declare interface OffsetState extends LifeCycleState {
    skip?: number;
}
interface LifeCycleState {
    query: {
        [key: string]: any;
    };
    hasNext: boolean;
}
declare type LifeCycleEffect<S> = (data: any[], nextState: S) => S;
declare type ListEvent = 'next' | 'refresh' | 'poll';
declare type ListMode<C, S> = (configs: C, state: S, event: ListEvent) => {
    state: S;
    effect?: LifeCycleEffect<S>;
};
declare type DataPipe = (data: any[]) => Promise<any[]> | any[];
declare class DataProvider<C, S extends LifeCycleState> {
    constructor(uri: string, mode: ListMode<C, S>, configs: C, state: S, pipe?: DataPipe);
    getState(): S;
    setState(mutation: (state: S) => S): void;
    call(event: ListEvent): Promise<any>;
    next(): Promise<any>;
    poll(): Promise<any>;
    refresh(): Promise<any>;
}
export declare type CursorDataProvider = DataProvider<CursorConfigs, CursorState>;
export declare type OffsetDataProvider = DataProvider<OffsetConfigs, OffsetState>;
export {};
