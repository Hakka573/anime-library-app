import { useAnimeStore } from '../store/animeStore';

export default function Favorites() {
  const favorites = useAnimeStore((s) => s.favorites);

  return (
    <div>
      <h1>Избранное</h1>

      <div className="grid">
        {favorites.map((anime: any) => (
          <div className="card" key={anime.mal_id}>
            <img src={anime.images.jpg.image_url} />
            <h3>{anime.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}