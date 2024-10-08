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
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import defaultStyles from './app/config/styles';
import Inbox from './app/screens/Inbox';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { Button, Image } from 'react-native';
import ImageInputList from './app/components/ImageInputList';
import ListEditingsScreen from './app/components/ListingEditScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';

const Link = () => {
  const navigation = useNavigation();

  return (
    <Button
      title="Click"
      onPress={() => navigation.navigate("TweetDetails")}
    />)

}
const Stack = createNativeStackNavigator();

const FeedNavigator = () => {
  <Stack.Navigator initialRouteName="Tweets"
    screenOptions={{
      headerStyle: { backgroundColor: "dodgerblue" },
      headerTintColor: 'white'
    }}
  >
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen
      name="TweetDetails"
      component={TweetDetails}
      options={{
        headerStyle: { backgroundColor: 'tomato', headerTintColor: 'white', headerShown: false }
      }} />
  </Stack.Navigator>
}

const Tweets = ({ navigation }) => {
  <Screen>
    <Text>Tweets</Text>
    <Button
      title="View Tweet"
      onPress={() => navigation.navigate("Tweets", { id: 1 })}
    >

    </Button>
  </Screen>
}

const TweetDetails = ({ route }) => (
  <Screen>
    <Text>Tweet Details {route.params}</Text>
  </Screen>
);

const Account = () => <Screen><Text>Account</Text></Screen>

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator tabBarOptions={{
    activeBackgroundColor: 'tomato',
    activeTintCColor: 'white',
    inactiveBackgroundColor: '#eee',
    inactiveTintColor: 'black'
  }}>
    <Tab.Screen name="Feed" component={FeedNavigator} options={{
      tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="home" size={size} color={color} />
    }} />
    <Tab.Screen name="Account" component={Tweets} />
  </Tab.Navigator>
)
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
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}

