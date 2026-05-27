import { useEffect, useState } from 'react';
import AnimeCard from '../components/AnimeCard';
import { fetchTopAnime, searchAnime } from '../api/animeApi';

export default function Home() {
  let anime: any[] = []
  const setAnime = (val: any[]) => {   //Функция компонента вызывается заново, каждый раз новый (anime) 
    anime = val                        //Не подходит нам
  }
  const [anime, setAnime] = useState<any[]>([]); // useState добавляет и отслеживает состояние
  const [query, setQuery] = useState(''); // Почему именно useState - запоминает состояние между рендерами и автоматически перерисовывает компонент

  useEffect(() => {                 //useEffect выполняет побочные эфекты
    fetchTopAnime().then(setAnime); //Нам нужен что бы делать запрос в setAnime после чего обновлять данные
  }, []);

  const handleSearch = async () => {       //можно было через then но async удобнее
    if (!query) return;                    //Проверяем есть ли текс, делаем запрос и сохраняем в state
    const data = await searchAnime(query); //searchAnime делаем запрос к нашему API
    setAnime(data);
  };

  return (
    <div>
      <h1>Anime Library</h1>

      <div className="search">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Поиск аниме"
        />
        <button onClick={handleSearch}>Поиск</button>
      </div>

      <div className="grid">
        {anime.map((item) => (
          <AnimeCard key={item.mal_id} anime={item} />
        ))}
      </div>
    </div>
  );
}