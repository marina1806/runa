import React from "react";

const Checkbox = props => {
  const { checked, disabled, onChange, onMouseEnter, onMouseLeave, onFocus, onClick, css } = props;

  return (
    <div className="group">
       <div className="mdc-form-field" onChange={() => onChange()}>
      <div className="mdc-checkbox">
        <input
          type="checkbox"
          className="mdc-checkbox__native-control"
          id="checkbox-1"
          checked={checked}
          style={css}
        />
        <div className="mdc-checkbox__background">
          <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
            <path
              className="mdc-checkbox__checkmark-path"
              fill="none"
              d="M1.73,12.91 8.1,19.28 22.79,4.59"
            />
          </svg>
          <div className="mdc-checkbox__mixedmark" />
        </div>
        <div className="mdc-checkbox__ripple" />
      </div>
      <label for="checkbox-1">Checkbox</label>
    </div>
     <div className="mdc-form-field" onChange={() => onChange()}>
      <div className="mdc-checkbox">
        <input
          type="checkbox"
          className="mdc-checkbox__native-control"
          id="checkbox-2"
          disabled={disabled}
        />
        <div className="mdc-checkbox__background">
          <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
            <path
              className="mdc-checkbox__checkmark-path"
              fill="none"
              d="M1.73,12.91 8.1,19.28 22.79,4.59"
            />
          </svg>
          <div className="mdc-checkbox__mixedmark" />
        </div>
        <div className="mdc-checkbox__ripple" />
      </div>
      <label for="checkbox-2">Checkbox</label>
    </div>
    <div className="mdc-form-field" 
    onChange={() => onChange()}
    onMouseEnter = {onMouseEnter}
    onMouseLeave = {onMouseLeave}
    >
      <div className="mdc-checkbox">
        <input
          type="checkbox"
          className="mdc-checkbox__native-control"
          id="checkbox-3"
          checked={checked}
        />
        <div className="mdc-checkbox__background">
          <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
            <path
              className="mdc-checkbox__checkmark-path"
              fill="none"
              d="M1.73,12.91 8.1,19.28 22.79,4.59"
            />
          </svg>
          <div className="mdc-checkbox__mixedmark" />
        </div>
        <div className="mdc-checkbox__ripple" />
      </div>
      <label for="checkbox-3">Checkbox</label>
    </div>
    <div className="mdc-form-field" 
    onChange={() => onChange()}
    >
      <div className="mdc-checkbox">
        <input
          type="checkbox"
          className="mdc-checkbox__native-control"
          id="checkbox-4"
          checked
          disabled={disabled}
        />
        <div className="mdc-checkbox__background">
          <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
            <path
              className="mdc-checkbox__checkmark-path"
              fill="none"
              d="M1.73,12.91 8.1,19.28 22.79,4.59"
            />
          </svg>
          <div className="mdc-checkbox__mixedmark" />
        </div>
        <div className="mdc-checkbox__ripple" />
      </div>
      <label for="checkbox-4">Checkbox</label>
    </div>
    <div className="mdc-form-field" 
    onChange={() => onChange()}
    onFocus = {onFocus}
    onClick = {onClick}
    >
      <div className="mdc-checkbox">
        <input
          type="checkbox"
          className="mdc-checkbox__native-control"
          id="checkbox-5"
          checked
        />
        <div className="mdc-checkbox__background">
          <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
            <path
              className="mdc-checkbox__checkmark-path"
              fill="none"
              d="M1.73,12.91 8.1,19.28 22.79,4.59"
            />
          </svg>
          <div className="mdc-checkbox__mixedmark" />
        </div>
        <div className="mdc-checkbox__ripple" />
      </div>
      <label for="checkbox-5">Checkbox</label>
    </div>
    </div>
  );
};

export default Checkbox;