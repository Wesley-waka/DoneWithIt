import React from 'react';
import colors from '../config/colors'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

function AppButton({ title, onPress, color = "primary" }) {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: colors[color] }]} onPress={onPress}>
      <View>
        <Text style={styles.text}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: '100%',
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold'
  }
})

export default AppButton;