import { Link, useNavigate } from 'react-router-dom';
import Wrapper from '../assets/wrappers/OverviewCard';
import customFetch from '../utils/customFetch';
import { handle } from 'express/lib/router';

const OverviewCard = ({ defaultStats }) => {
  const navigate = useNavigate();
  const { pending, interview, declined } = defaultStats;

  const handleSubmit = async (status) => {
    try {
      await customFetch.get(`/jobs?jobStatus=${status}`);
      return navigate(`./all-jobs?jobStatus=${status}`);
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  const overviewCards = [
    {
      className: 'total',
      numberOfJob: pending + interview + declined || 0,
      text: 'Total Jobs Applied',
      link: `all`,
    },
    {
      className: 'pending',
      numberOfJob: pending || 0,
      text: 'Pending Applications',
      link: `pending`,
    },
    {
      className: 'interview',
      numberOfJob: interview || 0,
      text: 'Interview Scheduled',
      link: `interview`,
    },
    {
      className: 'declined',
      numberOfJob: declined || 0,
      text: 'Jobs Declined',
      link: `declined`,
    },
  ];

  return (
    <Wrapper>
      {overviewCards.map((card) => {
        const { className, numberOfJob, text, link } = card;

        return (
          <article key={className} className={className}>
            <button type="button" onClick={() => handleSubmit(link)}>
              <h4>{numberOfJob}</h4>
              <p>{text}</p>
            </button>
          </article>
        );
      })}
    </Wrapper>
  );
};
export default OverviewCard;
