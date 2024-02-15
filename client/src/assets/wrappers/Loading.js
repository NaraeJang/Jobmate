import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  height: 80vh;
  height: 80svh;
  padding: min(2.5rem, 3vh) clamp(1.5rem, 3vw, 3.5rem);
  margin-top: 3.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

export default Wrapper;
