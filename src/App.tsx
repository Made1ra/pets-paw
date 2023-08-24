import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Voting from './components/Voting';
import Breeds from './components/Breeds';
import Gallery from './components/Gallery';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home $isActive={0} />} />
        <Route path="/voting" element={<Voting $isActive={1} />} />
        <Route path="/breeds" element={<Breeds $isActive={2} />} />
        <Route path="/gallery" element={<Gallery $isActive={3} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
