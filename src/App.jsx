import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Populer from "./components/Populer/Populer";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/products" element={<Populer />} />
        <Route path="/values" element={<Value />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
