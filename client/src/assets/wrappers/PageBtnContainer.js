import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding-bottom: 3rem;
  padding-top: 1rem;

  .page-btn-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    gap: 0.25rem;
  }

  .btn-prev,
  .btn-next,
  .btn-page {
    background: transparent;
    width: 2.125rem;
    height: 2.125rem;
    padding: 0.25rem;
    color: var(--grey-600, #525252);
  }

  .dots {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .btn-prev:hover,
  .btn-next:hover,
  button.btn-page:hover {
    color: var(--primary-500, #ee1d52);
    background-color: var(--primary-50, #fde8ee);
    border-radius: 2rem;
  }

  .active {
    color: var(--primary-50, #fde8ee);
    background-color: var(--primary-500, #ee1d52);
    border-radius: 2rem;
  }

  @media (min-width: 769px) {
    gap: 0.75rem;
    justify-content: end;
    .page-btn-container {
      gap: 0.75rem;
    }
  }
`;

export default Wrapper;
