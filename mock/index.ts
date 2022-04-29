import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';
import api from './api/demo';

export function setupMockServer() {
  createProdMockServer(api);
}
