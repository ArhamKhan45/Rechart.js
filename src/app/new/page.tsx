"use client";
import { useState } from "react";
import Style from "./style.module.css";
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

// Type declaration

interface DataPoint {
  month: string;
  va_name: string;
  event_name: string;
  hours: string;
  price: string;
  obj_id: string;
  cy?: number;
  cx?: number;
}

interface tooltipProps {
  active?: boolean;
  payload?: any[]; // Change to appropriate type if possible
  label?: string;
  series?: { data: DataPoint[] }[]; // Assuming series is passed as props
}

interface seriesDatatype {
  id: string;
  data: DataPoint[];
}

//enum color
enum DotColors {
  Upsell = "#FFCA28",
  Upgrade = "#42A5F5",
  Activated = "#54B358",
  Deactivated = "#BDBDBD",
  Downgrade = "#EF5350",
}
//data array
const series: seriesDatatype[] = [
  {
    id: "main0",
    data: [
      {
        event_name: "Activated",
        month: "Jan2023",
        hours: "4hr",
        va_name: "Faiz elahi",

        obj_id: "main0",
        price: "10$",
      },
      {
        event_name: "Activated",
        month: "Feb2023",
        hours: "4hr",
        va_name: "Faiz elahi",
        obj_id: "main0",
        price: "10$",
      },
      {
        event_name: "Upgrade",
        month: "Mar2023",
        hours: "4hr",
        va_name: "Faiz elahi",
        obj_id: "main0",
        price: "10$",
      },
      {
        event_name: "Activated",
        month: "Apr2023",
        hours: "4hr",
        va_name: "Faiz elahi",
        obj_id: "main0",
        price: "10$",
      },
      {
        event_name: "Upgrade",
        month: "May2023",
        hours: "4hr",
        va_name: "Faiz elahi",
        obj_id: "main0",
        price: "10$",
      },
      {
        event_name: "Activated",
        month: "Jun2023",
        hours: "4hr",
        va_name: "Faiz elahi",

        obj_id: "main0",
        price: "10$",
      },
      {
        event_name: "Activated",
        month: "Jul2023",
        hours: "4hr",
        va_name: "Faiz elahi",

        obj_id: "main0",
        price: "10$",
      },
      {
        event_name: "Activated",
        month: "Aug2023",
        hours: "4hr",
        va_name: "Faiz elahi",

        obj_id: "main0",
        price: "10$",
      },
      {
        event_name: "Activated",
        month: "Sep2023",
        hours: "4hr",
        va_name: "Faiz elahi",

        obj_id: "main0",
        price: "10$",
      },
      {
        event_name: "Activated",
        month: "Oct2023",
        hours: "4hr",
        va_name: "Faiz elahi",

        obj_id: "main0",
        price: "10$",
      },
      {
        event_name: "Activated",
        month: "Nov2023",
        hours: "4hr",
        va_name: "Faiz elahi",

        obj_id: "main0",
        price: "10$",
      },
      {
        event_name: "Activated",
        month: "Dec2023",
        hours: "4hr",
        va_name: "Faiz elahi",

        obj_id: "main0",
        price: "10$",
      },
      {
        event_name: "Activated",
        month: "Jan2024",
        hours: "4hr",
        va_name: "Faiz elahi",

        obj_id: "main0",
        price: "10$",
      },
      {
        event_name: "Deactivated",
        month: "Mar2024",
        hours: "4hr",
        va_name: "Faiz elahi",

        obj_id: "main0",
        price: "10$",
      },
      {
        event_name: "Deactivated",
        month: "Apr2024",
        hours: "4hr",
        va_name: "Faiz elahi",

        obj_id: "main0",
        price: "10$",
      },
      {
        event_name: "Upsell",
        month: "May2024",
        hours: "4hr",
        va_name: "Faiz elahi",

        obj_id: "main0",
        price: "10$",
      },
      {
        event_name: "Upsell",
        month: "Jun2024",
        hours: "4hr",
        va_name: "Faiz elahi",

        obj_id: "main0",
        price: "10$",
      },
      {
        event_name: "Upsell",
        month: "Jul2024",
        hours: "4hr",
        va_name: "Faiz elahi",

        obj_id: "main0",
        price: "10$",
      },
      {
        event_name: "Upsell",
        month: "Aug2024",
        hours: "4hr",
        va_name: "Faiz elahi",

        obj_id: "main0",
        price: "10$",
      },
      {
        event_name: "Upsell",
        month: "Sep2024",
        hours: "4hr",
        va_name: "Faiz elahi",

        obj_id: "main0",
        price: "10$",
      },
      {
        event_name: "Upsell",
        month: "Oct2024",
        hours: "4hr",
        va_name: "Faiz elahi",

        obj_id: "main0",
        price: "10$",
      },
    ],
  },
  {
    id: "main1",
    data: [
      {
        event_name: "Activated",
        month: "Feb2023",
        hours: "4hr",
        va_name: "Meena Guria",

        obj_id: "main1",
        price: "120$",
      },
      {
        event_name: "Deactivated",
        month: "Mar2023",
        hours: "4hr",
        va_name: "Meena Guria",

        obj_id: "main1",
        price: "120$",
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

        obj_id: "main2",
        price: "10$",
      },
      {
        event_name: "Deactivated",
        month: "Dec2022",
        hours: "8hr",
        va_name: "Astha Shukla",

        obj_id: "main2",
        price: "10$",
      },
      {
        event_name: "Downgrade",
        month: "Mar2024",
        hours: "8hr",
        va_name: "Astha Shukla",

        obj_id: "main2",
        price: "10$",
      },
    ],
  },
  {
    id: "main3",
    data: [
      {
        event_name: "Activated",
        month: "Apr2021",
        hours: "8hr",
        va_name: "Rahul Shukla",

        obj_id: "main3",
        price: "10$",
      },
      {
        event_name: "Deactivated",
        month: "Dec2022",
        hours: "8hr",
        va_name: "Rahul Shukla",

        obj_id: "main3",
        price: "10$",
      },
      {
        event_name: "Deactivated",
        month: "Mar2024",
        hours: "8hr",
        va_name: "Rahul Shukla",

        obj_id: "main3",
        price: "10$",
      },
      {
        event_name: "Downgrade",
        month: "Dec2024",
        hours: "8hr",
        va_name: "Rahul Shukla",

        obj_id: "main3",
        price: "10$",
      },
    ],
  },
  {
    id: "main4",
    data: [
      {
        event_name: "Activated",
        month: "Apr2021",
        hours: "8hr",
        va_name: "Arham khan",

        obj_id: "main4",
        price: "10$",
      },
      {
        event_name: "Deactivated",
        month: "Dec2022",
        hours: "8hr",
        va_name: "Arham khan",

        obj_id: "main4",
        price: "10$",
      },
      {
        event_name: "Downgrade",
        month: "Dec2024",
        hours: "8hr",
        va_name: "Arham khan",

        obj_id: "main4",
        price: "10$",
      },
    ],
  },
  {
    id: "main4",
    data: [
      {
        event_name: "Activated",
        month: "Apr2021",
        hours: "8hr",
        va_name: "Arham khan",

        obj_id: "main4",
        price: "10$",
      },
      {
        event_name: "Deactivated",
        month: "Dec2022",
        hours: "8hr",
        va_name: "Arham khan",

        obj_id: "main4",
        price: "10$",
      },
      {
        event_name: "Downgrade",
        month: "Dec2024",
        hours: "8hr",
        va_name: "Arham khan",

        obj_id: "main4",
        price: "10$",
      },
    ],
  },
  {
    id: "main5",
    data: [
      {
        event_name: "Activated",
        month: "Apr2021",
        hours: "8hr",
        va_name: "hello khan",

        obj_id: "main5",
        price: "10$",
      },
      {
        event_name: "Deactivated",
        month: "Dec2022",
        hours: "8hr",
        va_name: "hello khan",

        obj_id: "main5",
        price: "10$",
      },
      {
        event_name: "Downgrade",
        month: "Dec2024",
        hours: "8hr",
        va_name: "hello khan",

        obj_id: "main5",
        price: "10$",
      },
    ],
  },
  {
    id: "main6",
    data: [
      {
        event_name: "Activated",
        month: "Apr2021",
        hours: "8hr",
        va_name: "A khan",

        obj_id: "main6",
        price: "10$",
      },
      {
        event_name: "Deactivated",
        month: "Dec2022",
        hours: "8hr",
        va_name: "A khan",

        obj_id: "main6",
        price: "10$",
      },
      {
        event_name: "Downgrade",
        month: "Dec2024",
        hours: "8hr",
        va_name: "A khan",

        obj_id: "main6",
        price: "10$",
      },
    ],
  },
];

