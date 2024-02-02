import styled from 'styled-components';

const Wrapper = styled.section`
  /* background-color: var(--primary-50); */
  width: 100svw;
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  padding-top: 2rem;
  padding-bottom: 2rem;

  margin: auto 0;

  form {
    width: 100%;
    height: 100%;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h4 {
    font-size: clamp(1.25rem, 1.5rem, 1.5vw);
    margin-top: 0.5rem;
    text-align: center;
  }

  .no-info {
    color: var(--grey-500);
    font-size: var(--small-text);
  }

  .input-container {
    margin-top: 2rem;
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  label {
    color: var(--grey-500);
  }

  .form-input {
    width: 100%;
  }

  .btn-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1rem;
    margin-top: 1.5rem;
  }

  p:last-child {
    margin-top: 1.5rem;
  }

  @media (min-width: 768px) {
    .logo img {
      height: 2.5rem;
    }
  }

  @media (max-width: 380px) {
    height: 100%;
  }
  @media (max-height: 500px) {
    height: 100%;
  }
`;

export default Wrapper;
