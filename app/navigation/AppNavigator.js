import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListingsScreen from "../screens/ListingsScreen";
import ListingEditScreen from "../screens/ListingEditScreen";
import AccountScreen from "../screens/AccountScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import navigation from './rootNavigation';
import { Notifications } from "expo";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  useNotifications();


  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={FeedNavigator}
        options={{
          tabBarIcon: ({ color, size }) =>
            <MaterialCommunityIcons name="home" color={color} size={size} />
        }}
      />
      <Tab.Screen name="ListingEdit" component={ListingEditScreen}
        options={({ navigation }) => ({
          tabBarButton: () => <NewListingButton onPress={() => navigation.navigate("ListingEdit")} />,
          tabBarIcon: ({ color, size }) =>
            <MaterialCommunityIcons name="plus-circle" color={color} size={size} />
        })}
      />
      <Tab.Screen name="Account" component={AccountNavigator}
        options={{
          tabBarIcon: ({ color, size }) =>
            <MaterialCommunityIcons name="account" color={color} size={size} />
        }}
      />
    </Tab.Navigator>
  )
};

export default AppNavigator;