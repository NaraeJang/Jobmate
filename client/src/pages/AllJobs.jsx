import { useLoaderData } from 'react-router-dom';
import Wrapper from '../assets/wrappers/AllJobs';
import { JobsContainer, SearchContainer } from '../components';
import customFetch from '../utils/customFetch';
import { createContext, useContext } from 'react';
import { toast } from 'react-toastify';
import { useQuery } from '@tanstack/react-query';

const AllJobsContext = createContext();

const allJobsQuery = (params) => {
  const { search, jobStatus, jobType, sort, page } = params;
  return {
    queryKey: [
      'jobs',
      search ?? '',
      jobStatus ?? 'all',
      jobType ?? 'all',
      sort ?? 'newest',
      page ?? 1,
    ],
    queryFn: async () => {
      const { data } = await customFetch.get('/jobs', {
        params,
      });
      return data;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    const { data } = await queryClient.ensureQueryData(allJobsQuery(params));

    return { data, searchValues: { ...params } };
  };

const AllJobs = ({ queryClient }) => {
  const { searchValues } = useLoaderData();
  const { data } = useQuery(allJobsQuery(searchValues));

  return (
    <AllJobsContext.Provider value={{ data, searchValues }}>
      <Wrapper>
        <SearchContainer />
        <JobsContainer queryClient={queryClient} />
      </Wrapper>
    </AllJobsContext.Provider>
  );
};

export const useAllJobsContext = () => useContext(AllJobsContext);
export default AllJobs;
