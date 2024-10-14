import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from 'react-native-expo-image-cache';
import AppText from '../components/AppText';
import colors from '../config/colors';
import ListItem from '../components/ListItem';
import { TouchableHighlight } from 'react-native-gesture-handler';

function ListingDetailsScreen({ route }) {
  const listing = route.paarams;

  const handlePress = () => {
    navigation.navigate("Account");
  }
  return (
    <View>
      <Image style={styles.image} preview={{ uri: listing.images[0].thumbnailUrl }} tint="light" uri={listing.images[0]} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>{listing.price}</AppText>
        <View style={styles.userContainer}>
          <TouchableHighlight>
            <ListItem image={require("../assets/mosh.jpg")}
              title="Mosh Hamedani"
              subTitle="5 Listings"
              onPress={handlePress}
            />
          </TouchableHighlight>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  detailsContainer: {
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: '500'
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10
  },
  userContainer: {
    marginVertical: 40
  }

})

export default ListingDetailsScreen;