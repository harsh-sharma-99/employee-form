import React from "react";
import "./styles.scss";

const rootClassName = "emp-input-with-label";

const InputWithLabel = ({ label, value, onChange, type = "text" }) => {
  return (
    <div className={rootClassName}>
      <label className={`${rootClassName}__label`}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={`${rootClassName}__input`}
      />
    </div>
  );
};

export default InputWithLabel;
