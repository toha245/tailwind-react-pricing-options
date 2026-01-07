import React from "react";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const resultData = [
  {
    id: 1,
    name: "Aarav Sharma",
    physics: 85,
    chemistry: 78,
    math: 92,
    total: 255,
  },
  {
    id: 2,
    name: "Beatrice Kim",
    physics: 92,
    chemistry: 88,
    math: 95,
    total: 275,
  },
  {
    id: 3,
    name: "Carlos Gomez",
    physics: 74,
    chemistry: 82,
    math: 68,
    total: 224,
  },
  {
    id: 4,
    name: "Diana Prince",
    physics: 88,
    chemistry: 91,
    math: 84,
    total: 263,
  },
  {
    id: 5,
    name: "Ethan Hunt",
    physics: 65,
    chemistry: 70,
    math: 72,
    total: 207,
  },
  {
    id: 6,
    name: "Fatima Aziz",
    physics: 95,
    chemistry: 94,
    math: 98,
    total: 287,
  },
  {
    id: 7,
    name: "George Miller",
    physics: 80,
    chemistry: 75,
    math: 81,
    total: 236,
  },
  {
    id: 8,
    name: "Hina Sato",
    physics: 72,
    chemistry: 85,
    math: 89,
    total: 246,
  },
  {
    id: 9,
    name: "Isaac Newton",
    physics: 99,
    chemistry: 90,
    math: 100,
    total: 289,
  },
  {
    id: 10,
    name: "Jasmine Lee",
    physics: 78,
    chemistry: 80,
    math: 76,
    total: 234,
  },
];

const ResultsChart = () => {
  return (
    <div>
      <LineChart width={800} height={500} data={resultData}>
        <Tooltip></Tooltip>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Line dataKey="math"></Line>
        <Line dataKey={"chemistry"} stroke="red"></Line>
      </LineChart>
    </div>
  );
};

export default ResultsChart;
