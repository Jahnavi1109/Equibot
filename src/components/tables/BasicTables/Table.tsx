const data = [{symbol: "", price: "", originalQty: ""}]; // simulate empty or invalid data
// Uncomment to test with actual data
// const data = [
//   { symbol: "BTCUSDT", price: "$27,300", originalQty: "0.5" },
//   { symbol: "ETHUSDT", price: "$1,620", originalQty: "2" },
//   { symbol: "BNBUSDT", price: "$210", originalQty: "5" },
//   { symbol: "SOLUSDT", price: "$19", originalQty: "10" },
// ];

export default function Table() {
  // Helper: Check if the data array contains at least one valid object
  const hasValidData = Array.isArray(data) && data.some(
    (item) => item.symbol && item.price && item.originalQty
  );

  return (
    <div className="overflow-x-auto border border-blue-500 dark:border-blue-400 rounded-xl">
      <table className="min-w-full border-collapse text-center divide-y divide-sky-300 dark:divide-blue-800">
        {/* Header */}
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="px-6 py-3 text-xs font-bold uppercase tracking-wider border-b border-sky-300 dark:border-blue-800">
              Symbol
            </th>
            <th className="px-6 py-3 text-xs font-bold uppercase tracking-wider border-b border-sky-300 dark:border-blue-800">
              Price
            </th>
            <th className="px-6 py-3 text-xs font-bold uppercase tracking-wider border-b border-sky-300 dark:border-blue-800">
              Original Quantity
            </th>
          </tr>
        </thead>

        {/* Body */}
        <tbody className="bg-white dark:bg-gray-900 divide-y divide-sky-300 dark:divide-blue-800">
          {hasValidData ? (
            data.map((item, index) => (
              <tr
                key={index}
                className="hover:bg-sky-50 dark:hover:bg-gray-800 transition"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-100">
                  {item.symbol}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-100">
                  {item.price}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-100">
                  {item.originalQty}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={3}
                className="px-6 py-6 text-gray-500 dark:text-gray-400 text-sm italic"
              >
                No data available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
