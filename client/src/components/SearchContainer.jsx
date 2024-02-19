import { Form } from 'react-router-dom';
import { JOB_STATUS, JOB_TYPE } from '../../../utils/constants';
import { FormRow, FormRowSelectCustom, SubmitBtn } from '../components';
import Wrapper from '../assets/wrappers/SearchContainer';

const SearchContainer = () => {
  return (
    <Wrapper>
      <Form method="post" className="form">
        <h2>Search</h2>
        <div className="form-center">
          <div className="search-container">
            <FormRow type="text" name="position" edit="edit" />
            <FormRowSelectCustom
              labelText="Job Status"
              name="JobStatus"
              list={Object.values(JOB_STATUS)}
              edit="edit"
              defaultValue="all"
            />
            <FormRowSelectCustom
              labelText="job type"
              name="JobType"
              list={Object.values(JOB_TYPE)}
              edit="edit"
              defaultValue="all"
            />
          </div>
          <SubmitBtn text="Reset filter" submitting="Searching..." />
        </div>
      </Form>
    </Wrapper>
  );
};
export default SearchContainer;
