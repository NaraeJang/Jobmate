const FormRow = ({ type, name, labelText, defaultValue, onChange, edit }) => {
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
        required
      />
    </div>
  );
};
export default FormRow;
