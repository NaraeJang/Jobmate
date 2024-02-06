import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 0 1rem;

  @media (min-width: 769px) {
    /* padding: min(2.5rem, 3vh) clamp(1.5rem, 3vw, 3.5rem); */
    padding: 0 clamp(1.5rem, 3vw, 3.5rem);
  }
`;

export default Wrapper;
