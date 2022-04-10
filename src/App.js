import { BrowserRouter, Routes, Route } from "react-router-dom";
import CarPage from "./pages/CarPage";
import ErrorPage from "./pages/ErrorPage";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<CarPage />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
