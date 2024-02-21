import { useRouteError } from 'react-router-dom';
import Wrapper from '../assets/wrappers/ErrorElement';

const ErrorElement = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <Wrapper>
      <h5>There was an error...</h5>
      <p>Please try it later.</p>
    </Wrapper>
  );
};
export default ErrorElement;
