"use client";
import React, { useState } from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

// Type declaration
interface DataPoint {
  month: string;
  Va: string;
  status: string;
  hours: number;
  price: number;
}

interface Props {
  active?: boolean;
  payload?: any[];
  label?: string;
  series?: { data: DataPoint[] }[];
}

const series = [
  {
    id: "main1",
    data: [
      {
        event_name: "Activated",
        month: "Feb2023",
        hours: "4hr",
        va_name: "Meena Guria",
        dotColor: "#54B358",
        obj_id: "main1",
      },
      {
        event_name: "Deactivated",
        month: "Mar2023",
        hours: "4hr",
        va_name: "Meena Guria",
        dotColor: "#BDBDBD",
        obj_id: "main1",
      },
    ],
  },
  {
    id: "main2",
    data: [
      {
        event_name: "Deactivated",
        month: "Dec2022",
        hours: "8hr",
        va_name: "Astha Shukla",
        dotColor: "#54B358",
        obj_id: "main2",
      },
      {
        event_name: "Deactivated",
        month: "Dec2022",
        hours: "8hr",
        va_name: "Astha Shukla",
        dotColor: "#BDBDBD",
        obj_id: "main2",
      },
      {
        event_name: "Downgrade",
        month: "Mar2024",
        hours: "8hr",
        va_name: "Astha Shukla",
        dotColor: "#EF5350",
        obj_id: "main2",
      },
    ],
  },
  {
    id: "main3",
    data: [
      {
        event_name: "Deactivated",
        month: "Apr2021",
        hours: "8hr",
        va_name: "Rahul Shukla",
        dotColor: "#54B358",
        obj_id: "main3",
      },
      {
        event_name: "Deactivated",
        month: "Dec2022",
        hours: "8hr",
        va_name: "Rahul Shukla",
        dotColor: "#BDBDBD",
        obj_id: "main3",
      },
      {
        event_name: "Deactivated",
        month: "Mar2024",
        hours: "8hr",
        va_name: "Rahul Shukla",
        dotColor: "#BDBDBD",
        obj_id: "main3",
      },
      {
        event_name: "Downgrade",
        month: "Dec2024",
        hours: "8hr",
        va_name: "Rahul Shukla",
        dotColor: "#EF5350",
        obj_id: "main3",
      },
    ],
  },
  {
    id: "main4",
    data: [
      {
        event_name: "Deactivated",
        month: "Apr2021",
        hours: "8hr",
        va_name: "Arham khan",
        dotColor: "#54B358",
        obj_id: "main4",
      },
      {
        event_name: "Deactivated",
        month: "Dec2022",
        hours: "8hr",
        va_name: "Arham khan",
        dotColor: "#BDBDBD",
        obj_id: "main4",
      },
      {
        event_name: "Downgrade",
        month: "Dec2024",
        hours: "8hr",
        va_name: "Arham khan",
        dotColor: "#EF5350",
        obj_id: "main4",
      },
    ],
  },
];

export default function OrgtimelineChart() {
  const [activePoint, setActivePoint] = useState<DataPoint | null>(null);

  const handleMouseOver = (dataPoint: DataPoint) => {
    setActivePoint(dataPoint);
  };

  const handleMouseLeave = () => {
    setActivePoint(null);
  };

  const CustomTooltip: React.FC<Props> = ({ active, payload }) => {
    if (active && activePoint && payload && payload.length) {
      return (
        <div
          style={{
            backgroundColor: "white",
            border: "1px solid black",
            padding: "5px",
          }}
        >
          <p>Date: {activePoint.month}</p>
          <p>User: {activePoint.va_name}</p>
          <p>Status: {activePoint.event_name} </p>
          <p>Hours: {activePoint.hours}</p>
        </div>
      );
    }

    return null;
  };

  const uniqueSortedMonths = Array.from(
    new Set(series.flatMap(({ data }) => data.map(({ month }) => month)))
  ).sort((a, b) => {
    const [aMonth, aYear] = [a.substring(0, 3), a.substring(3)];
    const [bMonth, bYear] = [b.substring(0, 3), b.substring(3)];
    if (aYear !== bYear) {
      return parseInt(aYear) - parseInt(bYear);
    } else {
      return (
        new Date(aMonth + " 1, " + aYear) - new Date(bMonth + " 1, " + bYear)
      );
    }
  });

  return (
    <div>
      <LineChart
        width={2000}
        height={800}
        data={series.flatMap(({ data }) => data)}
        margin={{ top: 20, right: 50, left: 20, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis
          dataKey="month"
          type="category"
          allowDuplicatedCategory={false}
          domain={uniqueSortedMonths}
          padding={{ left: 100, right: 100 }}
        />
        <YAxis
          dataKey="va_name"
          type="category"
          allowDuplicatedCategory={false}
          padding={{ top: 100, bottom: 100 }}
        />
        <Tooltip
          content={<CustomTooltip />}
          position={{
            x: activePoint && activePoint.cx,
            y: activePoint && activePoint.cy,
          }}
          isAnimationActive={false}
          filterNull={false}
          cursor={false}
        />
        {series.map((s, index) => (
          <Line
            key={index}
            dataKey="va_name"
            stroke="#BCC7DB"
            strokeWidth={2}
            data={s.data}
            dot={(props) => (
              <circle
                {...props}
                key={index}
                width={10}
                r={10}
                stroke={props.payload.dotColor}
                strokeWidth={4}
                onMouseOver={() => {
                  handleMouseOver(props.payload);
                }}
                onMouseLeave={handleMouseLeave}
              />
            )}
          />
        ))}
      </LineChart>
    </div>
  );
}
