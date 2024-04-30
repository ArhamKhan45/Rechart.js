"use client";
import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const series = [
  {
    data: [
      {
        id: "1",
        Va: "user1",
        month: "Jan 2023",
        status: " Upgrade",
        dotColor: "blue",
      },
      {
        id: "2",
        Va: "user1",
        month: "April 2023",
        status: " Downgrade",
        dotColor: "red",
      },
      {
        id: "3",
        Va: "user1",
        month: "May 2023",
        status: "Upsell",
        dotColor: "yellow",
      },
    ],
  },
  {
    data: [
      {
        id: "1",
        Va: "user2",
        month: "Jan 2023",
        status: " Downgrade",
        dotColor: "red",
      },
      { Va: "user2", month: "Oct 2023", status: " Downgrade", dotColor: "red" },
      { Va: "user2", month: "Jan 2024", status: " Upgrade", dotColor: "blue" },
    ],
  },
  {
    data: [
      { Va: "user3", month: "Oct 2022", status: " Downgrade", dotColor: "red" },
      {
        Va: "user3",
        month: "Mar 2023",
        status: " Activated",
        dotColor: "green",
      },
      {
        Va: "user3",
        month: "July 2023",
        status: "Downgrade",
        dotColor: "red",
      },
    ],
  },
  {
    data: [
      {
        Va: "user5",
        month: "Oct 2021",
        status: " Activated",
        dotColor: "green",
      },
      {
        Va: "user5",
        month: "jun 2023",
        status: "Downgrade",
        dotColor: "red",
      },
      { Va: "user5", month: "Mar 2023", status: " Upsell", dotColor: "yellow" },
      {
        Va: "user5",
        month: "Dec 2023",
        status: " Dectivated",
        dotColor: "#BCC7DB",
      },
    ],
  },
  {
    data: [
      {
        Va: "user6",
        month: "Oct 2015",
        status: " Activated",
        dotColor: "green",
      },
      {
        Va: "user6",
        month: "jun 2000",
        status: " Activated",
        dotColor: "green",
      },
      {
        Va: "user6",
        month: "Dec 2050",
        status: " Activated",
        dotColor: "green",
      },
    ],
  },
  {
    data: [
      {
        Va: "user4",
        month: "Aug 2023",
        status: " Activated",
        dotColor: "green",
      },
      {
        Va: "user4",
        month: "Jan 2024",
        status: " Activated",
        dotColor: "green",
      },
    ],
  },
];

// Function to extract unique months and sort them
const getUniqueSortedMonths = (data) => {
  const monthsSet = new Set();
  data.forEach(({ month }) => monthsSet.add(month));
  return Array.from(monthsSet).sort((a, b) => {
    const [aMonth, aYear] = a.split(" ");
    const [bMonth, bYear] = b.split(" ");
    if (aYear !== bYear) {
      return parseInt(aYear) - parseInt(bYear);
    } else {
      return (
        new Date(aMonth + " 1, " + aYear) - new Date(bMonth + " 1, " + bYear)
      );
    }
  });
};

export default function Example() {
  const [activePoint, setActivePoint] = useState(null);

  const handleMouseOver = (data, index) => {
    setActivePoint({ data, index });
  };

  const handleMouseLeave = () => {
    setActivePoint(null);
  };

  // Extract unique sorted months
  const uniqueSortedMonths = getUniqueSortedMonths(
    series.flatMap(({ data }) => data)
  );

  // tooltip
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      // Extract the month value from the payload
      const month = payload[0].payload.month;

      // Find the data points corresponding to the month value
      const filteredData = series
        .flatMap(({ data }) => data)
        .filter((point) => point.month === month);

      if (filteredData.length > 0) {
        return (
          <div
            style={{
              backgroundColor: "white",
              border: "1px solid black",
              padding: "5px",
            }}
          >
            <p>Date: {month}</p>
            {filteredData.map((dataPoint, index) => (
              <p key={index}>
                User: {dataPoint.Va}, Status: {dataPoint.status}
              </p>
            ))}
          </div>
        );
      }
    }
    return null;
  };
  return (
    <div className="" style={{ margin: "100px 100px " }}>
      <LineChart
        width={2000}
        height={700}
        margin={{ top: 20, right: 50, left: 20, bottom: 20 }} // Adjust margins
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis
          dataKey="month"
          type="category"
          allowDuplicatedCategory={false}
          domain={uniqueSortedMonths}
          padding={{ left: 100, right: 20 }}
        />
        <YAxis
          dataKey="Va"
          type="category"
          allowDuplicatedCategory={false}
          padding={{ top: 100, bottom: 100 }}
        />
        <Tooltip
          content={<CustomTooltip />}
          isAnimationActive={false}
          filterNull={false}
          cursor={false}
        />

        {series.map((s, index) =>
          s.data.map((d, i) => {
            console.log(d.dotColor);
            return (
              <Line
                key={`${index}-${i}`}
                dataKey="Va"
                stroke="#BCC7DB"
                strokeWidth={2}
                data={s.data}
                dot={(props) => (
                  <circle
                    {...props}
                    r={8}
                    // fill={props.payload.dotColor}
                    stroke={props.payload.dotColor} //point color of the line
                    strokeWidth={4}
                  />
                )}
                onMouseOver={() => handleMouseOver(s.data, i)}
                onMouseLeave={handleMouseLeave}
              />
            );
          })
        )}
      </LineChart>
    </div>
  );
}
