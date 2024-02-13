import styled from 'styled-components';

const Wrapper = styled.div`
  h4 {
    font-size: var(--regular-text);
    margin-bottom: 0.5rem;
    font-family: var(--font-family-body);
    font-weight: var(--font-weight-regular);
    line-height: 160%;
    letter-spacing: var(--letter-spacing);
  }
  .dropdown-container {
    position: relative;
  }

  .dropdown-btn {
    display: flex;
    align-items: center;
    justify-content: space-between;

    cursor: pointer;
    transition: var(--transition);
  }

  .dropdown-content {
    position: absolute;
    top: 110%;
    left: 0;
    width: 100%;

    background: var(--grey-50, #fafafa);
    border-radius: 0.75rem;
    border: 1px solid var(--primary-400, #f14a75);

    z-index: 100;

    overflow: hidden;
  }

  .dropdown-item {
    padding: 0.375rem 0.75rem;
    cursor: pointer;
    transition: 0.2s all;
  }

  .dropdown-item:hover {
    background: var(--primary-50, #fde8ee);
  }

  .radio {
    display: none;
  }

  label {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }
`;

export default Wrapper;
