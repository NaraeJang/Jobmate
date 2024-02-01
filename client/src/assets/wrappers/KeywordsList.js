import styled from 'styled-components';

const Wrapper = styled.section`
  margin: 6.25rem 0;
  .container {
    display: flex;
    flex-direction: column;
  }

  article {
    display: flex;
    flex-direction: row;
    gap: 1.25rem;
  }

  article:not(:last-child) {
    margin-bottom: 5rem;
  }

  .icon {
    width: 40px;
    min-width: 40px;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--primary-100);
    border-radius: 40rem;
    font-size: 1.5rem;
    color: var(--grey-700);
  }

  h5 {
    font-size: 1.25rem;
    line-height: 1.125rem;
    margin-bottom: 0.75rem;
  }

  p {
    line-height: 1.6rem;
    color: var(--grey-700);
  }

  @media (min-width: 768px) {
    .container {
      width: 100vw;
      width: 100svw;
      display: flex;
      /* flex-wrap: wrap; */
      flex-direction: row;
      gap: clamp(1rem, 2vw, 5vw);
      align-items: start;
      justify-content: center;
    }

    p {
      max-width: 20vw;
    }
  }

  @media (min-width: 1120px) {
    .container {
      max-width: 100vw;
      max-width: 100svw;

      margin: 0 auto;
      justify-content: space-evenly;
    }
  }
`;

export default Wrapper;
