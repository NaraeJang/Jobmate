import styled from 'styled-components';

const Wrapper = styled.section`
  height: 2.5rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;

  margin: min(2.5rem, 3vh) clamp(1.5rem, 3vw, 3.5rem);

  .user-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    cursor: pointer;
  }

  .user-container:hover {
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export default Wrapper;
