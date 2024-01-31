import styled from 'styled-components';

const Wrapper = styled.main`
  width: 100vw;
  width: 100svw;
  .container {
    height: 100vh;
    height: 100svh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;
  }
  h2 {
    font-size: clamp(8rem, 15vw, 15rem);
  }

  h3 {
    font-size: clamp(2rem, 3.375vw, 3.375rem);
  }

  p {
    padding: 0 10vw;
    color: var(--grey-700);
  }

  @media (min-width: 992px) {
    .container {
      flex-direction: row;
      text-align: start;
      gap: 1.5rem;
    }

    h2 {
    }

    p {
      padding: 0;
    }

    .box-text > * {
      margin-bottom: 0.5rem;
    }
  }
`;

export default Wrapper;
