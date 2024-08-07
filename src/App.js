import "./App.css";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import NavScroll from "./components/NavScroll";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";

function App() {
  return (
    <>
      <NavScroll />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
