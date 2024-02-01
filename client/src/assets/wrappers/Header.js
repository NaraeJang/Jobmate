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
    height: 68vh;
    height: 68svh;
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
    color: var(--grey-600);

    margin-bottom: 0.75rem;
  }

  h1 {
    margin-bottom: 1.5rem;

    font-size: clamp(2rem, 3.5vw, 3.5rem);
  }

  header div {
    margin-top: 2.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 0.5rem;
  }

  @media (min-width: 768px) {
    .container {
      display: grid;
      grid-template-columns: minmax(20vw, 40vw) minmax(10vw, 40vw);
      gap: max(1rem, 1.25vw);
    }

    header {
      margin: 0 auto;
    }

    header p {
      max-width: 39rem;
    }

    header a:first-child {
      text-decoration: none;
    }

    img {
      width: min(50rem, 40vw);
    }
  }

  @media (min-width: 1120px) {
    .container {
      max-width: 100vw;
      max-width: 100svw;

      margin: 0 auto;
    }
  }
`;

export default Wrapper;
