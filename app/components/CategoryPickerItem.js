import React from 'react';

// PickerItem
function CategoryPickerItem({ item, label, onPress }) {
  return <View style={styles.container}>
    <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
    <AppText>{item.label}</AppText>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: 'center',
    width: '33%'
  },
  label: {
    merginTop: 5,
    textAlign: 'center'
  }
})

export default CategoryPickerItem;