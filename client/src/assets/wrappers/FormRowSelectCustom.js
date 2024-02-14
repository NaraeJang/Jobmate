import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;

  h4 {
    font-size: var(--regular-text);
    margin-bottom: 0.5rem;
    font-family: var(--font-family-body);
    font-weight: var(--font-weight-regular);
    line-height: 160%;
    letter-spacing: var(--letter-spacing);
  }

  .row-btn {
    width: 100%;
    height: 2.5rem;
    padding: 0.375rem 0.75rem;
    margin: 0;
    border-radius: var(--border-radius-box);
    background: transparent;
    border: 1px solid var(--grey-200);
    color: var(--text-color);
    font-size: var(--regular-text);

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    cursor: pointer;
    transition: var(--transition);
  }

  .row-btn:active,
  .row-btn:visited,
  .row-btn:focus,
  .row-btn:focus-visible {
    border: 1px solid var(--primary-400, #f14a75);
  }

  .option {
    display: none;
  }

  .dropdown {
    width: 100%;
    position: absolute;
    z-index: 100;
    top: 74.5px;
    border-radius: var(--border-radius-box);
    background: var(--grey-50, #fafafa);
    border: 1px solid var(--primary-400, #f14a75);
    color: var(--text-color);
    font-size: var(--regular-text);

    overflow: hidden;
  }

  label {
    display: block;
  }
  .dropdown > label {
    padding: 0.5rem 0.75rem;
  }

  .dropdown > label:hover {
    background: var(--primary-50, #fde8ee);
    cursor: pointer;
  }

  .hidden {
    display: none;
  }
`;

export default Wrapper;
