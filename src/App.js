import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage'
import CarPage from './pages/CarPage'
import FavCars from "./pages/FavCars";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="cars" element={<CarPage />} />
          <Route path="favs" element={<FavCars />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

