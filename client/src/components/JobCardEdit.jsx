import Wrapper from '../assets/wrappers/JobCardEdit';
import { FormRow, FormRowSelectCustom } from '../components';
import {
  Form,
  useLocation,
  useNavigate,
  useNavigation,
} from 'react-router-dom';
import { JOB_STATUS, JOB_TYPE } from '../../../utils/constants';
import { toast } from 'react-toastify';
import { useState } from 'react';
import customFetch from '../utils/customFetch';

const JobCardEdit = ({ setIsEdited, job }) => {
  const { _id, company, position, jobStatus, jobType, city } = job;
  const location = useLocation();

  const [values, setValues] = useState({
    company: company,
    position: position,
    jobStatus: jobStatus,
    jobType: jobType,
    city: city,
  });

  const navigate = useNavigate();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!position || !company || !city) {
      toast.error('Please Fill Out All Fields.');
      return;
    }

    try {
      await customFetch.patch(`/jobs/${_id}`, values);
      toast.success('Job edited successfully');
      setIsEdited(false);
      return navigate(`${location.pathname}?${location.search}`);
    } catch (error) {
      toast.error(
        error?.response?.data?.msg ||
          'Something went wrong, please try it again.'
      );
      return error;
    }
  };

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues((prevValues) => {
      return {
        ...prevValues,
        [name]: value,
      };
    });
  };

  return (
    <Wrapper>
      <form method="post" className="form">
        <div className="form-center">
          <FormRow
            type="text"
            name="position"
            defaultValue={position}
            onChange={handleJobInput}
          />
          <FormRow
            type="text"
            name="company"
            defaultValue={company}
            onChange={handleJobInput}
          />
          <FormRow
            type="text"
            name="city"
            defaultValue={city}
            onChange={handleJobInput}
          />
          <FormRowSelectCustom
            labelText="Job Status"
            name="jobStatus"
            list={Object.values(JOB_STATUS)}
            defaultValue={jobStatus}
            onChange={handleJobInput}
          />
          <FormRowSelectCustom
            labelText="job type"
            name="jobType"
            list={Object.values(JOB_TYPE)}
            defaultValue={jobType}
            onChange={handleJobInput}
          />
          <div className="btn-container">
            <button
              type="submit"
              className="btn btn-primary btn-block"
              onClick={handleSubmit}
              disabled={isSubmitting}>
              {isSubmitting ? 'Editing...' : 'Edit Job'}
            </button>
            <button
              type="button"
              className="btn btn-text btn-cancel  btn-small"
              onClick={() => setIsEdited(false)}>
              Cancel
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};
export default JobCardEdit;
