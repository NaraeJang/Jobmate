import { useState } from 'react';
import Wrapper from '../assets/wrappers/FormRowSelectCustom';
import { GoChevronDown, GoChevronUp } from 'react-icons/go';

// new setup
const FormRowSelectCustom = ({
  name,
  labelText,
  list,
  dropdownType,
  dropdownItem,
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Wrapper className="form-row">
      <h4 className="form-label">{labelText || name}</h4>
      <div className="dropdown-container">
        <div
          className="form-select dropdown-btn"
          style={{
            border: isActive
              ? `1px solid var(--primary-400, #f14a75)`
              : `1px solid var(--grey-200, #E5E5E5)`,
          }}
          tabIndex={0}>
          <input
            type="radio"
            className="radio"
            id={name}
            name={name}
            onClick={(e) => {
              setIsActive(!isActive);
              console.log(e.target.value);
            }}
          />
          <label htmlFor={name}>
            {dropdownItem ? dropdownItem : ` Select One`}
            {isActive ? <GoChevronUp /> : <GoChevronDown />}
          </label>
        </div>
        {isActive && (
          <div className="dropdown-content">
            {list.map((item) => {
              return (
                <div
                  className="dropdown-item"
                  key={item}
                  value={item}
                  tabIndex={0}
                  role="option">
                  <input
                    type="radio"
                    className="radio"
                    id={item}
                    name={name}
                    onClick={() => {
                      setIsActive(false);
                      dropdownType(item);
                    }}
                  />
                  <label htmlFor={item}>{item}</label>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Wrapper>
  );
};
export default FormRowSelectCustom;
