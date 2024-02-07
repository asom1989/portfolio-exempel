import "./Nav.css";
import { useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
const Nav = () => {
  const [active, setActive] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActive("#")}
        className={active == "#" ? "active" : null}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActive("about")}
        className={active == "about" ? "active" : null}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActive("experience")}
        className={active == "experience" ? "active" : null}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={() => setActive("services")}
        className={active == "services" ? "active" : null}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActive("contact")}
        className={active == "contact" ? "active" : null}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
