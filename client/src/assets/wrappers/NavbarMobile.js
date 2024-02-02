import styled from 'styled-components';

const Wrapper = styled.nav`
  position: absolute;
  top: 0;
  z-index: 100;

  .container {
    position: relative;
    height: auto;
    width: 100vw;
    width: 100svw;
    border-bottom: 1px solid var(--grey-200);

    background: var(--white);
  }

  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 3.5rem;
  }

  .nav-toggle {
    font-size: 1.5rem;
    color: var(--grey-500);
    width: 2.5rem;
    height: 2.5rem;

    background: transparent;
    border-color: transparent;

    cursor: pointer;
  }

  .logo {
    display: flex;
    align-items: center;
  }

  .logo img {
    height: 1.375rem;
  }

  .mobile-header-spacer {
    width: 2.5rem;
    height: 2.5rem;
  }

  .links-container {
    overflow: hidden;
    transition: var(--transition);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  ul {
    width: 100%;
  }

  li:first-child {
    margin-top: 1rem;
  }

  li a:not(.btn) {
    color: var(--grey-700);
  }

  li {
    margin-bottom: 1rem;
    height: auto;
  }

  li:last-child {
    margin-bottom: 1.5rem;
  }

  .active {
    color: var(--grey-800);
    font-weight: var(--font-weight-semibold);
    text-decoration: none;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

export default Wrapper;
