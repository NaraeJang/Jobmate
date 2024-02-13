import Wrapper from '../assets/wrappers/FormRowSelect';
import { GoChevronDown, GoChevronUp } from 'react-icons/go';

const FormRow = ({ name, labelText, list, defaultValue = '', onChange }) => {
  return (
    <Wrapper className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <div className="form-select-container">
        <select
          id={name}
          name={name}
          className="form-select"
          defaultValue={defaultValue}
          onChange={onChange}>
          {list.map((item) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
        </select>
        <span className="icon-container">
          <GoChevronDown />
        </span>
      </div>
    </Wrapper>
  );
};
export default FormRow;
