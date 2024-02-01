import styled from 'styled-components';

const Wrapper = styled.section`
  /* background-color: var(--primary-50); */
  width: 100svw;
  width: 100vw;
  height: 100svh;
  height: 100vh;

  .logo {
    display: flex;
    align-items: center;
  }

  @media (min-width: 768px) {
    .logo-container {
      display: flex;
      align-items: center;
      height: 4.625rem;
      width: 100vw;
      width: 100svw;
      padding-left: 5vw;
      padding-right: 5vw;
    }
  }
`;

export default Wrapper;
