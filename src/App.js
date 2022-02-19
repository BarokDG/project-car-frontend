import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage'
import CarPage from './pages/CarPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="cars" element={<CarPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

