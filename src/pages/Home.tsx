import { useEffect, useState } from 'react';
import AnimeCard from '../components/AnimeCard';
import { fetchTopAnime, searchAnime } from '../api/animeApi';

export default function Home() {
  const [anime, setAnime] = useState<any[]>([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetchTopAnime().then(setAnime);
  }, []);

  const handleSearch = async () => {
    if (!query) return;
    const data = await searchAnime(query);
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