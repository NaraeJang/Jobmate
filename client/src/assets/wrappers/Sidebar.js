import styled from 'styled-components';

const Wrapper = styled.aside`
  .dashboard-container {
    position: relative;
    border: 3px solid #73ad21;

    min-height: 100vh;
    height: 100vh;
    height: 100svh;

    background-color: teal;

    border-right: 1px solid var(--grey-300, #d4d4d4);
    padding: 0;

    width: 10rem;

    transition: var(--transition);
  }

  .toggle-btn {
    position: absolute;
    top: 3.38rem;
    right: calc(-2.5rem / 2);

    width: 2.5rem;
    height: 2.5rem;

    border: 3px solid red;
    cursor: pointer;

    z-index: 100;
  }

  .sidebar-container {
    position: fixed;
    min-height: 100vh;
    height: 100vh;
    height: 100svh;
    width: auto;

    background-color: lightblue;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    padding: 3.38rem 2rem;

    transition: 1s ease-in-out all;
  }

  span,
  p {
    opacity: 0;
    visibility: hidden;
    display: none;
  }

  .dashboard-container.show-sidebar {
    width: clamp(20.475rem, 20.5rem, 20.5vw);
    align-items: start;

    padding: 0 1.5rem;
  }

  .show-sidebar span,
  .show-sidebar p {
    opacity: 1;
    visibility: visible;
    display: flex;
  }

  header {
    height: 2.5rem;
    background: yellow;
    display: flex;
    align-items: center;
    justify-content: center;
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
  }

  .logout svg {
    height: 1rem;
    width: 1rem;
    margin: 0.5rem 0;
    color: var(grey-700, #404040);
  }

  .logout:hover {
    color: var(--primary-500, #ee1d52);
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export default Wrapper;
