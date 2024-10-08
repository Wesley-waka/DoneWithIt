import { StyleSheet, ScrollView, Text, View } from 'react-native'
import React from 'react'
import ImageInput from './ImageInput'

export default function ImageInputList({ imageUris = [], onRemoveImage, onAddImage }) {
  const scrollView = useRef();

  scrollView.current.scrollToEnd();

  return (
    <View>
      <ScrollView
        ref={scrollView} horizontal onContentSizeChange={() => scrollView.current.scrollToEnd()}>
        <View style={styles.container}>
          {imageUris.map(uri => <ImageInput
            imageUri={uri}
            key={uri}
            onChangeImage={() => onRemoveImage(uri)}
          >
            <View key={uri} style={styles.image}>
              <ImageInput onChangeImage={uri => onAddImage(uri)} />
            </View>
          </ImageInput>)}
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  image: {
    marginRight: 10
  }
})