
import React from "react";

function PatientProfile({ patient }) {
  if (!patient) return null;

  return (
    <div className="patient-profile">
      <div className="profile-header">
        <img src={patient.profile_picture} alt={patient.name} />
        <h3>{patient.name}</h3>
      </div>

      <div className="profile-details">
        <p><strong>Date Of Birth:</strong> {patient.date_of_birth}</p>
        <p><strong>Gender:</strong> {patient.gender}</p>
        <p><strong>Age:</strong> {patient.age}</p>
        <p><strong>Phone:</strong> {patient.phone_number}</p>
        <p><strong>Emergency Contact:</strong> {patient.emergency_contact}</p>
        <p><strong>Insurance:</strong> {patient.insurance_type}</p>
      </div>

      <h3>Lab Results</h3>

      <div className="lab-results">
        {(patient.lab_results || []).map((result, index) => (
          <div className="lab-item" key={index}>
            <span>{result}</span>
            <span>↓</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PatientProfile;
