import React from 'react';
import { LayoutChangeEvent, ListRenderItem, NativeScrollEvent, NativeSyntheticEvent, ViewStyle } from 'react-native';
declare type DataPipe = (list: any[], data: any[]) => any[];
export declare const defaultPipe: (list: any[], data: any[]) => any;
export declare const invertedPipe: (list: any[], data: any[]) => any;
interface Props {
    dataProvider: CursorDataProvider | OffsetDataProvider;
    pollingDataProvider?: CursorDataProvider | OffsetDataProvider;
    renderItem: ListRenderItem<any>;
    ListHeaderComponent?: React.FunctionComponent;
    ListEmptyComponent?: React.FunctionComponent;
    ItemSeparatorComponent?: React.ComponentClass<any, any> | React.FunctionComponent<any>;
    getItemLayout?: (data: any[] | null, index: number) => {
        index: number;
        length: number;
        offset: number;
    };
    contentContainerStyle?: ViewStyle;
    style?: ViewStyle;
    onContentSizeChange?: (w: number, h: number) => void;
    allowRefresh?: boolean;
    fadeIn?: boolean;
    onScroll?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
    onLayout?: (event: LayoutChangeEvent) => void;
    inverted?: boolean;
    dataPipe?: DataPipe;
    horizontal?: boolean;
    onRefresh?: () => void;
    enableBottomSpace?: boolean;
    contentPaddingBottom?: number;
}
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<Props & React.RefAttributes<unknown>>>;
export default _default;
