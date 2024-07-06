import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./page/About";
import Home from "./page/Home";
import Nav from "./components/Nav";
import Info from "./page/Info";
import List from "./page/List";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/info/:id" element={<Info />} />
        <Route path="/list" element={<List />}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
