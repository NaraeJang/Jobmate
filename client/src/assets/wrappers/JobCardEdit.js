import styled from 'styled-components';

const Wrapper = styled.div`
  .form {
    padding: 1.5rem;
    margin: 0;
    width: 100%;
    max-width: 100%;
  }

  .btn-container {
    display: flex;
    flex-direction: row;
    height: 2.5rem;
    margin-top: 1.5rem;
    gap: 0.5rem;
  }

  .btn {
    padding: 0.75rem 2rem;
  }

  @media screen and (min-width: 820px) {
    .form {
      padding: 2rem 2rem;
    }
    .form-center {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.75rem;
      align-items: end;
    }

    .btn-container {
      flex-direction: row-reverse;
      justify-content: end;
      margin-bottom: 0.5rem;
    }

    .btn-cancel {
      padding: 0.75rem 1rem !important;
    }
  }
`;

export default Wrapper;
