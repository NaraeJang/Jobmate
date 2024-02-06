import Wrapper from '../assets/wrappers/JobCard';
import day from 'dayjs';
import { JobCardInfo } from '.';

import { useState } from 'react';

const JobCard = ({
  company,
  position,
  jobLocation,
  jobStatus,
  jobType,
  createdAt,
}) => {
  const [isEdited, setIsEdited] = useState(false);

  const date = day(createdAt).format('MMM DD, YYYY');

  return (
    <Wrapper>
      {isEdited ? (
        <h2>will work on it!</h2>
      ) : (
        <JobCardInfo
          key={company + position}
          props={{
            date,
            company,
            position,
            jobLocation,
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
