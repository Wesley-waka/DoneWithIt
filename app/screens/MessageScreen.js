import React, { useState } from 'react';
import ListItem from '../components/ListItem';
import { FlatList, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const initialMessages = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../assets/mosh.jpg')
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../assets/mosh.jpg')
  }
];


function MessageScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter(m => m.id !== message.id))
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={messages => messages.id.toString()}
        renderItem={({ item }) =>
        (<ListItem
          title={item.title}
          subTitle={item.description}
          image={item.image}
          onPress={() => console.log("Message selected", item)}
          renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />
          }
        />)
        }
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => setMessages([
          {
            id: 2,
            title: 'T2',
            description: 'D2',
            image: require('../assets/mosh.jpg')
          }
        ])}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default MessageScreen;