import Wrapper from '../assets/wrappers/Profile';
import { FormRow, SubmitBtn } from '../components';
import { useOutletContext } from 'react-router-dom';
import { useNavigation, Form } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';
import { useDashboardContext } from './DashboardLayout';

const Profile = () => {
  const { user } = useDashboardContext();
  const { name, lastName, email, city } = user;

  return (
    <Wrapper>
      <h2>Profile</h2>
      <Form method="post" className="form">
        <div className="form-center">
          <FormRow type="text" name="name" defaultValue={name} />
          <FormRow
            type="text"
            name="lasName"
            labelText="last name"
            defaultValue={lastName}
          />
          <FormRow type="text" name="email" defaultValue={email} />
          <FormRow type="text" name="city" defaultValue={city} />
          <SubmitBtn text="Save changes" submitting="submitting..." />
        </div>
      </Form>
    </Wrapper>
  );
};
export default Profile;
