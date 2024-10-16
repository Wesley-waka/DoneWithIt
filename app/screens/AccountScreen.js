import React from 'react';
import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import { View, FlatList, StyleSheet } from 'react-native';
import ListItemSeparator from '../components/ListItemSeparator';
import colors from '../config/colors';
import Icon from '../components/Icon';
import useAuth from '../hooks/useAuth';

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary
    }
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary
    },
    targetScreen: "Messages"
  }
]

function AccountScreen({ navigation }) {
  const { user, logOut, setUser } = useAuth();

  const handleNavigate = () => {
    navigation.navigate("Inbox")
  }


  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={user.name}
          subTitle={user.email}
          image={require('../assets/mosh.jpg')}
        />
      </View>

      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={item => item.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) =>
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name} backgroundColor={item.backgroundColor}
                />
              }
              onPress={navigation.navigate(item.targetScreen)}
            />
          } />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        onPress={() => logOut()}
      />
    </Screen>
  );
}


const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light
  },
  container: {
    marginVertical: 20
  }
})


export default AccountScreen;

