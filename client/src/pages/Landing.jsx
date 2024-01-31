import Wrapper from '../assets/wrappers/LandingPage';
import hero from '../assets/images/hero.png';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Wrapper>
      <div className="container">
        <header>
          <h1>
            <span>Navigate Your Career Path with JobMate</span>
            <br />
            Seamless Job Application Management.
          </h1>
          <p>
            Your go-to for effortless job application tracking. Stay organized,
            monitor progress, and manage your career journey with ease.
          </p>
          <div>
            <Link className="btn btn-primary">Register</Link>
            <Link className="btn btn-text">Log In or Try Demo User</Link>
          </div>
        </header>
        <img src={hero} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};
export default Landing;
