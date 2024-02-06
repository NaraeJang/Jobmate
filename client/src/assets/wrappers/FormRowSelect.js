import styled from 'styled-components';

const Wrapper = styled.div`
  .form-select-container {
    position: relative;

    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .form-select {
    appearance: none;
  }

  .icon-container {
    width: 40px;
    height: 100%;
    position: absolute;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
  }

  .icon-container svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  option {
    position: absolute;
    top: 0;
  }
`;

export default Wrapper;
