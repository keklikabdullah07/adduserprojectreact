import { useState } from "react";

import Form from "./Form";
import CardContainer from "./CardContainer";

export default function App() {
  const [check, setCheck] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [employeeList, setEmployeeList] = useState([]);
  const [id, setId] = useState(0);
  const [editStatus, setEditStatus] = useState(false);

  const formStates = {
    name,
    setName,
    surname,
    setSurname,
    email,
    setEmail,
    age,
    setAge,
    employeeList,
    setEmployeeList,
    editStatus,
    setEditStatus,
    id,
  };

  const cardContainerStates = {
    setName,
    setSurname,
    setEmail,
    setAge,
    employeeList,
    setEmployeeList,
    setEditStatus,
    setId,
  };

  return (
    <div className="container w-50">
      <div className=" container text-center ">
        <label className="my-4 mx-3 ">Sözleşme Koşullarını Kabul Et?</label>
        <input
          type="checkbox"
          defaultChecked={check}
          onChange={() => setCheck(!check)}
        ></input>
        

        {check && <Form formStates={formStates} />}
        <CardContainer cardContainerStates={cardContainerStates} />
      </div>
    </div>
  );
}
