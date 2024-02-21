import Wrapper from '../assets/wrappers/About';

const About = () => {
  return (
    <Wrapper className="container">
      <h4>About JobMate</h4>
      <p>
        Welcome to JobMate, a personal web development project created and owned
        by <span>Narae Jang</span>. From design to development, every aspect of
        this application is a result of my dedication to crafting a seamless job
        application tracking experience.
      </p>
      <h4>Usage Policy</h4>
      <h5>Personal Project</h5>
      <p>
        JobMate is solely my personal project for web development, intended for
        portfolio usage.
      </p>
      <h5>Ownership</h5>
      <p>
        All design and development work, including the codebase, belongs to me
        Narae Jang. Unauthorized use, reproduction, or distribution is not
        permitted.
      </p>
      <h5>Data Collection</h5>
      <p>
        JobMate does not collect any personal information. Your privacy and data
        security are important, and I am committed to maintaining a secure and
        confidential user experience.
      </p>
      <h4>Application Usage</h4>
      <h5>For Job Hunting</h5>
      <p>
        Feel free to use JobMate for your job hunting activities. It's designed
        to streamline your application process and assist you in managing your
        career journey.
      </p>
      <h5>Data Persistence</h5>
      <p>
        While JobMate is available for your current and future job hunting
        needs, please note that data persistence is not guaranteed in the long
        term. Consider using the application for its intended purpose during
        your job search.
      </p>
      <p>
        Thank you for exploring JobMate! If you're interested in exploring more
        of my web development projects, feel free to visit my portfolio website.
        There, you can find a collection of projects that showcase my skills and
        passion for creating engaging web applications. Visit my portfolio at{' '}
        <a href="#">my portfolio website</a>. Thank you for your interest in
        JobMate and my other projects!
      </p>
    </Wrapper>
  );
};
export default About;
