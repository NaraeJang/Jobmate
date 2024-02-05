import Wrapper from '../assets/wrappers/Overview';
import { ChartContainer, OverviewCard } from '../components';
import { useDashboardContext } from './DashboardLayout';

const Overview = () => {
  return (
    <Wrapper>
      <OverviewCard />
      <ChartContainer />
    </Wrapper>
  );
};
export default Overview;
