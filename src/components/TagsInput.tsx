import { map, uniq, without } from 'lodash'
import React, { memo, useCallback, useState } from 'react'
import { Platform, TextInput } from 'react-native'
import { TagProps } from './Tag'
import View, { ViewProps } from './View'

interface Props extends ViewProps {
  initialTags?: string[]
  placeholder?: string
  onChangeTags?: (tags: string[]) => void
  tagComponent: React.FunctionComponent<TagProps>
}

export default memo((props: Props) => {
  const {
    initialTags = [],
    onChangeTags,
    tagComponent,
    placeholder = '',
    style,
    ...restProps
  } = props
  const [tags, setTags] = useState(initialTags)
  const [text, setText] = useState('')

  const onKeyPress = useCallback(event => {
    if (event.nativeEvent.key === 'Backspace' && text === '') {
      const updatedTags = tags.slice(0, tags.length - 1)
      setTags(updatedTags)

      if (onChangeTags) {
        onChangeTags(updatedTags)
      }
    }
  }, [text, tags])

  const addTag = useCallback(() => {
    if (text.trim() === '') {
      return
    }

    const updatedTags = uniq([...tags, text])
    setTags(updatedTags)
    setText('')

    if (onChangeTags) {
      onChangeTags(updatedTags)
    }
  }, [tags, text])

  const deleteTag = useCallback((tag: string) => {
    const updatedTags = without(tags, tag)
    setTags(updatedTags)

    if (onChangeTags) {
      onChangeTags(updatedTags)
    }
  }, [tags])

  const TagComponent = tagComponent

  return (
    <View
      style={[
        {
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          borderRadius: 4,
          borderWidth: 1,
          borderColor: '#eceff1',
          paddingHorizontal: 10,
          paddingTop: 10,
        },
        style
      ]}
      {...restProps}
    >
      {
        map(tags, tag => {
          return (
            <TagComponent
              key={tag}
              style={{
                marginRight: 7.5,
                marginBottom: 10
              }}
              onPress={() => deleteTag(tag)}
              children={tag}
            />
          )
        })
      }

      <TextInput
        style={{
          ...Platform.select({
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
        }}
        placeholder={tags.length === 0 ? placeholder : null}
        value={text}
        onChangeText={value => setText(value)}
        blurOnSubmit={false}
        onSubmitEditing={addTag}
        onKeyPress={onKeyPress}
      />
    </View>
  )
})
