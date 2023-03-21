import "./style.css";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "тест1",
    англ: 1000,
    матем: 2400,
    укрмова: 2400
  },
  {
    name: "тест2",
    англ: 3000,
    матем: 1398,
    укрмова: 2210
  },
  {
    name: "тест3",
    англ: 2000,
    матем: 5000,
    укрмова: 2290
  },
  {
    name: "тест4",
    англ: 2780,
    матем: 3908,
    укрмова: 6
  },
  {
    name: "Page E",
    англ: 1890,
    матем: 4800,
    укрмова: 2181
  },
  {
    name: "Page F",
    англ: 2390,
    матем: 3800,
    укрмова: 2500
  },

  {
    name: "Page G",
    англ: 3490,
    матем: 4300,
    укрмова: 2100
  }
];

export default function Statistic_Student() {
  return (
    <div className="Stats_block">
      <div className="title_Stats_block">
        <h1>Моя успішність</h1>
      </div>
    <div className="Stats_block_flexforcenter">
    <div className="gorison_scroll_grafic">
    <LineChart
      width={1200}
      height={600}
      data={data}
      margin={{
        top: -10,
        right: 50,
        left: 20,
        bottom: -30      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="матем"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line
        type="monotone"
        dataKey="англ"
        stroke="#8885d8"
      />
      <Line 
      type="monotone" 
      dataKey="укрмова" 
      stroke="#82ca9d" />
    </LineChart>
    </div>
    </div>
    <div className="buttom_of_subject">
        <div className="Yellow_butt_of_subject">
          <p>Математика</p>
        </div>
        <div className="Yellow_butt_of_subject">
          <p>Математика</p>
        </div>
        <div className="Yellow_butt_of_subject">
          <p>Математика</p>
        </div>
        <div className="Yellow_butt_of_subject">
          <p>Математика</p>
        </div>
        <div className="Yellow_butt_of_subject">
          <p>Математика</p>
        </div>
        <div className="Yellow_butt_of_subject">
          <p>Математика</p>
        </div>
    </div>
    <div className="buttom_of_subject">
        <div className="Yellow_butt_of_subject">
          <p>Математика</p>
        </div>
        <div className="Yellow_butt_of_subject">
          <p>Математика</p>
        </div>
        <div className="Yellow_butt_of_subject">
          <p>Математика</p>
        </div>
        <div className="Yellow_butt_of_subject">
          <p>Математика</p>
        </div>
        <div className="Yellow_butt_of_subject">
          <p>Математика</p>
        </div>
        <div className="Yellow_butt_of_subject">
          <p>Математика</p>
        </div>
    </div>
    </div>
  );
}
