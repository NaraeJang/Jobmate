import styled from 'styled-components';

const Wrapper = styled.section`
  .container {
    width: 100vw;
    width: 100svw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  header {
    height: 70vh;
    height: 70svh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  span {
    display: inline-block;
    width: auto;
    border: 1px solid var(--primary-200);
    border-radius: 100px;
    white-space: pre-line;
    padding: 6px 12px;

    font-family: var(--font-family-body);
    font-weight: var(--font-weight-regular);
    font-size: var(--small-text);
    line-height: 1rem;

    margin-bottom: 0.75rem;
  }

  h1 {
    margin-bottom: 1.5rem;
  }

  header div {
    margin-top: 2.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  @media (min-width: 992px) {
    .container {
      flex-direction: row;
    }
  }
`;

export default Wrapper;
