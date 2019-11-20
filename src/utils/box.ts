import { omit } from 'lodash'
import { StyleProp } from 'react-native'
import { BoxProps } from '../types/common-props'

export const extractBoxMarginStyles = (props: BoxProps) => {
    const style: StyleProp<any> = {}

    if (props.margin) { style.margin = props.margin }
    if (props.mt) { style.marginTop = props.mt }
    if (props.mb) { style.marginBottom = props.mb }
    if (props.ml) { style.marginLeft = props.ml }
    if (props.mr) { style.marginRight = props.mr }
    if (props.mx) { style.marginHorizontal = props.mx }
    if (props.my) { style.marginVertical = props.my }

    return style
}

export const extractBoxPaddingStyles = (props: BoxProps) => {
    const style: StyleProp<any> = {}

    if (props.padding) { style.padding = props.padding }
    if (props.pt) { style.paddingTop = props.pt }
    if (props.pb) { style.paddingBottom = props.pb }
    if (props.pl) { style.paddingLeft = props.pl }
    if (props.pr) { style.paddingRight = props.pr }
    if (props.px) { style.paddingHorizontal = props.px }
    if (props.py) { style.paddingVertical = props.py }

    return style
}

export const extractFlexStyles = (props: BoxProps) => {
    const style: StyleProp<any> = {}

    if (typeof props.flex === 'number') {
        style.flex = props.flex
    }

    if (props.wrap) {
        style.flexWrap = typeof props.wrap === 'boolean' ? 'wrap' : props.wrap
    }

    return style
}

export const extractBoxStyles = (props: BoxProps) => {
    return {
        ...extractBoxMarginStyles(props),
        ...extractBoxPaddingStyles(props),
        ...extractFlexStyles(props)
    }
}

export const excludeBoxProps = <T extends BoxProps>(props: T) => {
    return omit(props, [
        'flex',
        'wrap',
        'padding',
        'pt',
        'pb',
        'pl',
        'pr',
        'px',
        'py',
        'margin',
        'mt',
        'mb',
        'ml',
        'mr',
        'mx',
        'my'
    ])
}
