import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';
import colors from '../config/colors';
import AppButton from '../components/AppButton';

function WelcomeScreen({ navigation }) {
  const handleNavigate = () => {
    navigation.navigate("Register")
  }
  return (
    <ImageBackground blurRadius={10} style={style.background} source={require("../assets/background.jpg")}>
      <View style={style.logoContainer}>
        <Image style={style.logo} source={require("../assets/logo-red.png")} />
        <Text style={style.tagline}>Sell What You Don't need</Text>
      </View>
      <View style={style.buttonContainer}>
        <AppButton title="Login" />
        <AppButton title="Register" color="secondary" onPress={handleNavigate} />
      </View>
    </ImageBackground>
  );
}

const style = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: "center"
  },
  buttonContainer: {
    padding: 20,
    width: '100%'
  },
  logo: {
    width: 100,
    height: 100,
  },
  tagline: {
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 20
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center'
  },
})

export default WelcomeScreen;