import { Form } from 'react-router-dom';
import { JOB_STATUS, JOB_TYPE } from '../../../utils/constants';
import { FormRow, FormRowSelectCustom, SubmitBtn } from '../components';
import Wrapper from '../assets/wrappers/SearchContainer';

const SearchContainer = () => {
  const jobStatusList = ['pending', 'interview', 'declined'];
  const jobTypeList = ['full-time', 'part-time', 'internship'];
  return (
    <Wrapper>
      <Form method="post" className="form">
        <div className="form-center">
          <div className="search-container">
            <FormRow type="text" name="position" />
            <FormRowSelectCustom
              labelText="Job Status"
              name="editJobStatus"
              list={jobStatusList}
              edit="edit"
            />
            <FormRowSelectCustom
              labelText="job type"
              name="editJobType"
              list={jobTypeList}
              edit="edit"
            />
          </div>
          <SubmitBtn text="See all Jobs" submitting="Searching..." />
        </div>
      </Form>
    </Wrapper>
  );
};
export default SearchContainer;
