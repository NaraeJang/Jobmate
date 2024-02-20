import { useLoaderData } from 'react-router-dom';
import Wrapper from '../assets/wrappers/AllJobs';
import { JobsContainer, SearchContainer } from '../components';
import customFetch from '../utils/customFetch';
import { createContext, useContext } from 'react';
import { toast } from 'react-toastify';

const AllJobsContext = createContext();

export const loader = async ({ request }) => {
  try {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    const { data } = await customFetch.get('/jobs', {
      params,
    });

    return { data, searchValues: { ...params } };
  } catch (error) {
    toast.error(
      error?.response?.data?.msg || 'something went wrong, please try it later'
    );
    return null;
  }
};

const AllJobs = () => {
  const { data, searchValues } = useLoaderData();

  return (
    <AllJobsContext.Provider value={{ data, searchValues }}>
      <Wrapper>
        <SearchContainer />
        <JobsContainer />
      </Wrapper>
    </AllJobsContext.Provider>
  );
};

export const useAllJobsContext = () => useContext(AllJobsContext);
export default AllJobs;
