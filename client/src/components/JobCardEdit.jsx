import Wrapper from '../assets/wrappers/JobCardEdit';
import { FormRow, FormRowSelectCustom, SubmitBtn } from '../components';
import { Form } from 'react-router-dom';
import { JOB_STATUS, JOB_TYPE } from '../../utils/constants';
import { useDashboardContext } from '../pages/DashboardLayout';

const JobCardEdit = ({ props }) => {
  const { jobStatus, setJobStatus, jobType, setJobType } =
    useDashboardContext();

  const { setIsEdited } = props;

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
          <div className="btn-container">
            <SubmitBtn text="Edit Job" submitting="Editing..." />
            <button
              type="button "
              className="btn btn-text btn-cancel  btn-small"
              onClick={() => setIsEdited(false)}>
              Cancel
            </button>
          </div>
        </div>
      </Form>
    </Wrapper>
  );
};
export default JobCardEdit;
