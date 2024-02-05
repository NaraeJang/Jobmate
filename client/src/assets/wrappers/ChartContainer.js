import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 1rem;
  border-radius: 1.5rem;
  background: #ededed;
  width: 100%;
  height: max(50vh, 28rem);
  max-height: 32rem;

  .monthly-chart-header {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;

    padding: 2.5rem 0;
  }

  .pill-toggle-box {
    position: relative;
    width: 12.3rem;
    height: 2.13rem;
    text-align: center;
    border-radius: 2.5rem;
    background: var(--grey-50, #fafafa);

    box-shadow: 0px 8px 12px 0px rgba(255, 255, 255, 0.15);
  }

  .slider {
    position: absolute;
    width: 6.125rem;
    height: 100%;
    top: 0;
    left: 0;

    border-radius: 2.5rem;
    background: var(--primary-400, #f14a75);
    transition: var(--transition);
  }

  .toggle-btn {
    position: relative;
    background: transparent;

    width: 6.125rem;
    height: 2.13rem;

    border: none;
    outline: none;
    text-align: center;

    cursor: pointer;
  }

  h4 {
    font-size: 1.5rem;
    color: var(--grey-800, #292524);
  }

  @media (min-width: 769px) {
    margin-top: 1.25rem;
    border-radius: 2rem;
    height: max(32rem, 50vh);
    max-height: 40rem;

    .monthly-chart-header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 1.2rem;

      padding: 3rem;
    }
  }
`;

export default Wrapper;
