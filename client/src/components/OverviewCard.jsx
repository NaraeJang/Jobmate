import Wrapper from '../assets/wrappers/OverviewCard';

const overviewCards = [
  {
    className: 'total',
    numberOfJob: 99, // it will be dynamic later.
    text: 'Total Jobs Applied',
  },
  {
    className: 'pending',
    numberOfJob: 27, // it will be dynamic later.
    text: 'Pending Applications',
  },
  {
    className: 'interview',
    numberOfJob: 31, // it will be dynamic later.
    text: 'Interview Scheduled',
  },
  {
    className: 'declined',
    numberOfJob: 41, // it will be dynamic later.
    text: 'Total Jobs Applied',
  },
];

const OverviewCard = () => {
  return (
    <Wrapper>
      {overviewCards.map((card) => {
        const { className, numberOfJob, text } = card;

        return (
          <article key={className} className={className}>
            <h4>{numberOfJob}</h4>
            <p>{text}</p>
          </article>
        );
      })}
    </Wrapper>
  );
};
export default OverviewCard;
