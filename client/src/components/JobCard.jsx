import Wrapper from '../assets/wrappers/JobCard';
import day from 'dayjs';
import { JobCardInfo, JobCardEdit } from '.';

import { useState } from 'react';

const JobCard = (job) => {
  const { company, position, city, jobStatus, jobType, createdAt } = job;

  const [isEdited, setIsEdited] = useState(false);
  const date = day(createdAt).format('MMM DD, YYYY');

  return (
    <Wrapper>
      {isEdited ? (
        <JobCardEdit setIsEdited={setIsEdited} job={{ ...job }} />
      ) : (
        <JobCardInfo
          key={company + position}
          props={{
            date,
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
