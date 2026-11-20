
import React from "react";

function DiagnosticList({ diagnosticList = [] }) {
  return (
    <div className="diagnostic-list">
      <h3>Diagnostic List</h3>

      <table>
        <thead>
          <tr>
            <th>Problem/Diagnosis</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {diagnosticList.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {diagnosticList.length === 0 && (
        <p>No diagnostic records available.</p>
      )}
    </div>
  );
}

export default DiagnosticList;
