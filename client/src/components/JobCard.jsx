import { Form } from 'react-router-dom';
import Wrapper from '../assets/wrappers/JobCard';
import day from 'dayjs';
import { JobInfo } from '.';
import {
  MdLocationOn,
  MdAccessTimeFilled,
  MdWork,
  MdEdit,
  MdDelete,
} from 'react-icons/md';

const JobCard = ({
  company,
  position,
  jobLocation,
  jobStatus,
  jobType,
  createdAt,
}) => {
  const date = day(createdAt).format('MMM DD, YYYY');

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
          <button type="button" className="btn-icon btn-edit">
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
export default JobCard;
