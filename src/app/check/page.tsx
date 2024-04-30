import React from "react";
import {
  LineChart,
  Line,
  Tooltip,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    value: 30,
    circles: [
      { radius: 5, tooltip: "Circle 1" },
      { radius: 8, tooltip: "Circle 2" },
    ],
  },
  {
    name: "Feb",
    value: 40,
    circles: [
      { radius: 6, tooltip: "Circle 1" },
      { radius: 9, tooltip: "Circle 2" },
    ],
  },
  {
    name: "Mar",
    value: 35,
    circles: [
      { radius: 7, tooltip: "Circle 1" },
      { radius: 10, tooltip: "Circle 2" },
    ],
  },
  // Add more data points as needed
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        {payload.map((entry, index) => (
          <div key={index}>
            {entry.payload.circles[index] && (
              <p>
                {entry.payload.circles[index].tooltip}: {entry.value}
              </p>
            )}
          </div>
        ))}
      </div>
    );
  }

  return null;
};

const Chart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip content={<CustomTooltip />} />
      {data[0].circles.map((circle, index) => (
        <Line
          key={index}
          type="monotone"
          dataKey="value"
          stroke="none"
          dot={false}
          isAnimationActive={false}
          label={({ cx, cy }) => (
            <g>
              <circle cx={cx} cy={cy} r={circle.radius} fill="blue" />
              <text
                x={cx}
                y={cy}
                dy={-circle.radius - 10}
                textAnchor="middle"
                fill="#666"
              >
                {circle.tooltip}
              </text>
            </g>
          )}
        />
      ))}
    </LineChart>
  </ResponsiveContainer>
);

export default Chart;
