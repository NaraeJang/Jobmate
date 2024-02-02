import styled from 'styled-components';

const Wrapper = styled.div`
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
  .toggle-container {
    display: flex;
    flex-direction: row;
    gap: 0.125rem;
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

  .mobile-header-spacer {
    width: 2.5rem;
    height: 2.5rem;
  }

  .logo {
    display: flex;
    align-items: center;
  }

  .logo img {
    height: 1.375rem;
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

  .dark-mode__user {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.125rem;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

export default Wrapper;
