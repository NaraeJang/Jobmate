import styled from 'styled-components';

const Wrapper = styled.div`
  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: var(--grey-800);
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
  }

  img {
    width: 2rem;
    height: 2rem;
    border-radius: 2rem;
    overflow: hidden;
    object-fit: cover;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: var(--grey-500);

    background: transparent;
    border-color: transparent;

    cursor: pointer;
  }

  p {
    opacity: 1;
    visibility: visible;
  }

  @media (max-width: 768px) {
    p {
      opacity: 0;
      visibility: hidden;
      display: none;
    }
  }
  @media (min-width: 769px) {
    img {
      margin-right: 1rem;
    }
  }
`;

export default Wrapper;
