import { Form, Link } from 'react-router-dom';
import { JOB_STATUS, JOB_TYPE } from '../../../utils/constants';
import { FormRow, FormRowSelectCustom, SubmitBtn } from '../components';
import Wrapper from '../assets/wrappers/SearchContainer';

const SearchContainer = () => {
  return (
    <Wrapper>
      <Form className="form">
        <h2>Search</h2>
        <div className="form-center">
          <div className="search-container">
            <FormRow
              type="text"
              name="position"
              edit="edit"
              isRequired="false"
            />
            <FormRowSelectCustom
              labelText="Job Status"
              name="JobStatus"
              list={['all', ...Object.values(JOB_STATUS)]}
              edit="edit"
              defaultValue="all"
            />
            <FormRowSelectCustom
              labelText="job type"
              name="JobType"
              list={['all', ...Object.values(JOB_TYPE)]}
              edit="edit"
              defaultValue="all"
            />
          </div>
          <Link to="/dashboard/all-jobs" className="btn btn-primary btn-block">
            Reset Search
          </Link>
          <SubmitBtn text="Submit" submitting="Searching..." />
        </div>
      </Form>
    </Wrapper>
  );
};
export default SearchContainer;
