import Wrapper from '../assets/wrappers/FormRowSelect';

const FormRow = ({ name, labelText, list, defaultValue = '', onChange }) => {
  return (
    <Wrapper className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
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
    </Wrapper>
  );
};
export default FormRow;
