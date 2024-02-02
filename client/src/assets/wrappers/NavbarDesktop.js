import styled from 'styled-components';

const Wrapper = styled.section`
  position: sticky;
  background: var(--white);

  div {
    height: 4.625rem;
    width: 100vw;
    width: 100svw;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 5vw;
    padding-right: 5vw;
    border-bottom: 1px solid #e5e5e5;
  }

  a:first-child {
    display: flex;
    align-items: center;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 2.5rem;
    text-align: center;
  }

  a:not(.btn) {
    color: var(--grey-700);
    text-decoration: none;
  }

  a:hover:not(.btn) {
    color: var(--primary-400);
    font-weight: var(--font-weight-semibold);
  }

  .btn-container {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
  .active {
    color: var(--grey-800);
    font-weight: var(--font-weight-semibold);
    text-decoration: none;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export default Wrapper;
