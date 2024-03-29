import styled from 'styled-components';

const Wrapper = styled.div`
  .no-job {
    display: flex;
    flex-direction: column;
    align-items: center;

    font-size: 1.5rem;
  }

  h4.job-found {
    font-size: 1.5rem;
    text-align: left;
    margin-bottom: 0.5rem;
  }

  .heading {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100%;
  }

  #sort {
    align-self: flex-end;
    width: 10rem;
    padding: 0.25rem;

    display: flex;
    flex-direction: column;
    text-align: right;

    position: relative;
  }

  .sort-btn {
    width: 100%;
    height: 2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    gap: 0.5rem;

    border: none;
    background: transparent;

    color: var(--grey-500, #737373);
    cursor: pointer;
    transition: var(--transition);
  }

  svg {
    height: 1.5rem;
  }

  .sort-btn:hover {
    color: var(--grey-700, #404040);
    /* font-weight: var(--font-weight-semibold); */
  }

  .sort-content {
    position: absolute;
    width: 80%;
    top: 105%;
    right: 1.5rem;

    background: var(--background-color);
    border-radius: 0.25rem;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25);

    color: var(--grey-500, #737373);
  }

  input.sort-item {
    display: none;
  }

  .sort-item {
    padding: 0.5rem;
    cursor: pointer;
    transition: var(--transition);
    z-index: 10000;
    position: relative;
  }

  label {
    display: block;
  }

  .sort-item:hover {
    background: var(--primary-50, #fde8ee);
  }

  .jobs {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
  }

  @media screen and (min-width: 769px) {
    .heading {
      flex-direction: row;
      justify-content: space-between;
      align-items: end;
    }
  }

  @media (min-width: 1120px) {
    .jobs {
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      margin-top: 1.25rem;
      margin-bottom: 1.25rem;
    }
  }

  @media (min-width: 1860px) {
    .jobs {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media (min-width: 2560px) {
    .jobs {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
`;

export default Wrapper;
