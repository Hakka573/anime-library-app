import { useAnimeStore } from '../store/animeStore';

export default function AnimeCard({ anime }: any) {
  const addFavorite = useAnimeStore((s) => s.addFavorite);

  return (
    <div className="card">
      <img src={anime.images.jpg.image_url} alt={anime.title} />
      <h3>{anime.title}</h3>
      <p>⭐ {anime.score}</p>
      <button onClick={() => addFavorite(anime)}>
        В избранное
      </button>
    </div>
  );
}