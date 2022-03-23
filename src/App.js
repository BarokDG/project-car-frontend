import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CarPage from "./pages/CarPage";
import FavCars from "./pages/FavCars";
import InfoPage from "./pages/InfoPage";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="cars" element={<CarPage />} />
        <Route path="favs" element={<FavCars />} />
        <Route path="info" element={<InfoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
