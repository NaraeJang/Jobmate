import Wrapper from '../assets/wrappers/JobsContainer';
import { BiSortAlt2 } from 'react-icons/bi';
import { JOB_SORT_BY } from '../../../utils/constants';
import { useEffect, useState } from 'react';
import JobCard from './JobCard';
import { useAllJobsContext } from '../pages/AllJobs';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';
import { useNavigate, useLocation } from 'react-router-dom';
import PageBtnContainer from './PageBtnContainer';

const JobsContainer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { data, searchValues } = useAllJobsContext();
  const { jobs, totalJobs, numOfPages } = data;

  const [isActive, setIsActive] = useState(false);
  const [handleSubmitData, setHandleSubmitData] = useState(null);

  const handleSubmit = async (sort) => {
    try {
      const params = searchValues;

      params.sort = sort;

      const { data } = await customFetch.get('/jobs', {
        params,
      });

      const searchParams = new URLSearchParams(location.search);

      // Check if the "sort" parameter exists
      if (searchParams.has('sort')) {
        // Remove the existing "sort" parameter
        searchParams.delete('sort');
      }

      const currentUrl = location.pathname + '?' + searchParams;

      navigate(`${currentUrl}&sort=${params.sort}`, {
        replace: true,
      });

      return setHandleSubmitData(data.jobs);
    } catch (error) {
      toast.error(
        error?.response?.data?.msg ||
          'something went wrong, please try it later'
      );
      return null;
    }
  };

  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2 className="no-job">Please add jobs you applied...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className="heading">
        <h4 className="job-found">
          {totalJobs} job{jobs.length > 1 && 's'} found
        </h4>
        <div id="sort">
          <div className="sort-btn" onClick={() => setIsActive(!isActive)}>
            <p>Sort by: {searchValues.sort ? searchValues.sort : 'newest'}</p>
            <BiSortAlt2 />
          </div>
          {isActive && (
            <div className="sort-content">
              <form>
                {Object.values(JOB_SORT_BY).map((sort) => {
                  return (
                    <label className="sort-item" key={sort} htmlFor={sort}>
                      {sort}
                      <input
                        className="sort-item"
                        type="radio"
                        name="sort"
                        id={sort}
                        defaultValue={sort}
                        onChange={(e) => {
                          setIsActive(false);

                          handleSubmit(sort);
                        }}
                      />
                    </label>
                  );
                })}
              </form>
            </div>
          )}
        </div>
      </div>
      <div className="jobs">
        {handleSubmitData
          ? handleSubmitData.map((job, index) => (
              <JobCard key={index} {...job} />
            ))
          : jobs.map((job, index) => <JobCard key={index} {...job} />)}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};
export default JobsContainer;
