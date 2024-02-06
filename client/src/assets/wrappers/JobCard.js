import styled from 'styled-components';

const Wrapper = styled.article`
  background: var(--grey-100, #f5f5f5);
  border-radius: var(--border-radius-mobile);

  transition: var(--transition);

  :hover {
    box-shadow: var(--shadow-3);
  }

  @media screen and (min-width: 769px) {
    border-radius: var(--border-radius-desktop);
  }
`;

export default Wrapper;
