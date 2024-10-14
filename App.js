import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, Switch } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Screen from './app/components/Screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Image } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import jwtDecode from 'jwt-decode';
import authStorage from './app/auth/storage';
import { AppLoading } from 'expo';
import { navigationRef } from './app/navigation/rootNavigation';

// View -> UIView
export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getToken();
    if (user) setUser(user);
    setUser(jwtDecode(token));
  }

  const showNotification = () => {
    Notifications.presentLocalNotificationAsync(
      {
        title: 'Congratulations',
        body: 'Your order was successfully placed',
      }, {
      time: new Date().getTime() + 2000,
    }
    )
  }

  useEffect(() => {
    restoreToken();
  }, [])

  // return <Button disabled={!netInfo.isInternetReachable} />
  if (!isReady)
    return (
      <AppLoading startAsync={restoreToken} onFinish={() => setIsReady(true)} />
    )

  const navigationRef = React.createRef();
  const navigation = navigationRef.current;
  navigation.navigate()


  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <offlineNotice />
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

