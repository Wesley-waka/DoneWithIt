import { StyleSheet, Text, View, TouchableWithoutFeedback, Alert } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

export default function ImageInput({ imageUri, onChangeImage }) {
  useEffect(() => {
    requestPermission()
  }, []);

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted)
      alert('You need to enable permission to access the library');
  }

  const handlePress = () => {
    if (!imageUri) selectImage();
    else Alert.alert('Delete', 'Are you sure you want to delete this image?', { text: 'Yes', onPress: () => onChangeImage(null) },
      { text: 'No' }
    )
  }

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.canceled)
        onChangeImage(result.uri);
    } catch (error) {
      console.log("Error reading Image", error)
    }
  }


  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View styles={styles.container}>
        {!imageUri && <MaterialCommunityIcons name="camera" color={colors.medium} size={40} />}
        {imageUri &&
          <Image source={{ uri: imageUri }} style={styles.image} />
        }
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    height: 100,
    width: 100,
  },

  image: {
    width: '100%',
    height: '100%'
  }
})