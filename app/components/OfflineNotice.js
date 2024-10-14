import { StyleSheet, Text, View } from 'react-native'
import { Constants } from 'expo-constants';
import React from 'react'
import AppText from './AppText'
import { useNetInfo } from '@react-native-community/netinfo';

export default function OfflineNotice() {
  const netInfo = useNetInfo();

  if (netInfo.type !== 'unknown' && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No Internat Connection</AppText>
      </View>
    );

  return null;
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.primaary,
    hieght: 50,
    position: 'absolute',
    justifyContent: 'center',
    top: Constants.statusBarHeight,
    width: '100%',
    zIndex: 1,
  },
  text: {
    color: colors.white
  }
})