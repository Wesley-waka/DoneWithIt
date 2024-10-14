import { AsyncStorage } from "react-native";
import moment from "moment";
import dayjs from "dayjs";
import _ from "lodash";
import uniqueId from 'lodash/uniqueId';

const prefix = 'cache';
const expiryInMinutes = 5;

const store = async (key, value) => {
  try {
    const item = {
      value,
      timestamp: Date.now()
    }
    await AsyncStorage.setItem(prefix + key, JSON.stringify(value))
  } catch (error) {
    console.log(error);
  }
}

const isExpired = (item) => {
  // const now = moment(DataView.now());
  const now = dayjs();
  const storedTime = moment(item.timestamp);
  return now.diff(storedTime, 'minute') > 5;
}

const get = async (key) => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);
    const item = JSON.parse(value);

    if (!item) return null;


    if (isExpired(item)) {
      //command query Separation
      await AsyncStorage.removeItem(prefix + key);
      return null;
    }

    return item.value;


  } catch (error) {
    console.log(error);
  }

}

export default {
  store
}