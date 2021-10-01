import axios from 'axios';
import { jsonData } from '../data/jsonData';

export async function getHelloMessage() {
  return (await axios.get('/api/hello')).data;
}

export function getData() {
  return jsonData;
}