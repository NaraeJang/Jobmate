import Wrapper from '../assets/wrappers/JobCardInfo';
import { JobInfo } from '.';
import { Form, useNavigate } from 'react-router-dom';
import {
  MdLocationOn,
  MdAccessTimeFilled,
  MdWork,
  MdEdit,
  MdDelete,
} from 'react-icons/md';
import { useEffect } from 'react';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';

const JobCardInfo = ({ props }) => {
  const navigate = useNavigate();
  let {
    date,
    _id,
    company,
    position,
    city,
    jobStatus,
    jobType,
    isEdited,
    setIsEdited,
  } = props;
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await customFetch.delete(`/jobs/${_id}`);
      toast.success('Job has been deleted.');
      return navigate('.');
    } catch (error) {
      console.log(error);
      toast.error(
        error?.response?.data?.msg ||
          'Something went wrong, please try it again.'
      );
      return error;
    }
  };

  return (
    <Wrapper>
      <header>
        <div className="heading">
          <div className={`job-pill ${jobStatus}`}>{jobStatus}</div>
          <h5 className="position">{position}</h5>
        </div>
        <p>{company}</p>
      </header>
      <div className="content">
        <div className="content-center">
          <JobInfo icon={<MdLocationOn />} text={city} />
          <JobInfo icon={<MdAccessTimeFilled />} text={date} />
          <JobInfo icon={<MdWork />} text={jobType} />
        </div>
        <footer className="actions">
          <button
            type="button"
            className="btn-icon btn-edit"
            onClick={() => {
              setIsEdited(true);
            }}>
            <MdEdit />
          </button>
          <Form>
            <button
              type="submit"
              className="btn-icon btn-delete"
              onClick={handleSubmit}>
              <MdDelete />
            </button>
          </Form>
        </footer>
      </div>
    </Wrapper>
  );
};
export default JobCardInfo;
