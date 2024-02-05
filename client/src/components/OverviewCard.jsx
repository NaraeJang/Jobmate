import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/OverviewCard';

const overviewCards = [
  {
    className: 'total',
    numberOfJob: 99, // it will be dynamic later.
    text: 'Total Jobs Applied',
    link: `all-jobs/`,
  },
  {
    className: 'pending',
    numberOfJob: 27, // it will be dynamic later.
    text: 'Pending Applications',
    link: `all-jobs/`,
  },
  {
    className: 'interview',
    numberOfJob: 31, // it will be dynamic later.
    text: 'Interview Scheduled',
    link: `all-jobs/`,
  },
  {
    className: 'declined',
    numberOfJob: 41, // it will be dynamic later.
    text: 'Jobs Declined',
    link: `all-jobs/`,
  },
];

const OverviewCard = () => {
  return (
    <Wrapper>
      {overviewCards.map((card) => {
        const { className, numberOfJob, text, link } = card;

        return (
          <article key={className} className={className}>
            <Link to={link}>
              <h4>{numberOfJob}</h4>
              <p>{text}</p>
            </Link>
          </article>
        );
      })}
    </Wrapper>
  );
};
export default OverviewCard;
