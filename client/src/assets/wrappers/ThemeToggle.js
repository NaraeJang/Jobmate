import styled from 'styled-components';

const Wrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2.5rem;
  height: 2.5rem;

  background: transparent;
  border: none;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: var(--grey-500);

    cursor: pointer;
    transition: var(--transition);
  }

  @media (min-width: 769px) {
    svg:hover {
      color: var(--primary-400);
    }
  }
`;

export default Wrapper;
