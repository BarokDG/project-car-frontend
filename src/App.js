import { BrowserRouter, Routes, Route } from "react-router-dom";
import CarPage from "./pages/CarPage";
import InfoPage from "./pages/InfoPage";

import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="*" element={<CarPage />} />
        <Route path="info" element={<InfoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
