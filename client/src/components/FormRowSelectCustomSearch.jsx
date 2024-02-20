import { useState } from 'react';
import Wrapper from '../assets/wrappers/FormRowSelectCustom';
import { GoChevronDown, GoChevronUp } from 'react-icons/go';
import { useSubmit } from 'react-router-dom';

// new setup
const FormRowSelectCustom = ({
  name,
  labelText,
  list,

  defaultValue = 'Select One',
  edit = '',
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const [dynamicValue, setDynamicValue] = useState('');
  const submit = useSubmit();

  return (
    <Wrapper
      className="form-row"
      onMouseLeave={(e) => {
        if (
          e.target.classList.contains(`select-item`) ||
          e.target.classList.contains(`dropdown`) ||
          e.target.classList.contains(`row-btn`) ||
          e.target.classList.contains(`form-label`) ||
          e.target.classList.contains(`form-row`)
        ) {
          setIsOpened(false);
        }
      }}>
      <h4 className="form-label">{labelText || name}</h4>

      <button
        type="button"
        className="row-btn"
        onClick={() => {
          setIsOpened(!isOpened);
        }}>
        <span>{defaultValue}</span>
        {isOpened ? <GoChevronUp /> : <GoChevronDown />}
      </button>

      <div className={isOpened ? `dropdown` : `dropdown hidden`}>
        {list.map((item) => {
          return (
            <label
              className="select-item"
              key={item}
              htmlFor={edit ? edit + item : item}>
              {item}
              <input
                className="option"
                type="radio"
                name={name}
                id={edit ? edit + item : item}
                defaultValue={item || defaultValue}
                onClick={(e) => {
                  e.preventDefault();

                  setIsOpened(false);
                  setDynamicValue(item);

                  submit(e.currentTarget.form);
                }}
                defaultChecked={item === defaultValue ? true : false}
              />
            </label>
          );
        })}
      </div>
    </Wrapper>
  );
};
export default FormRowSelectCustom;
