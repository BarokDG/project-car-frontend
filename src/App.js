import { BrowserRouter, Routes, Route } from "react-router-dom";
import CarPage from "./pages/CarPage";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="cars" element={<CarPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
