
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler
);

function BloodPressureChart({ diagnosisHistory = [] }) {
  const labels = diagnosisHistory.map(
    (item) => `${item.month} ${item.year}`
  );

  const data = {
    labels,
    datasets: [
      {
        label: "Systolic",
        data: diagnosisHistory.map(
          (item) => item.blood_pressure.systolic.value
        ),
        borderColor: "#E66FD2",
        backgroundColor: "#E66FD2",
        tension: 0.4,
      },
      {
        label: "Diastolic",
        data: diagnosisHistory.map(
          (item) => item.blood_pressure.diastolic.value
        ),
        borderColor: "#8C6FE6",
        backgroundColor: "#8C6FE6",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      y: {
        min: 40,
        max: 200,
      },
    },
  };

  return (
    <div className="blood-pressure-chart">
      <h3>Blood Pressure</h3>
      <div className="chart-container">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

export default BloodPressureChart;
