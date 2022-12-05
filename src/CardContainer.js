import React from "react";

import EmployeeCard from "./EmployeeCard";

const CardContainer = ({ cardContainerStates }) => {
  const { employeeList } = cardContainerStates;

  return (
    <div className="cardContainer">
      {employeeList.map((employee) => {
        const fullName = `${employee.name} ${employee.surname}`;

        return (
          <EmployeeCard
            key={employee.id}
            employee={employee}
            fullName={fullName}
          />
        );
      })}
    </div>
  );
};

export default CardContainer;
