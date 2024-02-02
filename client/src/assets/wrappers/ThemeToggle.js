import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2.5rem;
  height: 2.5rem;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: var(--grey-500);

    background: transparent;
    border-color: transparent;

    cursor: pointer;
  }
`;

export default Wrapper;
