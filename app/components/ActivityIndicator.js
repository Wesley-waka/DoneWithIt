import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LottieView from 'lottie-react-native';

export default function ActivityIndicator({ visible = false }) {
  if (!visible) return null;
  return (
    <View styles={styles.overlay}>
      <LottieView
        autoPlaay
        loop
        source={require('../assets/animations/loader.json')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    zIndex: 1,
    opacity: 0.8
  }
})