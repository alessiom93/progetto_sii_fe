// api call
import axios, { type AxiosInstance } from 'axios';

export class CommonConnector {
  private apiClient: AxiosInstance;

  constructor() {
    this.apiClient = axios.create({
      baseURL: 'http://localhost:5000',
      timeout: 0,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  async fetchData(endpoint: string, params = {}): Promise<any> {
    try {
      const response = await this.apiClient.get(endpoint, { params });
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
  async postData(endpoint: string, data = {}): Promise<any> {
    try {
      const response = await this.apiClient.post(endpoint, data);
      return response.data;
    } catch (error) {
      console.error('Error posting data:', error);
      throw error;
    }
  }
}

export async function getFiveRandomUsersWithBooks() {
  const connector = new CommonConnector();
  return (await connector.fetchData('/getFiveRandomUsers')).random_users;
}

export async function getRecommenderSystemsInfos() {
  const connector = new CommonConnector();
  return (await connector.fetchData('/getRecommenderSystemsInfos')).recommender_systems;
}

export async function getTopPopularityRSRecommendations() {
  const connector = new CommonConnector();
  return (await connector.fetchData('/get_top_popularity_rs'))
    .top_10_books;
}

export async function getUserBasedCFRSRecommendations(userId: string) {
  const connector = new CommonConnector();
  return (await connector.fetchData('/get_user_based_cf_rs', { user_id: userId }))
    .top_10_books;
}

export async function getItemBasedCFRSRecommendations(userId: string) {
  const connector = new CommonConnector();
  return (await connector.fetchData('/get_item_based_cf_rs', { user_id: userId }))
    .top_10_books;
}
