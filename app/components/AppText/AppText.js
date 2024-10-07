import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native'
import styles from './styles';
import defaultStyles from "../../config/styles";

// <Heading>My Heading</Heading>
function AppText({ children, style, ...otherProps }) {
  return (
    <Text style={[defaultStyles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}


export default AppText;