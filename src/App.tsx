import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import { AboutPage } from "./pages/about/AboutPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}

export default App;
