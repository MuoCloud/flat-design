export const extractBoxMarginStyles = (props) => {
    const style = {};
    if (props.margin) {
        style.margin = props.margin;
    }
    if (props.mt) {
        style.marginTop = props.mt;
    }
    if (props.mb) {
        style.marginBottom = props.mb;
    }
    if (props.ml) {
        style.marginLeft = props.ml;
    }
    if (props.mr) {
        style.marginRight = props.mr;
    }
    if (props.mx) {
        style.marginHorizontal = props.mx;
    }
    if (props.my) {
        style.marginVertical = props.my;
    }
    return style;
};
export const extractBoxPaddingStyles = (props) => {
    const style = {};
    if (props.padding) {
        style.padding = props.padding;
    }
    if (props.pt) {
        style.paddingTop = props.pt;
    }
    if (props.pb) {
        style.paddingBottom = props.pb;
    }
    if (props.pl) {
        style.paddingLeft = props.pl;
    }
    if (props.pr) {
        style.paddingRight = props.pr;
    }
    if (props.px) {
        style.paddingHorizontal = props.px;
    }
    if (props.py) {
        style.paddingVertical = props.py;
    }
    return style;
};
export const extractBoxStyles = (props) => {
    return {
        ...extractBoxMarginStyles(props),
        ...extractBoxPaddingStyles(props)
    };
};