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

interface monthEventsType {
  id?: string;
  event_name: string;
  theDate?: string;
}

//for tooltip

interface DataActivePoint {
  id: string;
  month: string;
  va_name: string;
  hours: string;
  price: string;
  obj_id: string;
  monthEvents_id?: string;
  cy?: number;
  cx?: number;
  monthEvents?: monthEventsType[];
}

interface tooltipProps {
  active?: boolean;
  payload?: any[]; // Change to appropriate type if possible
  label?: string;
}

interface DataPoint {
  id: string;
  month: string;
  va_name: string;
  hours: string;
  price: string;
  obj_id: string;
  monthEvents: monthEventsType[];
}

// for Actualdata
interface seriesDatatype {
  id: string;
  data: DataPoint[];
}

//enum color
enum DotColors {
  Upgrade = "#54B358",
  Activated = "#42A5F5",
  Deactivated = "#BDBDBD",
  Downgrade = "#EF5350",
  Ongoing = "white",
}
//data array
const series: seriesDatatype[] = [
  {
    id: "main2",
    data: [
      {
        id: "main3-sub1",
        month: "Apr2021",
        hours: "8hr",
        va_name: "User1",
        price: "10$",
        obj_id: "main2",
        monthEvents: [
          {
            id: "main2-sub1-me-1",
            event_name: "Activated",
            theDate: "11Apr",
          },
          {
            id: "main2-sub1-me-2",
            event_name: "Upgrade",
            theDate: "14Apr",
          },
          {
            id: "main2-sub1-me-3",
            event_name: "Activated",
            theDate: "15Apr",
          },
          {
            id: "main2-sub1-me-4",
            event_name: "Downgrade",
            theDate: "18Apr",
          },
          {
            id: "main2-sub1-me-5",
            event_name: "Deactivated",
            theDate: "30Apr",
          },
        ],
      },
      {
        id: "main2-sub2",
        month: "Dec2022",
        hours: "8hr",
        va_name: "User1",
        obj_id: "main2",
        price: "10$",
        monthEvents: [
          {
            id: "main2-sub2-me-1",
            event_name: "Activated",
            theDate: "1Dec",
          },
          {
            id: "main2-sub2-me-2",
            event_name: "Upgrade",
            theDate: "10Dec",
          },
          {
            id: "main2-sub2-me-3",
            event_name: "Deactivated",
            theDate: "14Dec",
          },
          {
            id: "main2-sub2-me-4",
            event_name: "Activated",
            theDate: "20Dec",
          },
          {
            id: "main2-sub2-me-5",
            event_name: "Upgrade",
            theDate: "22Dec",
          },
          {
            id: "main2-sub2-me-6",
            event_name: "Downgrade",
            theDate: "25Dec",
          },
          {
            id: "main2-sub2-me-7",
            event_name: "Deactivated",
            theDate: "30Dec",
          },
        ],
      },
      {
        id: "main2-sub3",
        month: "Jan2024",
        hours: "8hr",
        va_name: "User1",
        obj_id: "main2",
        price: "10$",
        monthEvents: [
          {
            id: "main2-sub2-me-1",
            event_name: "Ongoing",
            theDate: "Currently Running",
          },
        ],
      },

      {
        id: "main2-sub2",
        month: "Mar2023",
        hours: "8hr",
        va_name: "User1",
        obj_id: "main2",
        price: "10$",
        monthEvents: [
          {
            id: "main2-sub2-me-1",
            event_name: "Activated",
            theDate: "1Dec",
          },
          {
            id: "main2-sub2-me-2",
            event_name: "Upgrade",
            theDate: "10Dec",
          },
          {
            id: "main2-sub2-me-3",
            event_name: "Deactivated",
            theDate: "14Dec",
          },
          {
            id: "main2-sub2-me-4",
            event_name: "Activated",
            theDate: "20Dec",
          },
          {
            id: "main2-sub2-me-5",
            event_name: "Upgrade",
            theDate: "22Dec",
          },
          {
            id: "main2-sub2-me-6",
            event_name: "Downgrade",
            theDate: "25Dec",
          },
          {
            id: "main2-sub2-me-7",
            event_name: "Deactivated",
            theDate: "30Dec",
          },
        ],
      },
    ],
  },
  {
    id: "main3",
    data: [
      {
        id: "main3-sub1",
        month: "Apr2021",
        hours: "8hr",
        va_name: "Rahul Shukla",
        price: "10$",
        obj_id: "main3",
        monthEvents: [
          {
            id: "main3-sub1-me-1",
            event_name: "Activated",
            theDate: "11Apr",
          },
          {
            id: "main3-sub1-me-2",
            event_name: "Upgrade",
            theDate: "14Apr",
          },
          {
            id: "main3-sub1-me-3",
            event_name: "Activated",
            theDate: "15Apr",
          },
          {
            id: "main3-sub1-me-4",
            event_name: "Downgrade",
            theDate: "18Apr",
          },
          {
            id: "main3-sub1-me-5",
            event_name: "Deactivated",
            theDate: "30Apr",
          },
        ],
      },
      {
        id: "main3-sub2",
        month: "Dec2022",
        hours: "8hr",
        va_name: "Rahul Shukla",
        obj_id: "main3",
        price: "10$",
        monthEvents: [
          {
            id: "main3-sub2-me-1",
            event_name: "Activated",
            theDate: "1Dec",
          },
          {
            id: "main3-sub2-me-2",
            event_name: "Upgrade",
            theDate: "10Dec",
          },
          {
            id: "main3-sub2-me-3",
            event_name: "Deactivated",
            theDate: "14Dec",
          },
          {
            id: "main3-sub2-me-4",
            event_name: "Activated",
            theDate: "20Dec",
          },
          {
            id: "main3-sub2-me-5",
            event_name: "Upgrade",
            theDate: "22Dec",
          },
          {
            id: "main3-sub2-me-6",
            event_name: "Downgrade",
            theDate: "25Dec",
          },
          {
            id: "main3-sub2-me-7",
            event_name: "Deactivated",
            theDate: "30Dec",
          },
        ],
      },
      {
        id: "main3-sub3",
        month: "Mar2024",
        hours: "8hr",
        va_name: "Rahul Shukla",
        obj_id: "main3",
        price: "10$",
        monthEvents: [
          {
            id: "main3-sub3-me-1",
            event_name: "Activated",
            theDate: "1Mar",
          },
          {
            id: "main3-sub3-me-2",
            event_name: "Upgrade",
            theDate: "10Mar",
          },
          {
            id: "main3-sub3-me-3",
            event_name: "Deactivated",
            theDate: "14Mar",
          },
          {
            id: "main3-sub3-me-4",
            event_name: "Activated",
            theDate: "20Mar",
          },
          {
            id: "main3-sub3-me-5",
            event_name: "Upgrade",
            theDate: "26Mar",
          },
        ],
      },
      {
        id: "main3-sub4",
        month: "Dec2024",
        hours: "8hr",
        va_name: "Rahul Shukla",
        obj_id: "main3",
        price: "10$",
        monthEvents: [
          { id: "main3-sub4-me-1", event_name: "Activated", theDate: "11Dec" },
          {
            id: "main3-sub4-me-2",
            event_name: "Deactivated",
            theDate: "15Dec",
          },
        ],
      },
    ],
  },
  {
    id: "main4",
    data: [
      {
        id: "main4-sub1",
        month: "Apr2021",
        hours: "8hr",
        va_name: "Arham khan",
        obj_id: "main4",
        price: "10$",
        monthEvents: [
          { id: "main4-sub1-me-1", event_name: "Activated", theDate: "1Apr" },
          {
            id: "main4-sub1-me-2",
            event_name: "Deactivated",
            theDate: "12Apr",
          },
          {
            id: "main4-sub1-me-3",
            event_name: "Activated",
            theDate: "15Apr",
          },
        ],
      },
      {
        id: "main4-sub2",
        month: "Dec2022",
        hours: "8hr",
        va_name: "Arham khan",
        obj_id: "main4",
        price: "10$",
        monthEvents: [
          { id: "main4-sub2-me-1", event_name: "Activated", theDate: "11Dec" },
          {
            id: "main4-sub2-me-2",
            event_name: "Deactivated",
            theDate: "15Dec",
          },
        ],
      },
      {
        id: "main4-sub3",
        month: "Dec2024",
        hours: "8hr",
        va_name: "Arham khan",
        obj_id: "main4",
        price: "10$",
        monthEvents: [
          {
            id: "main4-sub3-me-1",
            event_name: "Activated",
            theDate: "11Dec",
          },
          {
            id: "main4-sub3-me-2",
            event_name: "Deactivated",
            theDate: "15Dec",
          },
          {
            id: "main4-sub3-me-3",
            event_name: "Activated",
            theDate: "15Dec",
          },
          {
            id: "main4-sub3-me-4",
            event_name: "Upgrade",
            theDate: "15Dec",
          },
          {
            id: "main4-sub3-me-5",
            event_name: "Downgrade",
            theDate: "15Dec",
          },
        ],
      },
    ],
  },
];

