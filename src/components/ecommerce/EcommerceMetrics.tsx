import {
  ArrowDownIcon,
  ArrowUpIcon,
 
} from "../../icons";
import Badge from "../ui/badge/Badge";


export default function EcommerceMetrics() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-4">
      {/* <!-- Metric Item Start --> */}
      <div
  className="rounded-2xl border-1 border-blue-500 bg-white bg-cover bg-center p-5 dark:border-blue-500 dark:bg-white/[0.03] md:p-6"
  // Replace with your background image path
>
        <div className="flex items-center justify-center">
          
          <img src = "/images/binancelogo.jpg" className="text-gray-800 size-15 dark:text-white/90 rounded-4xl"/>
        </div>

        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-black font-semibold dark:text-gray-400 text-nowrap">
              Binance Balance
            </span>
            <h4 className="mt-2 font-bold text-blue-500 text-title-sm dark:text-white/90">
              $ 83.83
            </h4>
          </div>
          <Badge color="success">
            <ArrowUpIcon />
            11.01%
          </Badge>
        </div>
      </div>
      {/* <!-- Metric Item End --> */}

       {/* <!-- Metric Item Start --> */}
           <div
  className="rounded-2xl border-1 border-blue-500 bg-white bg-cover bg-center p-5 dark:border-blue-500 dark:bg-white/[0.03] md:p-6"
  // Replace with your background image path
>
        <div className="flex items-center justify-center ">
          <img src = "/images/bitgetlogo.jpg" className="text-gray-800 size-15 dark:text-white/90 rounded-2xl"/>
        </div>

        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-black dark:text-gray-400 text-nowrap font-semibold">
              Bitget Balance
            </span>
            <h4 className="mt-2 font-bold text-blue-500 text-title-sm dark:text-white/90">
              $ 38.6
            </h4>
          </div>
          <Badge color="success">
            <ArrowUpIcon />
            11.01%
          </Badge>
        </div>
      </div>
      {/* <!-- Metric Item End --> */}

      {/* <!-- Metric Item Start --> */}
      <div
  className="rounded-2xl border-1 border-blue-500 bg-white bg-cover bg-center p-5 dark:border-blue-500 dark:bg-white/[0.03] md:p-6"
  // Replace with your background image path
>
        <div className="flex items-center justify-center">
          <img src = "/images/hyperliquidlogo.jpg" className="text-gray-800 size-15 dark:text-white/90 rounded-4xl"/>
        </div>
        <div className="flex items-end justify-between mt-5 gap-2">
  <div className="flex-1 min-w-0">
    <span className="text-sm text-black font-semibold dark:text-gray-400 whitespace-nowrap">
      HyperLiquid Balance
    </span>
    <h4 className="mt-2 font-bold text-blue-500 text-title-sm dark:text-white/90">
      $ 0
    </h4>
  </div>

  <div className="shrink-0">
    <Badge color="error">
      <ArrowDownIcon />
      9.05%
    </Badge>
  </div>
</div>
      </div>
      {/* <!-- Metric Item End --> */}
    </div>
  );
}
