import Wrapper from '../assets/wrappers/JobCard';
import day from 'dayjs';
import { JobCardInfo, JobCardEdit } from '.';
import { useState } from 'react';
import { useEffect } from 'react';

const JobCard = (job) => {
  const [isEdited, setIsEdited] = useState(false);
  const {
    _id,
    company,
    position,
    city,
    jobStatus,
    jobType,
    createdAt,
    queryClient,
  } = job;

  const date = day(createdAt).format('MMM DD, YYYY');

  return (
    <Wrapper>
      {isEdited ? (
        <JobCardEdit
          setIsEdited={setIsEdited}
          job={{ ...job }}
          queryClient={queryClient}
        />
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
          queryClient={queryClient}
        />
      )}
    </Wrapper>
  );
};
export default JobCard;
