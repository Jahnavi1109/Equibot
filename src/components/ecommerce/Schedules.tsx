import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import ChartTab from "../common/ChartTab";
import BotDashboard from "./BotDashboard";
// import BasicTableOne from "../tables/BasicTables/BasicTableOne";
import Table from "../tables/BasicTables/Table"

export default function StatisticsChart() {
  const options: ApexOptions = {
    chart: {
      type: "area",
      height: 310,
      toolbar: { show: false },
      zoom: { enabled: false },
      fontFamily: "Outfit, sans-serif",
    },
    colors: ["#3B82F6"], // Tailwind blue-500
    stroke: {
      curve: "smooth",
      width: 3,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.05,
        stops: [0, 100],
        colorStops: [
          {
            offset: 0,
            color: "#3B82F6",
            opacity: 0.4,
          },
          {
            offset: 100,
            color: "#3B82F6",
            opacity: 0.05,
          },
        ],
      },
    },
    dataLabels: { enabled: false },
    markers: {
      size: 4,
      colors: ["#fff"],
      strokeColors: "#3B82F6",
      strokeWidth: 2,
      hover: {
        size: 6,
      },
    },
    tooltip: {
      enabled: true,
      x: { format: "MMM" },
      theme: "light",
    },
    grid: {
      strokeDashArray: 5,
      yaxis: { lines: { show: true } },
      xaxis: { lines: { show: false } },
    },
    xaxis: {
      categories: [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
      ],
      axisTicks: { show: false },
      axisBorder: { show: false },
      labels: {
        style: { colors: "#3B82F6" },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: ["#3B82F6"],
          fontSize: "12px",
        },
      },
    },
    legend: {
      show: false,
    },
  };

  const series = [
    {
      name: "Invested",
      data: [40, 30, 50, 40, 55, 40, 70, 100, 110, 120, 150, 140],
    },
  ];

  return (
    <>
      <div className=" mb-6 rounded-2xl border border-gray-200 bg-white px-5 pb-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
        <div className="flex flex-col gap-5 mb-6 sm:flex-row sm:justify-between">
          <div className="w-full">
            <h3 className="text-lg font-semibold text-black dark:text-blue-400 mb-5">
              Bot Management
            </h3>
            <BotDashboard />
            <div className = "mt-6">
              <Table />
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white px-5 pb-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
        <div className="flex flex-col gap-5 mb-6 sm:flex-row sm:justify-between">
          <div className="w-full">
            <h3 className="text-lg font-semibold text-black dark:text-blue-400">
              Schedules
            </h3>
          </div>
          <div className="flex items-start w-full gap-3 sm:justify-end">
            <ChartTab />
          </div>
        </div>

        <div className="max-w-full overflow-x-auto custom-scrollbar">
          <div className="min-w-[1000px] xl:min-w-full">
            <Chart options={options} series={series} type="area" height={310} />
          </div>
        </div>
      </div>
    </>
  );
}
