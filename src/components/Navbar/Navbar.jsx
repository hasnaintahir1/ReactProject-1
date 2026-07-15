import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";



const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = useNavigate();
  const location = useLocation();

  const btnClicked = () => {
    navigate("/");
  };

  const goToTechnology = () => {
    if (location.pathname !== "/") {
      navigate("/#technology");
    } else {
      const section = document.getElementById("technology");

      section?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <nav className={`${styles.nav} ${scroll ? styles.active : ""}`}>
      <h2 onClick={btnClicked}>CineVerse</h2>

      <div
        className={`${styles.links} ${menuOpen ? styles.showMenu : ""
          }`}
      >
        <Link to="/nowplaying">Now Playing</Link>
        <Link to="/streaming">Streaming</Link>
        <span onClick={goToTechnology}>Technology</span>
        <Link to="/about">About Us</Link>
        <Link to="/advertise">Advertise with us</Link>
        <Link to="/investors">Investors</Link>
      </div>

      <div
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>
    </nav>
  );
};

export default Navbar;