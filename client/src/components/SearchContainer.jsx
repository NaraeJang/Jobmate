import { Form, Link, useSubmit } from 'react-router-dom';
import { JOB_STATUS, JOB_TYPE } from '../../../utils/constants';
import { FormRow, FormRowSelectCustomSearch, SubmitBtn } from '../components';
import Wrapper from '../assets/wrappers/SearchContainer';
import { useAllJobsContext } from '../pages/AllJobs';

const SearchContainer = () => {
  const submit = useSubmit();
  const { searchValues } = useAllJobsContext();
  const { search, jobStatus, jobType } = searchValues;

  const debounce = (onChange) => {
    let timeout;
    return (e) => {
      const form = e.currentTarget.form;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        onChange(form);
      }, 700);
    };
  };

  return (
    <Wrapper>
      <Form className="form">
        <h2>Search</h2>
        <div className="form-center">
          <div className="search-container">
            <FormRow
              type="search"
              name="search"
              edit="edit"
              isRequired="false"
              defaultValue={search}
              onChange={debounce((form) => {
                submit(form);
              })}
            />
            <FormRowSelectCustomSearch
              labelText="Job Status"
              name="jobStatus"
              list={['all', ...Object.values(JOB_STATUS)]}
              edit="edit"
              defaultValue={jobStatus || 'all'}
            />
            <FormRowSelectCustomSearch
              labelText="Job Type"
              name="jobType"
              list={['all', ...Object.values(JOB_TYPE)]}
              edit="edittwo"
              defaultValue={jobType || 'all'}
            />
          </div>
          <Link to="/dashboard/all-jobs" className="btn btn-primary btn-block">
            Reset Search
          </Link>
        </div>
      </Form>
    </Wrapper>
  );
};
export default SearchContainer;
