import { Form } from 'react-router-dom';
import { JOB_STATUS, JOB_TYPE } from '../../../utils/constants';
import { FormRow, FormRowSelectCustom, SubmitBtn } from '../components';
import { useDashboardContext } from '../pages/DashboardLayout';
import Wrapper from '../assets/wrappers/SearchContainer';

const SearchContainer = () => {
  const {
    jobStatusFilter,
    setJobStatusFilter,
    jobTypeFilter,
    setJobTypeFilter,
  } = useDashboardContext();

  return (
    <Wrapper>
      <Form method="post" className="form">
        <div className="form-center">
          <div className="search-container">
            <FormRow type="text" name="position" />
            <FormRowSelectCustom
              labelText="Job Status"
              name="jobStatus"
              list={Object.values(JOB_STATUS)}
              dropdownType={setJobStatusFilter}
              dropdownItem={jobStatusFilter}
            />
            <FormRowSelectCustom
              labelText="job type"
              name="jobType"
              list={Object.values(JOB_TYPE)}
              dropdownType={setJobTypeFilter}
              dropdownItem={jobTypeFilter}
            />
          </div>
          <SubmitBtn text="See all Jobs" submitting="Searching..." />
        </div>
      </Form>
    </Wrapper>
  );
};
export default SearchContainer;
