import { useState } from 'react';
import Wrapper from '../assets/wrappers/FormRowSelectCustom';
import { GoChevronDown, GoChevronUp } from 'react-icons/go';

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
          onClick={() => setIsActive(!isActive)}
          role="button"
          tabIndex={0}>
          {dropdownItem ? dropdownItem : ` Select One`}
          {isActive ? <GoChevronUp /> : <GoChevronDown />}
        </div>
        {isActive && (
          <div className="dropdown-content">
            {list.map((item) => {
              return (
                <div
                  className="dropdown-item"
                  key={item}
                  value={item}
                  onClick={() => {
                    setIsActive(false);
                    dropdownType(item);
                  }}
                  tabIndex={0}
                  role="option">
                  {item}
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
