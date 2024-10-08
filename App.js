import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import { View, Text, TextInput, Switch } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppText from './app/components/AppText'
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessageScreen from './app/screens/MessageScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import defaultStyles from './app/config/styles';
import Inbox from './app/screens/Inbox';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { Button, Image } from 'react-native';
import ImageInputList from './app/components/ImageInputList';
import ListEditingsScreen from './app/components/ListingEditScreen';

const Stack = createNativeStackNavigator();

// View -> UIView
export default function App() {



  return (
    // <GestureHandlerRootView style={{ flex: 1 }}>
    //   <MessageScreen />
    // </GestureHandlerRootView>

    // <GestureHandlerRootView style={{ flex: 1 }}>
    //   <Screen>
    //     <ListItem title="My title" ImageComponent={<Icon name="email" />}>

    //     </ListItem>
    //     {/* <Icon
    //     name="email"
    //     size={50}
    //     backgroundColor="red"
    //     iconColor="white"
    //   /> */}
    //   </Screen>
    // </GestureHandlerRootView>

    // <GestureHandlerRootView style={{ flex: 1 }}>
    //   <AccountScreen />
    // </GestureHandlerRootView>

    // <Screen>
    //   <AppTextInput placeholder="Username" icon="email" />
    // </Screen>

    // <Screen>
    //   <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)} />
    // </Screen>

    // <Screen>
    //   <AppPicker selectedItem={category} onSelectItem={item => setCategory(item)} items={categories} icon="apps" placeholder="Category" />
    //   <AppTextInput icon="email" placeholder="Email" />
    // </Screen>

    // <LoginScreen />

    // <ListingsScreen />
    // <GestureHandlerRootView style={{ flex: 1 }}>
    //   <NavigationContainer>
    //     <Stack.Navigator>
    //       <Stack.Screen name="Home" options={{
    //         title: "",
    //         headerStyle: {
    //           backgroundColor: defaultStyles.colors.primary,
    //         },
    //         headerTintColor: '#fff',
    //         headerTitleStyle: {
    //           fontWeight: 'bold'
    //         }
    //       }} component={WelcomeScreen} />

    //       <Stack.Screen name="Register" options={{
    //         title: "",
    //         headerStyle: {
    //           backgroundColor: defaultStyles.colors.primary,
    //         },
    //         headerTintColor: '#fff',
    //         headerTitleStyle: {
    //           fontWeight: 'bold'
    //         }
    //       }} component={LoginScreen} />
    //       <Stack.Screen name="ItemListing" options={{
    //         title: "",
    //         headerStyle: {
    //           backgroundColor: defaultStyles.colors.primary,
    //         },
    //         headerTintColor: '#fff',
    //         headerTitleStyle: {
    //           fontWeight: 'bold'
    //         }
    //       }} component={ListingsScreen} />
    //       <Stack.Screen name="ItemDetails" options={{
    //         title: "",
    //         headerStyle: {
    //           backgroundColor: defaultStyles.colors.primary,
    //         },
    //         headerTintColor: '#fff',
    //         headerTitleStyle: {
    //           fontWeight: 'bold'
    //         }
    //       }} component={ListingDetailsScreen} />
    //       <Stack.Screen name="Message" options={{
    //         title: "",
    //         headerStyle: {
    //           backgroundColor: defaultStyles.colors.primary,
    //         },
    //         headerTintColor: '#fff',
    //         headerTitleStyle: {
    //           fontWeight: 'bold'
    //         }
    //       }} component={MessageScreen} />
    //       <Stack.Screen name="View" options={{
    //         title: "",
    //         headerStyle: {
    //           backgroundColor: defaultStyles.colors.primary,
    //         },
    //         headerTintColor: '#fff',
    //         headerTitleStyle: {
    //           fontWeight: 'bold'
    //         }
    //       }} component={ViewImageScreen} />

    //       <Stack.Screen name="Account" options={{
    //         title: "",
    //         headerStyle: {
    //           backgroundColor: defaultStyles.colors.primary,
    //         },
    //         headerTintColor: '#fff',
    //         headerTitleStyle: {
    //           fontWeight: 'bold'
    //         }
    //       }} component={AccountScreen} />

    //       <Stack.Screen name="Inbox" options={{
    //         title: "",
    //         headerStyle: {
    //           backgroundColor: defaultStyles.colors.primary,
    //         },
    //         headerTintColor: '#fff',
    //         headerTitleStyle: {
    //           fontWeight: 'bold'
    //         }
    //       }} component={Inbox} />
    //     </Stack.Navigator>
    //   </NavigationContainer>
    // </GestureHandlerRootView>

    <Screen>
      <ListEditingsScreen />
    </Screen>
  );
}

