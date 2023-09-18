import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Voting from './pages/Voting';
import Breeds from './pages/Breeds';
import Breed from './pages/Breed';
import Gallery from './pages/Gallery';
import Search from './pages/Search';
import Likes from './pages/Likes';
import Favourites from './pages/Favourites';
import Dislikes from './pages/Dislikes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/voting" element={<Voting isActive={1} />} />
        <Route path="/breeds" element={<Breeds isActive={2} />} />
        <Route path="/breed/:id" element={<Breed />} />
        <Route path="/gallery" element={<Gallery isActive={3} />} />
        <Route path="/search" element={<Search />} />
        <Route path="/likes" element={<Likes />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/dislikes" element={<Dislikes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
