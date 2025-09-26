import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
// import { useState } from "react";
{/* import { Dropdown } from "../ui/dropdown/Dropdown";
import { DropdownItem } from "../ui/dropdown/DropdownItem";
import { MoreDotIcon } from "../../icons";   */}

export default function MonthlyTarget() {
  // const [isOpen, setIsOpen] = useState(false);

 // const toggleDropdown = () => setIsOpen(!isOpen);
  // const closeDropdown = () => setIsOpen(false);

  // Donut Chart Data
  const series = [55, 25, 20]; // Revenue, Target, Today
  const options: ApexOptions = {
    chart: {
      type: "donut",
      height: 330,
      fontFamily: "Outfit, sans-serif",
    },
    labels: ["Binance", "Bitget", "HyperLiquid"],
    colors: ["#3B82F6", "#0EA5E9", "#8B5CF6"],
    legend: {
      position: "bottom",
      labels: {
        colors: "#ffffff",
      },
    },
    dataLabels: {
      enabled: true,
      // formatter: (val: number, opts) => {
      //   return `${opts.w.config.series[opts.seriesIndex]}`;
      // },
      // style: {
      //   fontSize: "14px",
      //   fontWeight: "bold",
      //   colors: ["#fff"],
      // },
    },
    tooltip: {
  theme: "dark", // This sets tooltip text to white automatically
  y: {
    formatter: (val) => `${val}`,
  },
},

    plotOptions: {
      pie: {
        donut: {
          size: "70%",
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: "16px",
              fontWeight: 600,
              color: "#FFFFFF",
            },
            value: {
              show: true,
              fontSize: "20px",
              fontWeight: 700,
              color: "#FFFFFF",
              formatter: (val) => `${val}`,
            },
            total: {
              show: true,
              label: "Total Share",
              fontSize: "16px",
              fontWeight: 600,
              color: "#FFFFFF",
              formatter: () =>
                `${series.reduce((acc, val) => acc + val, 0)}`,
            },
          },
        },
      },
    },
  };

  return (
    <div className="rounded-2xl border border-blue-500 bg-gray-100 dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="px-5 pt-5 bg-white shadow-default rounded-2xl pb-11 dark:bg-gray-900 sm:px-6 sm:pt-6" >
        {/* Header */}
        <div className="flex justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
              Trade Shares
            </h3>
           
          </div>

          {/* Dropdown Menu */}
          
        </div>

        {/* Donut Chart */}
        <div className="relative mt-6">
          <Chart options={options} series={series} type="donut" height={330} />
        </div>

        {/* Info */}
        
      </div>
    </div>
  );
}
