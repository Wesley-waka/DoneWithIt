import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

function PickerItem({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={style.text}>{label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20
  }
})

export default PickerItem;