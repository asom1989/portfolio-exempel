import "./Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2> My Experience</h2>

      <div className="container exper-container">
        <div className="exper-frontend">
          <h3>Frontend Development</h3>
          <div className="exper-content">
            <article className="exper-details">
              <BsPatchCheckFill className="exper-details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className="exper-backend">
          <h3>Backend Development</h3>
          <div className="exper-content">
            <article className="exper-details">
              <BsPatchCheckFill className="exper-details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
