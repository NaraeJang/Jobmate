import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/OverviewCard';

const OverviewCard = ({ defaultStats }) => {
  const { pending, interview, declined } = defaultStats;

  const overviewCards = [
    {
      className: 'total',
      numberOfJob: pending + interview + declined || 0,
      text: 'Total Jobs Applied',
      link: `all-jobs`,
    },
    {
      className: 'pending',
      numberOfJob: pending || 0,
      text: 'Pending Applications',
      link: `all-jobs`,
    },
    {
      className: 'interview',
      numberOfJob: interview || 0,
      text: 'Interview Scheduled',
      link: `all-jobs`,
    },
    {
      className: 'declined',
      numberOfJob: declined || 0,
      text: 'Jobs Declined',
      link: `all-jobs`,
    },
  ];

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
