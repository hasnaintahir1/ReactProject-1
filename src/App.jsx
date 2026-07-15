import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import About from "./pages/About/About";
import Advertise from "./pages/Advertise/Advertise";
import Investors from "./pages/Investor/Investors";
import Nowplaying from "./pages/NowPlaying/Nowplaying";
import Streaming from "./pages/Streaming/Streaming";
import Technology from "./pages/Technology/Technology";

function App() {
  return (
    <>
    <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nowplaying" element={<Nowplaying />} />
        <Route path="/streaming" element={<Streaming />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/about" element={<About />} />
        <Route path="/advertise" element={<Advertise />} />
        <Route path="/investors" element={<Investors />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;