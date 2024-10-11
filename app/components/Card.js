import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import colors from '../config/colors';
import AppText from './AppText';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Card({ title, subTitle, image: imageUrl, onPress }) {
  return (
    <TouchableWithoutFeeback onPress={onPress}>
      <View style={styles.card}>
        <TouchableOpacity onPress={() => navigation.navigate("ItemDetails")}>
          <Image style={styles.image} source={{ uri: imageUrl }} />
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
          </View>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeeback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: 'hidden'
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    marginBottom: 7
  },
  subTitle: {
    color: colors.secondary
  }
})

export default Card;