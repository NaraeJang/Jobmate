import Wrapper from '../assets/wrappers/JobCard';
import day from 'dayjs';
import { JobCardInfo, JobCardEdit } from '.';
import { useState } from 'react';

const JobCard = (job) => {
  const { _id, company, position, city, jobStatus, jobType, createdAt } = job;
  const [isEdited, setIsEdited] = useState(false);
  const date = day(createdAt).format('MMM DD, YYYY');

  return (
    <Wrapper>
      {isEdited ? (
        <JobCardEdit setIsEdited={setIsEdited} job={{ ...job }} />
      ) : (
        <JobCardInfo
          key={_id}
          props={{
            date,
            _id,
            company,
            position,
            city,
            jobStatus,
            jobType,
            createdAt,
            isEdited,
            setIsEdited,
          }}
        />
      )}
    </Wrapper>
  );
};
export default JobCard;
