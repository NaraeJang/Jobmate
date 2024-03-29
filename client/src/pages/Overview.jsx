import { useLoaderData, useNavigate } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Overview';
import { ChartContainer, OverviewCard } from '../components';
import customFetch from '../utils/customFetch';
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

const overviewQuery = {
  queryKey: ['overview'],
  queryFn: async () => {
    const response = await customFetch.get('/jobs/overview');
    return response.data;
  },
};

export const loader = (queryClient) => async () => {
  const data = await queryClient.ensureQueryData(overviewQuery);
  return data;
};

const Overview = () => {
  const navigate = useNavigate();

  const { data } = useQuery(overviewQuery);
  const { defaultStats, monthlyApplications } = data;

  useEffect(() => {
    if (monthlyApplications.length < 1) {
      return navigate('/dashboard/add-job');
    }
  }, [data]);

  return (
    <Wrapper>
      {monthlyApplications?.length >= 1 && (
        <>
          <OverviewCard defaultStats={defaultStats} />
          <ChartContainer data={monthlyApplications} />
        </>
      )}
    </Wrapper>
  );
};
export default Overview;
