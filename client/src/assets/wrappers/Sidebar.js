import styled from 'styled-components';

const Wrapper = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  height: 100svh;

  .main-container {
    position: relative;

    width: 8.5rem;
    min-height: 100vh;
    height: 100vh;
    height: 100svh;

    border-right: 1px solid var(--grey-300, #d4d4d4);
    padding: 0;

    transition: var(--transition);
  }

  .toggle-btn {
    position: absolute;
    top: min(2.5rem, 3vh);
    right: calc(-2.5rem / 2);

    width: 2.5rem;
    height: 2.5rem;

    border-radius: 2.5rem;
    border: none;
    background: var(--primary-50, #fde8ee);

    cursor: pointer;
    transition: var(--transition);
    z-index: 100;
  }

  .toggle-btn:hover {
    color: var(--primary-500);
  }

  .sidebar-container {
    position: fixed;
    min-height: 100vh;
    height: 100vh;
    height: 100svh;
    width: auto;

    top: 0;
    left: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    padding: min(2.5rem, 3vh) 2rem;
  }

  span,
  p {
    opacity: 0;
    visibility: hidden;
    display: none;
  }

  .main-container.show-sidebar {
    /* width: clamp(20.475rem, 20.5rem, 20.5vw); */
    width: 13rem;

    padding: 0 1.5rem;
  }

  .main-container.show-sidebar .sidebar-container {
    align-items: start;
  }

  .show-sidebar span,
  .show-sidebar p {
    opacity: 1;
    visibility: visible;
    display: flex;
  }

  header {
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  header img {
    width: 4.5rem;
    transition: var(--transition);
  }

  .show-sidebar header img {
    width: 6rem;
  }
  .symbol-logo {
    width: 2.5rem;
    height: 2.5rem;
  }
  .content li {
    margin-bottom: 1rem;
    height: auto;
  }

  .logout {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.5rem;
    color: var(--grey-600, #525252);
    text-decoration: none;

    cursor: pointer;
    transition: var(--transition);
  }

  .logout svg {
    height: 1rem;
    width: 1rem;
    margin: 0.5rem 0;
    color: var(--grey-700, #404040);
  }

  .logout:hover {
    color: var(--primary-500, #ee1d52);
  }
  .logout:hover svg {
    color: var(--primary-500, #ee1d52);
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export default Wrapper;
