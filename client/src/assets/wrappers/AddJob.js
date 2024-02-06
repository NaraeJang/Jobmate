import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  height: max(90vh, 40rem);
  height: max(90svh, 40rem);
  padding: 3.5rem 1rem;
  margin-top: 3.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    margin-top: 1.5rem;
  }

  .form {
    border-radius: 2rem;
    background: var(--grey-50, #fafafa);
  }

  @media (min-width: 769px) {
    padding: min(2.5rem, 3vh) clamp(1.5rem, 3vw, 3.5rem);
    margin-top: 0;

    .form {
      max-width: 100% !important;
    }
  }

  @media (min-width: 1120px) {
    .form-center {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      align-items: end;
    }

    button {
      height: 40px;

      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 0.5rem;
    }
  }

  @media (min-width: 2560px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

export default Wrapper;
