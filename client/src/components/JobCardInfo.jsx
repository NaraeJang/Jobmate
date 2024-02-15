import Wrapper from '../assets/wrappers/JobCardInfo';
import { JobInfo } from '.';
import { Form } from 'react-router-dom';
import {
  MdLocationOn,
  MdAccessTimeFilled,
  MdWork,
  MdEdit,
  MdDelete,
} from 'react-icons/md';
import { useEffect } from 'react';

const JobCardInfo = ({ props }) => {
  const {
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
          <Form method="DELETE">
            <button type="submit" className="btn-icon btn-delete">
              <MdDelete />
            </button>
          </Form>
        </footer>
      </div>
    </Wrapper>
  );
};
export default JobCardInfo;
