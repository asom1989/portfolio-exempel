import { CTA, HeaderSocial } from "../index";
import "./Header.css";
import me from "../../assets/christina-spiliotopoulou-NcbaobfqD-Q-unsplash.jpg";

const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <h5>Hello I'm</h5>
        <h1>Motasem</h1>
        <h5 className="text-light"> Front-end Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src="" alt="" />
        </div>

        <a href="#contact" className="scroll-down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