const OrgTimelineChart = () => {
  const [activePoint, setActivePoint] = useState<DataPoint | null>(null);

  // for activePoint in chart
  const handleMouseOver = (dataPoint: DataPoint) => {
    setActivePoint(dataPoint);
  };

  const handleMouseLeave = () => {
    setActivePoint(null);
  };

  // sort months

  const uniqueSortedMonths = Array.from(
    new Set(series.flatMap(({ data }) => data.map(({ month }) => month)))
  ).sort((a: string, b: string) => {
    const [aMonth, aYear] = [a.substring(0, 3), a.substring(3)];
    const [bMonth, bYear] = [b.substring(0, 3), b.substring(3)];
    if (aYear !== bYear) {
      return parseInt(aYear) - parseInt(bYear);
    } else {
      return (
        new Date(`${aMonth} 1, ${aYear}`).getTime() -
        new Date(`${bMonth} 1, ${bYear}`).getTime()
      );
    }
  });

  //tooltip

  const CustomTooltip: React.FC<tooltipProps> = ({ active, payload }) => {
    if (active && activePoint && payload && payload.length) {
      return (
        <div className={`${Style.tooltipbox} `}>
          <p>
            <span>Date:</span> {activePoint.month}
          </p>
          <p>
            <span>User:</span>
            {activePoint.va_name}
          </p>
          <p>
            <span>Status:</span>
            {activePoint.event_name}
          </p>
          <p>
            <span>Hours:</span>
            {activePoint.hours}
          </p>
          <p>
            <span>Prices:</span>
            {activePoint.price}
          </p>
        </div>
      );
    }

    return <></>;
  };

  return (
    <div
      className={""}
      style={{ height: "100vh", backgroundColor: "white", color: "black" }}
    >
      <ResponsiveContainer width="100%" height={"100%"}>
        <LineChart>
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
            position={
              activePoint ? { x: activePoint.cx, y: activePoint.cy } : undefined
            } // Use conditional rendering for position
            isAnimationActive={false}
            filterNull={false}
            cursor={false}
          />

          {series.map((s) => (
            <Line
              dataKey="va_name"
              data={s.data}
              key={s.id}
              stroke="#BCC7DB"
              dot={(props) => (
                <circle
                  key={s.id}
                  {...props}
                  r={8}
                  // stroke={props.payload.dotColor}
                  stroke={
                    DotColors[
                      props.payload.event_name as keyof typeof DotColors
                    ]
                  }
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
      </ResponsiveContainer>
    </div>
  );
};

export default OrgTimelineChart;
