import { Form } from 'react-router-dom';
import Wrapper from '../assets/wrappers/AddJob';
import { FormRow, FormRowSelectCustom, SubmitBtn } from '../components';
import { JOB_STATUS, JOB_TYPE } from '../../../utils/constants';
import { useDashboardContext } from './DashboardLayout';

const AddJob = () => {
  const { jobStatus, setJobStatus, jobType, setJobType } =
    useDashboardContext();

  return (
    <Wrapper>
      <Form method="post" className="form">
        <div className="form-center">
          <FormRow type="text" name="position" />
          <FormRow type="text" name="company" />
          <FormRow type="text" name="city" />
          <FormRowSelectCustom
            labelText="Job Status"
            name="jobStatus"
            list={Object.values(JOB_STATUS)}
            dropdownType={setJobStatus}
            dropdownItem={jobStatus}
          />
          <FormRowSelectCustom
            labelText="job type"
            name="jobType"
            list={Object.values(JOB_TYPE)}
            dropdownType={setJobType}
            dropdownItem={jobType}
          />
          <SubmitBtn text="Add Applied Job" submitting="Creating..." />
        </div>
      </Form>
    </Wrapper>
  );
};
export default AddJob;
