import Wrapper from '../assets/wrappers/Header';
import hero from '../assets/images/hero.png';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 414);
    };

    // Initial check on mount
    handleResize();

    // Attach event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
            <Link className="btn btn-primary" to="/register">
              Register
            </Link>
            <Link className="btn btn-text" to="/login">
              Log In or{isSmallScreen && <br />} Try Demo User
            </Link>
          </div>
        </header>
        <img src={hero} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};
export default Header;
