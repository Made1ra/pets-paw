import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Voting from './components/Voting';
import Breeds from './components/Breeds';
import Gallery from './components/Gallery';
import Search from './components/Search';
import Likes from './components/Likes';
import Favourites from './components/Favourites';
import Dislikes from './components/Dislikes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/voting" element={<Voting $isActive={1} />} />
        <Route path="/breeds" element={<Breeds $isActive={2} />} />
        <Route path="/gallery" element={<Gallery $isActive={3} />} />
        <Route path="/search" element={<Search />} />
        <Route path="/likes" element={<Likes />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/dislikes" element={<Dislikes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
