
import { useEffect, useState } from "react";

import Header from "./components/Header";
import PatientList from "./components/PatientList";
import PatientProfile from "./components/PatientProfile";
import BloodPressureChart from "./components/BloodPressureChart";
import DiagnosticList from "./components/DiagnosticList";
import { getPatients } from "./services/api";

import "./App.css";

function App() {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const data = await getPatients();

        setPatients(data);

        const jessica = data.find(
          (patient) => patient.name === "Jessica Taylor"
        );

        setSelectedPatient(jessica || data[0] || null);

      } catch (error) {
        console.error(error);
        setError("Unable to fetch patient data");
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <p>{error}</p>;

  return (
    <div className="app-container">
      <Header />

      <div className="dashboard-layout">

        <PatientList
          patients={patients}
          onSelectPatient={setSelectedPatient}
        />

<main className="dashboard-main">
  <h2>Diagnosis History</h2>

  {selectedPatient && (
    <BloodPressureChart
      diagnosisHistory={selectedPatient.diagnosis_history}
    />
  )}

  {selectedPatient && (
    <DiagnosticList
      diagnosticList={selectedPatient.diagnostic_list}
    />
  )}
</main>

        <PatientProfile patient={selectedPatient} />

      </div>
    </div>
  );
}

export default App;
