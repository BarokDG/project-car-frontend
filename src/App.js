import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CarPage from "./pages/CarPage";
import FavCars from "./pages/FavCars";

import "./App.css";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="cars" element={<CarPage />} />
          <Route path="favs" element={<FavCars />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
