import { Form, useNavigation, redirect } from 'react-router-dom';
import Wrapper from '../assets/wrappers/AddJob';
import { FormRow, FormRowSelectCustom, SubmitBtn } from '../components';
import { JOB_STATUS, JOB_TYPE } from '../../../utils/constants';
import { useDashboardContext } from './DashboardLayout';
import customFetch from '../utils/customFetch';

export const action = async ({ request }) => {
  const { user, jobStatus, jobType } = useDashboardContext();
  const formData = await request.formData();
  const dataFromForm = Object.fromEntries(formData);

  // Add jobStatus and jobType to the formData
  formData.append('jobStatus', jobStatus);
  formData.append('jobType', jobType);

  const data = Object.fromEntries(formData);
  console.log(data);

  // try {
  //   await customFetch.post('/jobs')
  // } catch (error) {

  // }

  return null;
};

const AddJob = () => {
  const { user, jobStatus, setJobStatus, jobType, setJobType } =
    useDashboardContext();

  return (
    <Wrapper>
      <Form method="post" className="form">
        <div className="form-center">
          <FormRow type="text" name="position" />
          <FormRow type="text" name="company" />
          <FormRow type="text" name="city" defaultValue={user.city} />
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
