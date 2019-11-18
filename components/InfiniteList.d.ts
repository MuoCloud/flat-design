import React from 'react';
import { FlatListProps } from 'react-native';
import { BoxProps } from '../types/common-props';
import { CursorDataProvider, OffsetDataProvider } from '../types/data-provider';
declare type DataPipe = (list: any[], data: any[]) => any[];
export declare const defaultPipe: (list: any[], data: any[]) => any[];
export declare const invertedPipe: (list: any[], data: any[]) => any[];
interface Props extends BoxProps, Partial<FlatListProps<any>> {
    dataProvider: CursorDataProvider | OffsetDataProvider;
    pollingDataProvider?: CursorDataProvider | OffsetDataProvider;
    dataPipe?: DataPipe;
    allowRefresh?: boolean;
    onRefresh?: () => void;
    fadeIn?: boolean;
    enableBottomSpace?: boolean;
}
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<Props & React.RefAttributes<unknown>>>;
export default _default;
