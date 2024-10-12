import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Modal } from 'react-native'
import Text from '../components/AppText';
import * as Progress from 'react-native-progress';
import colors from '../config/colors';
import LottieView from 'lottie-react-native';

export default function UploadScreen({ onDone, progress = 0, visible = false }) {
  return (
    <Modal visible={visible} style={styles.container}>
      <View>
        {progress < 1 ? <Progress.Bar color={colors.primary} width={200}>{progress * 100}%</Progress.Bar> : <LottieView
          onAnimationFinish={onDone} autoPlay loop={false} styles={styles.animation} source={require('../assets/animations/done.json')} />}

      </View>
    </Modal >
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  animation: {
    width: 150
  }

})