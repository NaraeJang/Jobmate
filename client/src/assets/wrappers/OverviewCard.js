import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  margin-top: 4.75rem;

  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 1.5rem;
    height: clamp(10rem, 13vh, 13rem);
    text-align: center;
  }

  h4 {
    width: 100%;
    font-size: 3.75rem;
    font-style: normal;
    font-weight: var(--font-weight-bold);
    line-height: 3.75rem; /* 100% */
  }

  p {
    max-width: calc(100% - 20%);
    padding: 0 1rem;
  }

  .total {
    background: linear-gradient(118deg, #ee1d52 0%, #ff607e 48.12%);
  }

  .total h4,
  .total p {
    color: var(--grey-50, #fafafa);
  }

  @media (min-width: 769px) {
    margin-top: 0;
    gap: 1.25rem;

    article {
      border-radius: 2rem;
      height: 13rem;
    }
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    article {
      height: min(16.5rem, 30vh);
    }
  }
`;

export default Wrapper;
