import React from "react";


const EmployeeCard = ({ fullName }) => {
  return (
    <div className="card">
      <div className="cardDetails">
        <p style={{ fontSize: 20 }}>
          <strong>{fullName}</strong>
        </p>
      </div>

    </div>
  );
};

export default EmployeeCard;
