import "./Portfolio.css";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio-container">
        <article className="portfolio-items">
          <div className="portfolio-item-image"></div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio-item-cta">
            <a href="https://github.com" target="_blank" className="btn">
              Github
            </a>
            <a
              href="https://github.com"
              target="_blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio-items">
          <div className="portfolio-item-image"></div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio-item-cta">
            <a href="https://github.com" target="_blank" className="btn">
              Github
            </a>
            <a
              href="https://github.com"
              target="_blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
