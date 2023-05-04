import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="hero">
      <div className="section-container hero__container">
        <div className="hero__textbox">
          <h1 className="heading--primary">App to organize your life.</h1>
          <p className="hero__text">
            All in one organizer with notes, to-do list, ambience, and a
            pomodoro timer to increase productivity.
          </p>

          <div className="hero__action">
            <Link to="/dashboard" className="btn btn--primary">
              Start Now
            </Link>
            <a href="/" className="btn btn--secondary">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
