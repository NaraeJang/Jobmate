import { Form, Link, useSubmit } from 'react-router-dom';
import { JOB_STATUS, JOB_TYPE } from '../../../utils/constants';
import { FormRow, FormRowSelectCustom, SubmitBtn } from '../components';
import Wrapper from '../assets/wrappers/SearchContainer';
import { useAllJobsContext } from '../pages/AllJobs';

const SearchContainer = () => {
  const submit = useSubmit();
  const { searchValues } = useAllJobsContext();
  console.log(searchValues);
  const { search, jobStatus, jobType } = searchValues;

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
              onChange={(e) => {
                submit(e.currentTarget.form);
              }}
            />
            <FormRowSelectCustom
              labelText="Job Status"
              name="jobStatus"
              list={['all', ...Object.values(JOB_STATUS)]}
              edit="edit"
              defaultValue={searchValues?.jobStatus || 'all'}
              onChange={(e) => submit(e.currentTarget.form)}
            />
            <FormRowSelectCustom
              labelText="job type"
              name="jobType"
              list={['all', ...Object.values(JOB_TYPE)]}
              edit="edit"
              defaultValue={searchValues?.jobType || 'all'}
              onChange={(e) => submit(e.currentTarget.form)}
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
