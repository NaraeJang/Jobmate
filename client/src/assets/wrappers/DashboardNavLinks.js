import styled from 'styled-components';

const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;

  li {
    width: 100%;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: start;
    text-transform: capitalize;
    gap: 1.5rem;
    text-decoration: none;
    color: var(--grey-700, #404040) !important;
  }

  a > * {
    transition: var(--transition);
  }

  a:hover .icon {
    background-color: var(--primary-50, #fde8ee);
    color: var(--primary-500, #ee1d52);
  }

  a:hover span {
    color: var(--primary-500, #ee1d52);
  }

  a span {
    color: var(--grey-600, #525252);
  }

  .icon {
    padding: 0.5rem;
    background: var(--grey-200, #e5e5e5);

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
  }

  svg {
    height: 1.5rem;
    width: 1.5rem;
  }

  a.active span {
    color: var(--grey-900, #1c1917);
    font-weight: var(--font-weight-semibold);
  }

  a.active .icon {
    background: var(--primary-500, #ee1d52);
  }
  a.active .icon svg {
    color: var(--primary-50, #fde8ee);
  }
`;

export default Wrapper;
