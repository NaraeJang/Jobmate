import styled from 'styled-components';

const Wrapper = styled.section`
  @media (min-width: 769px) {
    .dashboard-container {
      /* display: grid;
      grid-template-columns: auto 1fr; */

      margin-left: 8.5rem;
      transition: var(--transition);
    }

    .dashboard-page {
      height: calc(100vh - (min(5rem, 5vh)));
      height: calc(100svh -(min(5rem, 5vh)));
    }

    .open-sidebar + .dashboard-container {
      margin-left: 13rem; /* Updated margin when .show-sidebar is present */
    }
  }
`;

export default Wrapper;
