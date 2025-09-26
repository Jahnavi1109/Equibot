import { NotebookPen } from "lucide-react";

export default function AmmDataCard() {
  const capital = 100;
  const balance = 83.37;
  const isActive = false; // Set based on bot state

  const tableData: any[] = []; // Empty = No data

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-6 border border-blue-500 dark:border-blue-400">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-2">
          Binance AMM Data{" "}
          <span
            className={`text-base font-medium ${
              isActive ? "text-green-500" : "text-red-400"
            }`}
          >
            ({isActive ? "Active" : "Disabled"})
          </span>
        </h2>

        <div className="flex justify-between items-center flex-wrap gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-800 dark:text-gray-200 font-medium">
            <NotebookPen className="w-4 h-4 text-blue-500 dark:text-blue-400" />
            Capital Assigned:{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              {capital}
            </span>
          </div>
          <div className="text-sm text-gray-800 dark:text-gray-200 font-medium">
            Balance:{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              {balance}
            </span>
          </div>
        </div>
      </div>

      {/* Main content: Table + Side panel */}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Table container */}
        <div className="flex-1 overflow-x-auto rounded-lg border border-blue-500 dark:border-blue-400">
          <table className="min-w-full table-auto text-sm text-center">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="px-4 py-2 font-semibold">Symbol</th>
                <th className="px-4 py-2 font-semibold">Price</th>
                <th className="px-4 py-2 font-semibold">Original Quantity</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 text-gray-700 dark:text-white">
              {tableData.length === 0 ? (
                <tr>
                  <td
                    colSpan={3}
                    className="px-4 py-6 text-gray-500 dark:text-gray-300 italic"
                  >
                    No Data Found
                  </td>
                </tr>
              ) : (
                tableData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-4 py-3">{row.symbol}</td>
                    <td className="px-4 py-3">{row.price}</td>
                    <td className="px-4 py-3">{row.originalQty}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Side panel (next to table) */}
        <div className="w-full lg:w-[300px] flex items-center justify-center rounded-lg border border-dashed border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-sm font-medium px-4 py-6 text-center">
          No Data Available
        </div>
      </div>
    </div>
  );
}
