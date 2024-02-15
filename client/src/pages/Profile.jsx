import Wrapper from '../assets/wrappers/Profile';
import { FormRow, SubmitBtn } from '../components';
import { useOutletContext } from 'react-router-dom';
import { useNavigation, Form } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';
import { useDashboardContext } from './DashboardLayout';

export const action = async ({ request }) => {
  const formData = await request.formData();

  const file = formData.get('avatar');
  if (file && file.size > 500000) {
    toast.error('Image size too large');
    return null;
  }

  try {
    await customFetch.patch('/users/update-user', formData);
    toast.success('Profile updated successfully');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }
  return null;
};

const Profile = () => {
  const { user } = useDashboardContext();
  const { name, lastName, email, city } = user;

  return (
    <Wrapper>
      <Form method="post" className="form" encType="multipart/form-data">
        <h2>Profile</h2>
        <div className="form-center">
          <div className="form-row">
            <label htmlFor="avatar" className="form-label">
              Select an image file (max 0.5 MB):
            </label>
            <input
              type="file"
              id="avatar"
              name="avatar"
              className="form-input"
              accept="image/*"
            />
          </div>
          <FormRow type="text" name="name" defaultValue={name} />
          <FormRow
            type="text"
            name="lastName"
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
