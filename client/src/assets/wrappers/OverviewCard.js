import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  margin-top: 4.75rem;

  article {
    border-radius: 1.5rem;
    height: clamp(10rem, 13vh, 13rem);
    text-align: center;

    transition: var(--transition);
  }

  a,
  button {
    text-decoration: none;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--grey-800, #292524);
    background: transparent;
    border: none;
  }

  h4 {
    width: 100%;
    font-size: 3.75rem;
    font-style: normal;
    font-weight: var(--font-weight-bold);
    line-height: 3.75rem; /* 100% */
    color: var(--grey-800, #292524);
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

    article:hover {
      transform: translateY(-2px);
    }
    article:hover.total {
      box-shadow: 0 8px 24px rgba(238, 29, 82, 0.3);
    }
    article:hover.pending {
      box-shadow: 0 8px 24px rgba(244, 198, 55, 0.3);
    }
    article:hover.interview {
      box-shadow: 0 8px 24px rgba(51, 112, 243, 0.3);
    }
    article:hover.declined {
      box-shadow: 0 8px 24px rgba(188, 49, 234, 0.3);
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
