import { Form } from 'react-router-dom';
import Wrapper from '../assets/wrappers/AddJob';
import { FormRow, FormRowSelect, SubmitBtn } from '../components';
import { JOB_STATUS, JOB_TYPE } from '../../utils/constants';

const AddJob = () => {
  return (
    <Wrapper>
      <Form method="post" className="form">
        <div className="form-center">
          <FormRow type="text" name="position" />
          <FormRow type="text" name="company" />
          <FormRow type="text" name="city" />
          <FormRowSelect
            labelText="Job Status"
            name="jobStatus"
            defaultValue={JOB_STATUS.PENDING}
            list={Object.values(JOB_STATUS)}
          />
          <FormRowSelect
            labelText="job type"
            name="jobType"
            defaultValue={JOB_TYPE.FULL_TIME}
            list={Object.values(JOB_TYPE)}
          />
          <SubmitBtn text="Add Applied Job" submitting="Creating..." />
        </div>
      </Form>
    </Wrapper>
  );
};
export default AddJob;
