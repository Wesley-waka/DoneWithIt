import client from './client';

const endpoint = '/listings';
const getListings = (a, b, c) => client.get('/listings');

export default {
  getListings,
}