import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

export default function App() {
  return (
    <div className="container">
      <nav className="nav">
        <Link to="/">Главная</Link>
        <Link to="/favorites">Избранное</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}