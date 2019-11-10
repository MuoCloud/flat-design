"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const lottie_react_native_1 = __importDefault(require("lottie-react-native"));
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const react_native_gesture_handler_1 = require("react-native-gesture-handler");
const list_loading_json_1 = __importDefault(require("../assets/lottie/list_loading.json"));
const FadeInView_1 = __importDefault(require("./FadeInView"));
exports.defaultPipe = (list, data) => lodash_1.uniqBy([...list, ...data], '_id');
exports.invertedPipe = (list, data) => lodash_1.uniqBy([...data, ...list], '_id');
exports.default = react_1.memo(react_1.forwardRef((props, ref) => {
    const { dataProvider, pollingDataProvider, renderItem, ListHeaderComponent, ListEmptyComponent, ItemSeparatorComponent, getItemLayout, contentContainerStyle, style, onContentSizeChange, allowRefresh = true, fadeIn, onScroll, onLayout, inverted, horizontal, dataPipe = exports.defaultPipe, onRefresh } = props;
    const [isBusy, setBusy] = react_1.useState(false);
    const [isRefreshing, setRefreshing] = react_1.useState(false);
    const [list, setList] = react_1.useState([]);
    const refresh = react_1.useCallback(async (pipe = dataPipe) => {
        if (onRefresh) {
            onRefresh();
        }
        setRefreshing(true);
        const results = await dataProvider.refresh();
        setList(pipe([], results));
        setRefreshing(false);
        return results;
    }, []);
    const next = react_1.useCallback(async (pipe = dataPipe) => {
        setBusy(true);
        const results = await dataProvider.next();
        setList(current => pipe(current, results));
        setBusy(false);
        return results;
    }, []);
    const poll = react_1.useCallback(async (pipe = dataPipe) => {
        if (!pollingDataProvider) {
            throw new Error('Polling DataProvider is undefined');
        }
        const results = await pollingDataProvider.poll();
        setList(current => pipe(current, results));
        return results;
    }, []);
    const renderItemCallback = react_1.useMemo(() => fadeIn ? (data) => (<FadeInView_1.default duration={150}>{renderItem(data)}</FadeInView_1.default>) : renderItem, []);
    const keyExtractor = react_1.useCallback((item, index) => item._id + String(index), []);
    const loadingComponent = react_1.useCallback(() => isBusy ? (<react_native_1.View style={{ alignItems: 'center' }}>
      <lottie_react_native_1.default style={{
        width: 150,
        height: 150
    }} autoPlay={true} source={list_loading_json_1.default}/>
    </react_native_1.View>) : <></>, [isBusy]);
    react_1.useEffect(() => {
        next();
    }, []);
    const flatListRef = react_1.useRef(null);
    react_1.useImperativeHandle(ref, () => ({
        refresh,
        next,
        poll,
        mutate: setList,
        list,
        backToTop: () => {
            flatListRef.current.scrollTo(0);
        }
    }));
    return (<react_native_gesture_handler_1.FlatList ref={flatListRef} refreshControl={(!horizontal && allowRefresh) && (<react_native_1.RefreshControl refreshing={isRefreshing} onRefresh={refresh}/>)} ListHeaderComponent={ListHeaderComponent} ListFooterComponent={horizontal ? null : loadingComponent} ListEmptyComponent={isBusy ? null : ListEmptyComponent} onContentSizeChange={onContentSizeChange} onEndReached={() => next()} onEndReachedThreshold={0.1} onScroll={onScroll} onLayout={onLayout} data={list} keyExtractor={keyExtractor} renderItem={renderItemCallback} ItemSeparatorComponent={ItemSeparatorComponent} getItemLayout={getItemLayout} removeClippedSubviews={false} contentContainerStyle={[
        {
            ...((!isBusy && list.length === 0) && {
                flex: 1
            })
        },
        contentContainerStyle
    ]} style={style} inverted={inverted} horizontal={horizontal}/>);
}));
