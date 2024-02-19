const FormRow = ({
  type,
  name,
  labelText,
  defaultValue,
  onChange,
  edit,
  isRequired,
}) => {
  return (
    <div className="form-row">
      <label htmlFor={edit ? edit + name : name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        id={edit ? edit + name : name}
        name={name}
        className="form-input"
        defaultValue={defaultValue || ''}
        onChange={onChange}
        required={isRequired === 'false' ? false : true}
      />
    </div>
  );
};
export default FormRow;
