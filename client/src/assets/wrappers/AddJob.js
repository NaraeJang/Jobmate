import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 0 1rem;

  button {
    margin-top: 1.5rem;
  }

  .form {
    border-radius: 2rem;
    background: var(--grey-50, #fafafa);
  }

  @media (min-width: 769px) {
    padding: min(2.5rem, 3vh) clamp(1.5rem, 3vw, 3.5rem);
  }
`;

export default Wrapper;
