import Wrapper from '../assets/wrappers/JobsContainer';
import { BiSortAlt2 } from 'react-icons/bi';
import { JOB_SORT_BY } from '../../utils/constants';
import { useState } from 'react';
import JobCard from './JobCard';
import mockData from '../../utils/mockData.json';

const JobsContainer = () => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState('');

  return (
    <Wrapper>
      <div className="heading">
        <h4 className="job-found">99 Jobs Found</h4>
        <div id="sort">
          <div className="sort-btn" onClick={() => setIsActive(!isActive)}>
            <p>Sort by: {selected ? selected : 'newest'}</p>
            <BiSortAlt2 />
          </div>
          {isActive && (
            <div className="sort-content">
              {Object.values(JOB_SORT_BY).map((sort) => {
                return (
                  <div
                    className="sort-item"
                    key={sort}
                    value={sort}
                    onClick={() => {
                      setIsActive(false);
                      setSelected(sort);
                    }}>
                    {sort}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div className="jobs">
        {mockData.map((job, index) => {
          return <JobCard key={index} {...job} />;
        })}
      </div>
    </Wrapper>
  );
};
export default JobsContainer;