import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.jikan.moe/v4' //Внешний API (Работает)
});

//Получаю ответ топ аниме
export async function fetchTopAnime() {
  const response = await api.get('/top/anime');
  return response.data.data;
}

//Отправил запроос
export async function searchAnime(query: string) {
  const response = await api.get(`/anime?q=${query}`);
  return response.data.data;
}