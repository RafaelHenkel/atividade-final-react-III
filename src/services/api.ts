import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

async function doGet(url: string) {
  try {
    const response = await apiClient.get(url);

    return response.data;
  } catch (error) {
    console.log(error);
    return { success: false, msg: 'Erro do get' };
  }
}

export { doGet };
