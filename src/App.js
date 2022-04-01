import { BrowserRouter, Routes, Route } from "react-router-dom";
import CarPage from "./pages/CarPage";
import InfoPage from "./pages/InfoPage";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<CarPage />} />
        <Route path="info" element={<InfoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
