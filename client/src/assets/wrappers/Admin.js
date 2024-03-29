import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  padding: min(2.5rem, 3vh) clamp(1.5rem, 3vw, 3.5rem);
  margin-top: 3.5rem;

  display: grid;
  grid-template-columns: 1fr;
  row-gap: 2rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    margin-top: 0;
  }
`;

export default Wrapper;
