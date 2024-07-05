import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./page/About";
import Home from "./page/Home";

function App() {
  return (
    <BrowserRouter>
        <Link to="/">홈</Link>
        <Link to="/about">소개</Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
