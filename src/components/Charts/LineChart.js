import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Week 1",
    uv: 100,
    pv: 200,
  },
  {
    name: "Week 2",
    uv: 400,
    pv: 300,
  },
  {
    name: "Week 3",
    uv: 100,
    pv: 200,
  },
  {
    name: "Week 4",
    uv: 400,
    pv: 300,
  },
];

export default function ActivityChart() {
  const [chartWidth, setChartWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = document.documentElement.clientWidth;
      console.log({ viewportWidth });
      const newWidth = Math.min(viewportWidth, 1200); // Set the maximum width as needed
      setChartWidth(newWidth);
    };

    handleResize(); // Initial resize

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <LineChart
      width={chartWidth}
      height={200}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid horizontal vertical={false} />
      <XAxis dataKey="name" />
      <YAxis />
      {/* <Tooltip /> */}
      {/* <Legend /> */}
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#E9A0A0"
        strokeWidth={3}
        dot={false}
      />
      <Line
        type="monotone"
        dataKey="uv"
        stroke="#9BDD7C"
        strokeWidth={3}
        dot={false}
      />
    </LineChart>
  );
}
