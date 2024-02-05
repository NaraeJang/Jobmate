import { Form } from 'react-router-dom';
import Wrapper from '../assets/wrappers/AddJob';
import { FormRow } from '../components';

const AddJob = () => {
  return (
    <Wrapper>
      <Form method="post" className="form">
        <div className="form-center">
          <FormRow type="text" name="position" />
          <FormRow type="text" name="company" />
          <FormRow type="text" name="city" />
        </div>
      </Form>
    </Wrapper>
  );
};
export default AddJob;
