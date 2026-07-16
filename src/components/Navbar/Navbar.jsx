import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Page change hote hi menu close
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const btnClicked = () => {
    closeMenu();
    navigate("/");
  };

  const goToTechnology = () => {
    closeMenu();

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
        className={`${styles.links} ${
          menuOpen ? styles.showMenu : ""
        }`}
      >
        <Link to="/nowplaying" onClick={closeMenu}>
          Now Playing
        </Link>

        <Link to="/streaming" onClick={closeMenu}>
          Streaming
        </Link>

        <span onClick={goToTechnology}>
          Technology
        </span>

        <Link to="/about" onClick={closeMenu}>
          About Us
        </Link>

        <Link to="/advertise" onClick={closeMenu}>
          Advertise with us
        </Link>
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