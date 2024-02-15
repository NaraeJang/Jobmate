import { useState } from 'react';
import Wrapper from '../assets/wrappers/FormRowSelectCustom';
import { GoChevronDown, GoChevronUp } from 'react-icons/go';

// new setup
const FormRowSelectCustom = ({
  name,
  labelText,
  list,
  onChange,
  defaultValue = 'Select One',
  edit = '',
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const [dynamicValue, setDynamicValue] = useState('');

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
        <span>{dynamicValue || defaultValue}</span>
        {isOpened ? <GoChevronUp /> : <GoChevronDown />}
      </button>

      <div className={isOpened ? `dropdown` : `dropdown hidden`}>
        {list.map((item) => {
          return (
            <label
              className="select-item"
              key={item}
              htmlFor={edit ? edit + name : name}>
              {item}
              <input
                className="option"
                type="radio"
                name={name}
                id={edit ? edit + name : name}
                value={item || defaultValue}
                onClick={() => {
                  setIsOpened(false);
                  setDynamicValue(item);
                }}
                onChange={onChange}
              />
            </label>
          );
        })}
      </div>
    </Wrapper>
  );
};
export default FormRowSelectCustom;
