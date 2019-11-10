import React from 'react';
import { PanResponderGestureState } from 'react-native';
interface Position {
    x: number;
    y: number;
}
interface Props {
    startUp?: boolean;
    roundedEdges?: boolean;
    shadow?: boolean;
    backgroundColor?: string;
    renderHeader?: () => JSX.Element;
    renderBottomBar?: () => JSX.Element;
    topOffset: number;
    bottomOffset: number;
}
interface State {
    currentTranslate: Position;
    keyboardOn: boolean;
    keyboardHeight: number;
    bottomBarHeight: number;
    headerBarHeight: number;
    bottomVisible: boolean;
}
export default class BottomDrawer extends React.PureComponent<Props, State> {
    static defaultProps: {
        startUp: boolean;
        backgroundColor: string;
        roundedEdges: boolean;
        shadow: boolean;
    };
    private TOGGLE_THRESHOLD;
    private translate1;
    private translate2;
    private position;
    private panResponder;
    private keyboardSafeArea;
    private keyboardWillShowSub?;
    private keyboardWillHideSub?;
    constructor(props: Props);
    componentDidMount(): void;
    componentWillUnmount(): void;
    keyboardWillShow: (event: any) => void;
    keyboardWillHide: () => void;
    _getContentHeight(): number;
    render(): JSX.Element;
    handlePanResponderMove: (_: any, gesture: PanResponderGestureState) => void;
    handlePanResponderRelease: (_: any, gesture: PanResponderGestureState) => void;
    swipeInBounds(gesture: PanResponderGestureState): boolean;
    calculateEase(gesture: PanResponderGestureState): number;
    transitionTo(position: Position): void;
    resetPosition(): void;
}
export {};
