import styled from 'styled-components';

const Wrapper = styled.section`
  margin: 0 1rem;
  height: 100vh;

  @media (min-width: 769px) {
    margin: min(2.5rem, 3vh) clamp(1.5rem, 3vw, 3.5rem);
  }
`;

export default Wrapper;
