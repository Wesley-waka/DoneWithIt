import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import AppTextInput from '../components/AppTextInput';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import defaultStyles from '../config/styles';
import { TextInput } from 'react-native-gesture-handler';

export default function Inbox() {
  return (
    <View style={styles.container}>


      <View style={styles.form}>
        <TextInput placeholderTextColor="Send Message" style={[defaultStyles.text, styles.formContainer]}></TextInput>
        {/* <AppTextInput icon="arrow-right-thick" style={styles.sendButton} /> */}
        {/* <Text>It</Text> */}
        <TouchableOpacity>
          <MaterialCommunityIcons name="arrow-right-thick" size={20} color="white" style={styles.icon} />
        </TouchableOpacity>
        {/* <AppTextInput placeholder="Send Message" icon="email" /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  formContainer: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: "90%",
    padding: 15,
    marginVertical: 10
  },
  input: {
    width: '40%'
  },
  icon: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: '50%',
    marginLeft: 10
  },
  form: {
    padding: 20,
    alignContent: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
    // justifyContent: 'space-between',
    // height: 20,
    // width: 20
  },
  // sendButton: {
  //   backgroundColor: colors.primary,
  //   width: 50,
  //   height: 50,
  //   borderRadius: 25,
  //   justifyContent: 'space-around',
  //   alignItems: 'center',
  //   position: 'absolute',
  //   bottom: 50,
  //   left: 300,
  //   // bottom: 30,
  // }
});