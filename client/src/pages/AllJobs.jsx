import { useLoaderData } from 'react-router-dom';
import Wrapper from '../assets/wrappers/AllJobs';
import { JobsContainer, SearchContainer } from '../components';
import customFetch from '../utils/customFetch';
import { createContext, useContext } from 'react';
import { toast } from 'react-toastify';

export const loader = async () => {
  try {
    const { data } = await customFetch('/jobs');

    return { data };
  } catch (error) {
    toast.error(
      error?.response?.data?.msg || 'something went wrong, please try it later'
    );
    return null;
  }
};

const AllJobsContext = createContext();

const AllJobs = () => {
  const { data } = useLoaderData();

  return (
    <AllJobsContext.Provider value={{ jobs: data }}>
      <Wrapper>
        <SearchContainer />
        <JobsContainer />
      </Wrapper>
    </AllJobsContext.Provider>
  );
};

export const useAllJobsContext = () => useContext(AllJobsContext);
export default AllJobs;
