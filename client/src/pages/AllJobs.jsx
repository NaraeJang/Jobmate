import Wrapper from '../assets/wrappers/AllJobs';
import { JobsContainer, SearchContainer } from '../components';

const AllJobs = () => {
  return (
    <Wrapper>
      <SearchContainer />
      <JobsContainer />
    </Wrapper>
  );
};
export default AllJobs;