const OrgTimelineChart = () => {
  const [activePoint, setActivePoint] = useState<DataActivePoint | null>(null);

  // for activePoint in chart
  const handleMouseOver = (dataPoint: DataPoint) => {
    // console.log(dataPoint);

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
            <span>Time:</span> {activePoint.month}
          </p>
          <p>
            <span>User:</span>
            {activePoint.va_name}
          </p>
          {/* Use filter to get relevant payloads */}
          {activePoint.monthEvents &&
            activePoint.monthEvents
              .filter((item) => item.id === activePoint.monthEvents_id)
              .map((item, index) => (
                <div key={index}>
                  <p>Status: {item.event_name}</p>
                  <p>Date: {item.theDate}</p>
                </div>
              ))}
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
          {/* // Modify the dot prop of the Line component to render multiple
          circles using map function */}

          {series.map((s) => (
            <Line
              dataKey="va_name"
              data={s.data}
              key={s.id}
              stroke="black"
              dot={(props) => {
                // Extract the coordinates of the dot
                const { cx, cy } = props;

                return (
                  <g>
                    {/* Render circles for each monthEvent */}
                    {props.payload.monthEvents?.map((event, index) => {
                      // console.log(event.id);
                      return (
                        <g key={index}>
                          {event && (
                            <circle
                              cx={cx}
                              cy={cy}
                              r={8 + index * 8} // Radius of each concentric circle
                              fill="none"
                              stroke={
                                DotColors[
                                  event.event_name as keyof typeof DotColors
                                ]
                              }
                              strokeWidth={7}
                              onMouseOver={() => {
                                handleMouseOver({
                                  ...props.payload,
                                  monthEvents_id: event.id,
                                });
                              }}
                              onMouseLeave={handleMouseLeave}
                            />
                          )}
                        </g>
                      );
                    })}
                  </g>
                );
              }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OrgTimelineChart;

// strokeDasharray={
//   index === 0
//     ? undefined
//     : `${index * 2} ${index * 2}`
// } // Adding dash array to distinguish concentric circles
