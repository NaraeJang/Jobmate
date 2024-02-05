import styled from 'styled-components';

const Wrapper = styled.section`
  @media (min-width: 769px) {
    .dashboard {
      display: grid;
      grid-template-columns: auto 1fr;
    }
  }
`;

export default Wrapper;
