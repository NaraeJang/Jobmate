import { Form, redirect } from 'react-router-dom';
import Wrapper from '../assets/wrappers/AddJob';
import { FormRow, FormRowSelectCustom, SubmitBtn } from '../components';
import { JOB_STATUS, JOB_TYPE } from '../../../utils/constants';
import { useDashboardContext } from './DashboardLayout';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);

  try {
    await customFetch.post('/jobs', data);
    toast.success('Job added successfully!');
    return redirect('../all-jobs');
  } catch (error) {
    toast.error(
      error?.response?.data?.msg || 'Something went wrong, please try it again.'
    );
    return error;
  }
};

const AddJob = () => {
  const { user } = useDashboardContext();

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
            defaultValue={JOB_STATUS.PENDING}
          />
          <FormRowSelectCustom
            labelText="job type"
            name="jobType"
            list={Object.values(JOB_TYPE)}
            defaultValue={JOB_TYPE.FULL_TIME}
          />
          <SubmitBtn text="Add Applied Job" submitting="Creating..." />
        </div>
      </Form>
    </Wrapper>
  );
};
export default AddJob;
