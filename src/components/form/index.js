import React, { memo, useState } from "react";
import "./styles.scss";
import InputWithLabel from "./../input/index";

const rootClassName = "emp-form";

const Form = ({ userData, setUserData }) => {
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");
  const [age, setAge] = useState("");
  const [image, setImage] = useState("");
  const clearFields = () => {
    setName("");
    setSalary("");
    setImage("");
    setAge("");
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (name !== "" && salary !== "" && age !== "") {
      if (userData?.length) {
        const _userData = {
          employee_name: name,
          employee_salary: salary,
          employee_age: age,
          profile_image: image,
        };
        setUserData([...userData, _userData]);
        clearFields();
      } else {
        const _userData = {
          employee_name: name,
          employee_salary: salary,
          employee_age: age,
          profile_image: image,
        };
        setUserData([_userData]);
        clearFields();
      }
    } else {
      alert("Fill all fields of Form");
    }
  }

  return (
    <div className={rootClassName}>
      <form onSubmit={handleSubmit}>
        <div className={`${rootClassName}__input-wrapper`}>
          <InputWithLabel
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={`${rootClassName}__input-wrapper`}>
          <InputWithLabel
            label="Salary"
            value={salary}
            type={"number"}
            onChange={(e) => setSalary(e.target.value)}
          />
        </div>
        <div className={`${rootClassName}__input-wrapper`}>
          <InputWithLabel
            label="Age"
            value={age}
            type={"number"}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className={`${rootClassName}__input-wrapper`}>
          <InputWithLabel
            label="Photo"
            type={"file"}
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <button type="submit" className={`${rootClassName}__submit-btn`}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default memo(Form);
