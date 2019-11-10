"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
exports.default = react_1.memo((props) => {
    const { initialTags = [], onChangeTags, tagComponent, placeholder = '', style } = props;
    const [tags, setTags] = react_1.useState(initialTags);
    const [text, setText] = react_1.useState('');
    const onKeyPress = react_1.useCallback(event => {
        if (event.nativeEvent.key === 'Backspace' && text === '') {
            const updatedTags = tags.slice(0, tags.length - 1);
            setTags(updatedTags);
            if (onChangeTags) {
                onChangeTags(updatedTags);
            }
        }
    }, [text, tags]);
    const addTag = react_1.useCallback(() => {
        if (text.trim() === '') {
            return;
        }
        const updatedTags = lodash_1.uniq([...tags, text]);
        setTags(updatedTags);
        setText('');
        if (onChangeTags) {
            onChangeTags(updatedTags);
        }
    }, [tags, text]);
    const deleteTag = react_1.useCallback((tag) => {
        const updatedTags = lodash_1.without(tags, tag);
        setTags(updatedTags);
        if (onChangeTags) {
            onChangeTags(updatedTags);
        }
    }, [tags]);
    const TagComponent = tagComponent;
    return (<react_native_1.View style={[
        {
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            borderRadius: 4,
            borderWidth: 1,
            borderColor: '#eceff1',
            paddingHorizontal: 10,
            paddingTop: 10
        },
        style
    ]}>
      {lodash_1.map(tags, tag => {
        return (<TagComponent key={tag} style={{
            marginRight: 7.5,
            marginBottom: 10
        }} onPress={() => deleteTag(tag)} children={tag}/>);
    })}
      <react_native_1.TextInput style={{
        ...react_native_1.Platform.select({
            android: {
                paddingTop: 0,
                paddingBottom: 0
            },
            ios: {
                paddingTop: 5,
                paddingBottom: 5
            }
        }),
        marginBottom: 10,
        margin: 0,
        flex: 1,
        fontSize: 13,
        minWidth: 80
    }} placeholder={tags.length === 0 ? placeholder : null} value={text} onChangeText={value => setText(value)} blurOnSubmit={false} onSubmitEditing={addTag} onKeyPress={onKeyPress}/>
    </react_native_1.View>);
});
