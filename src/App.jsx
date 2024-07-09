import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Slider from './Components/Slider';
import ProductionHouse from './Components/ProductionHouse';
import GenreMovieList from './Components/GenreMovieList';
import MovieDetail from './Components/MovieDetail';

function App() {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={
            <div>
              <Slider />
              <ProductionHouse />
              <GenreMovieList />
            </div>
          } />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
