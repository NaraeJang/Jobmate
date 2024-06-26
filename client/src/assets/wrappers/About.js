import styled from 'styled-components';

const Wrapper = styled.section`
  padding-top: 4rem;
  padding-bottom: 4rem;
  text-align: left;

  h4 {
    margin-top: 5rem;
    margin-bottom: 1rem;
    color: var(--primary-300);
    font-size: 1.875rem;
  }
  h5 {
    color: var(--grey-600);
    font-size: 1.3125rem;
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 2.5rem;
    color: var(--grey-900);
  }

  @media (min-width: 769px) {
    min-height: 100vh;
    min-height: 100svh;
  }
`;

export default Wrapper;
