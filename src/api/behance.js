import axios from 'axios';
import { apiBehance as apiKey } from '../config';

const behance = axios.create({
  baseURL: 'http://behance.net/v2/',
  headers: { 'Content-Type': 'application/json' },
  params: { apiKey }
});

export const get = (route, params) => behance.get(route, params);