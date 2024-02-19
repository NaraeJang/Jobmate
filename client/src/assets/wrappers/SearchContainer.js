import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 1.5rem 0;
  background: transparent;

  button,
  a {
    margin-top: 1.5rem;
  }
  h2 {
    color: var(--grey-700);
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }
  .form {
    border-radius: 2rem;
    background: var(--grey-50, #fafafa);
    max-width: 100%;
  }
  @media screen and (min-width: 769px) {
    padding: 0;
  }

  @media screen and (min-width: 869px) {
    padding: 0;
    background: var(--grey-50, #fafafa);
    border-radius: 2rem;

    button,
    a {
      height: 2.5rem;

      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 0.5rem;
    }

    .form {
      width: 100%;
      max-width: 100%;
      max-width: 1120px;
    }
    .form-center {
      display: grid;
      grid-template-columns: 1fr auto;
      width: 100%;
      height: 100%;
      gap: 1rem;
      align-items: end;
    }
    .search-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 1rem;
    }
  }
`;

export default Wrapper;
