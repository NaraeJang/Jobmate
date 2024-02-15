import styled from 'styled-components';

const Wrapper = styled.article`
  border-radius: 1.5rem;
  height: clamp(10rem, 13vh, 13rem);
  text-align: center;

  transition: var(--transition);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h4 {
    width: 100%;
    font-size: 3.75rem;
    font-style: normal;
    font-weight: var(--font-weight-bold);
    line-height: 3.75rem; /* 100% */
    color: var(--grey-800, #292524);
  }

  p {
    width: 100%;
    max-width: 100%;
    padding: 0 1rem;
  }
`;

export default Wrapper;
