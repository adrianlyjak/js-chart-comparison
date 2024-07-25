import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Plot from "react-plotly.js";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", temp: 15 },
  { day: "Tue", temp: 17 },
  { day: "Wed", temp: 16 },
  { day: "Thu", temp: 19 },
  { day: "Fri", temp: 20 },
  { day: "Sat", temp: 18 },
  { day: "Sun", temp: 17 },
];

function App() {
  const highchartsOptions = {
    title: { text: "Average Temperature (Highcharts)" },
    xAxis: { categories: data.map((d) => d.day) },
    yAxis: { title: { text: "Temperature (°C)" } },
    series: [{ name: "Temperature", data: data.map((d) => d.temp) }],
    chart: {
      type: "line",
    },
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              enabled: false,
            },
          },
        },
      ],
    },
  };

  const plotlyData = [
    {
      x: data.map((d) => d.day),
      y: data.map((d) => d.temp),
      type: "scatter",
      mode: "lines+markers",
      marker: { color: "red" },
    },
  ];

  const plotlyLayout = {
    title: "Average Temperature (Plotly)",
    xaxis: { title: "Day of Week" },
    yaxis: { title: "Temperature (°C)" },
    autosize: true,
  };

  const containerStyle = {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
  };

  const chartStyle = {
    width: "100%",
    marginBottom: "40px",
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ textAlign: "center" }}>
        Highcharts, Plotly, and Recharts React App
      </h1>

      <div style={chartStyle}>
        <HighchartsReact highcharts={Highcharts} options={highchartsOptions} />
      </div>

      <div style={chartStyle}>
        <Plot
          data={plotlyData}
          layout={plotlyLayout}
          style={{ width: "100%", height: "400px" }}
          useResizeHandler={true}
        />
      </div>

      <div style={chartStyle}>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="temp"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
        <h3 style={{ textAlign: "center" }}>Average Temperature (Recharts)</h3>
      </div>
    </div>
  );
}

export default App;
