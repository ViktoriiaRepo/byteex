import './App.css';

import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import GalleryPage from './pages/GalleryPage';
import ProductDetail from './pages/ProductDetails';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/gallery' element={<GalleryPage />} />
        <Route path='/products/:id' element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
