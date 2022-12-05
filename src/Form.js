import React from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ formStates }) => {
  const {
    name,
    setName,
    surname,
    setSurname,
    age,
    setAge,
    email,
    setEmail,
    employeeList,
    setEmployeeList,
    editStatus,
    setEditStatus,
    id,
  } = formStates;

  const handlenameChange = (e) => {
    setName(e.target.value);
  };

  const handlesurnameChange = (e) => {
    setSurname(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name !== "" && surname !== "") {
      if (editStatus) {
        let updateEmployees = employeeList.map((employee) => {
          return employee.id === id ? { ...employee, name, surname } : employee;
        });
        setEmployeeList(updateEmployees);
        setEditStatus(false);
      } else {
        const employee = {
          id: uuidv4(),
          name,
          surname,
          age,
          email,
        };

        setEmployeeList([...employeeList, employee]);
      }
      setName("");
      setSurname("");
      setEmail("");
      setAge("");
    } else {
      alert("Please fill in the required fields");
    }
  };
  return (
    <form className="row g-3" onSubmit={handleSubmit} id="myForm">
      <div className="col-md-6 ">
        <input
          type="text"
          placeholder="Ad"
          name="name"
          value={name}
          onChange={handlenameChange}
          required
        />
      </div>
      <div className="col-md-6">
        <input
          type="text"
          placeholder="Soyad"
          name="surname"
          value={surname}
          onChange={handlesurnameChange}
          required
        />
      </div>
      <div className="col-md-6">
        {" "}
        <input
          type="text"
          placeholder="Yaş"
          name="age"
          value={age}
          onChange={handleAgeChange}
          required
        />
      </div>
      <div className="col-md-6">
        {" "}
        <input
          type="text"
          placeholder="E-Posta"
          name="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
      <div className="d-flex justify-content-end ">
        <button className="btn-submit btn btn-lg btn-primary col-md-2 ">
          {"Kaydet"}
        </button>
      </div>
    </form>
  );
};

export default Form;
