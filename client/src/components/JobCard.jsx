import Wrapper from '../assets/wrappers/JobCard';
import day from 'dayjs';
import { JobCardInfo, JobCardEdit } from '.';

import { useState } from 'react';

const JobCard = ({
  company,
  position,
  city,
  jobStatus,
  jobType,
  createdAt,
}) => {
  const [isEdited, setIsEdited] = useState(false);

  const date = day(createdAt).format('MMM DD, YYYY');

  return (
    <Wrapper>
      {isEdited ? (
        <JobCardEdit props={{ setIsEdited }} />
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
