import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Screen from '../components/Screen';
import Card from '../components/Card';
import colors from '../config/colors';
import routes from '../navigation/routes';
import listingsApi from '../api/listings';
import AppText from '../components/AppText';
import Button from '../components/AppButton';
import ActivityIndicator from '../components/ActivityIndicator';

const listings = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: 100,
    image: require("../assets/red-jacket.jpg")
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 100,
    image: require("../assets/couch.jpg")
  }
];

function ListingsScreen({ navigation }) {
  const getListingsApi = useApi(listingsApi.getListings);



  useEffect(() => {
    getListingsApi.request(1, 2, 3);
  }, []);



  return (
    <>
      <Screen style={styles.screen}>
        {getListingsApi.error && <>
          <AppText>Couldn't retrieve the listings</AppText>
          <Button title="Retry" onPress={loadListings} />
        </>}
        <ActivityIndicator visible={getListingsApi.loading} >
          <FlatList
            data={getListingsApi.data}
            keyExtractor={listings => listings.id.toString()}
            renderItem={({ item }) =>
              <Card title={item.title} navigation={navigation} subTitle={"$" + item.price}
                imageUrl={item.images[0].url}
                onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
                thumbnailUrl={item.images[0].thumbnailUrl}
              />}
          />
        </ActivityIndicator>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  }
})

export default ListingsScreen;