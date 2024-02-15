import Wrapper from '../assets/wrappers/StatItem';

const StatItem = ({ count, title, setting }) => {
  return (
    <Wrapper className={setting}>
      <h4>{count}</h4>
      <p>{title}</p>
    </Wrapper>
  );
};
export default StatItem;
