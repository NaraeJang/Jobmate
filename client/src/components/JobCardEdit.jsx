import Wrapper from '../assets/wrappers/JobCardEdit';
import { FormRow, FormRowSelectCustom, SubmitBtn } from '../components';
import { Form } from 'react-router-dom';
import { JOB_STATUS, JOB_TYPE } from '../../../utils/constants';
import { useDashboardContext } from '../pages/DashboardLayout';

const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);

  return null;
};

const JobCardEdit = ({ setIsEdited, job }) => {
  const { _id, company, position, jobStatus, jobType, city } = job;

  return (
    <Wrapper>
      <Form method="post" className="form" action={action}>
        <div className="form-center">
          <FormRow type="text" name="position" defaultValue={position} />
          <FormRow type="text" name="company" defaultValue={company} />
          <FormRow type="text" name="city" defaultValue={city} />
          <FormRowSelectCustom
            labelText="Job Status"
            name="jobStatus"
            list={Object.values(JOB_STATUS)}
            defaultValue={jobStatus}
          />
          <FormRowSelectCustom
            labelText="job type"
            name="jobType"
            list={Object.values(JOB_TYPE)}
            defaultValue={jobType}
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
