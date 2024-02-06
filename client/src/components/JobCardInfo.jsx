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

const JobCardInfo = ({ props }) => {
  const {
    date,
    company,
    position,
    jobLocation,
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
          <h5>{position}</h5>
        </div>
        <p>{company}</p>
      </header>
      <div className="content">
        <div className="content-center">
          <JobInfo icon={<MdLocationOn />} text={jobLocation} />
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
          <Form method="post">
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
