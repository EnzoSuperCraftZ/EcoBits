import { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar({ onNavigateToMap }) {
  const [isSolid, setIsSolid] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const infoSection = document.getElementById("Info");

      if (!infoSection) return;

      const infoTop = infoSection.offsetTop;

      if (window.scrollY >= infoTop - 150) {
        setIsSolid(true);
      } else {
        setIsSolid(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className={`navbar-container ${isSolid ? "solid" : ""}`}>
      <img
        className="navbar-logo"
        src="https://f.feridinha.com/O4Hxt.png"
        alt="Ecobits Logo"
      />

      <div className="navbar-links">
        <button className="nav-btn" onClick={() => scrollToSection("Info")}>
          Saiba Mais
        </button>

        <button className="nav-btn" onClick={onNavigateToMap}>
          Pontos de Coleta
        </button>
      </div>
    </nav>
  );
}
