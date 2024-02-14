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
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const [dynamicValue, setDynamicValue] = useState('');

  return (
    <Wrapper className="form-row">
      <label htmlFor="form-row-button">
        <h4 className="form-label">{labelText || name}</h4>
      </label>
      <button
        type="button"
        id="form-row-button"
        onClick={() => {
          setIsOpened(!isOpened);
        }}>
        <span>{dynamicValue || defaultValue}</span>
        {isOpened ? <GoChevronUp /> : <GoChevronDown />}
      </button>

      <div
        className={isOpened ? `dropdown` : `dropdown hidden`}
        onMouseLeave={(e) => {
          if (
            e.target.classList.contains(`select-item`) ||
            e.target.classList.contains(`dropdown`)
          ) {
            setIsOpened(false);
          }
        }}>
        {list.map((item) => {
          return (
            <label className="select-item" key={item} htmlFor={item}>
              {item}
              <input
                className="option"
                type="radio"
                name={name}
                id={item}
                value={item}
                onClick={() => {
                  setIsOpened(false);
                  setDynamicValue(item);
                }}
              />
            </label>
          );
        })}
      </div>
    </Wrapper>
  );
};
export default FormRowSelectCustom;
