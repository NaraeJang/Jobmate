import styled from 'styled-components';

const Wrapper = styled.article`
  background: var(--grey-100, #f5f5f5);
  border-radius: var(--border-radius-mobile);

  transition: var(--transition);

  :hover {
    box-shadow: var(--shadow-3);
  }

  h5 {
    color: var(--grey-800, #292524);
    font-family: var(--font-family-body);
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 600;
    line-height: 160%; /* 2.4rem */
    letter-spacing: 0.03rem;
  }

  .heading {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  header {
    border-bottom: 1px solid #d4d4d4;
  }

  header,
  .content {
    padding: 1.5rem;
  }
  .content {
    position: relative;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: var(--grey-400, #a3a3a3);
  }

  .content-center {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-bottom: 2.5rem;
  }

  footer {
    border: none;
    position: absolute;
    padding: 1.5rem;
    bottom: 0;
    right: 0;

    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: end;
  }

  footer button {
    width: 2.5rem;
    height: 2.5rem;
    border: none;
    background: transparent;

    cursor: pointer;
  }

  footer button svg {
    transition: var(--transition);
  }
  footer button:hover svg {
    color: var(--primary-500, #ee1d52);
  }

  @media screen and (min-width: 769px) {
    border-radius: var(--border-radius-desktop);

    .heading {
      flex-direction: row-reverse;
      justify-content: start;
      align-items: center;
      gap: 0.75rem;
    }

    .content-center {
      grid-template-columns: 1fr 1fr;
      margin-bottom: 1.5rem;
    }
  }
`;

export default Wrapper;
