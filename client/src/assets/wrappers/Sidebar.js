import styled from 'styled-components';

const Wrapper = styled.aside`
  display: block;
  background-color: lightblue;

  @media (max-width: 768px) {
    display: none;
  }
`;

export default Wrapper;
