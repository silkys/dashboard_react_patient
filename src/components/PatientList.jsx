
import React from "react";

function PatientList({ patients, onSelectPatient }) {
  return (
    <div className="patient-list">

      <h2>Patients</h2>

      <div className="patient-search">
        <input
          type="text"
          placeholder="Search patients..."
        />
      </div>

      <div className="patients-container">

        {patients.map((patient) => (
          <div
            className={`patient-item ${
              patient.name === "Jessica Taylor" ? "selected" : ""
            }`}
            key={patient.name}
            onClick={() => onSelectPatient(patient)}
          >
            <img
              src={patient.profile_picture}
              alt={patient.name}
            />

            <div className="patient-info">
              <h4>{patient.name}</h4>
              <p>
                {patient.gender}, {patient.age}
              </p>
            </div>

            <span className="more-icon">•••</span>
          </div>
        ))}

      </div>

    </div>
  );
}

export default PatientList;
