import React, { useState } from "react";
import { Settings, Link  } from "lucide-react"; // Import icons

const Exchange: React.FC = () => {
  const [modalType, setModalType] = useState<"binance" | "bitget" | null>(null);

  const openModal = (type: "binance" | "bitget") => setModalType(type);
  const closeModal = () => setModalType(null);

  const handleSettingsClick = (type: "binance" | "bitget") => {
    alert(`Open settings for ${type}`);
    // Replace with modal or navigation to settings page
  };

  // Exchange Card Component
  const ExchangeCard = ({
    name,
    type,
  }: {
    name: string;
    type: "binance" | "bitget";
  }) => (
    <div className="relative border border-gray-200 dark:border-gray-700 rounded-md p-4">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
        {name}
      </h3>

      {/* Status */}
      <div className="mt-2 text-sm text-red-500 font-medium bg-red-50 p-2 dark:bg-transparent dark:border border-red-300">
        InActive
      </div>

      {/* TestNet Info */}
      <div className="mt-4 bg-gray-100 p-3 dark:bg-transparent dark:border border-gray-50">
        <h4 className="font-semibold text-gray-700 dark:text-gray-200 mb-2">
          🚀 TestNet Features:
        </h4>
        <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1">
          <li>Real-time market data streaming</li>
          <li>Safe testing environment</li>
          <li>No real funds at risk</li>
          <li>Full API functionality</li>
        </ul>
      </div>

      {/* Buttons */}
      <div className="mt-4 flex justify-between items-center relative">
        <button
          onClick={() => openModal(type)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm"
        >
          <Link  className="w-4 h-4" />
          Connect
        </button>

        {/* Settings Icon in Bottom-Right */}
        <button
          onClick={() => handleSettingsClick(type)}
          className="absolute bottom-0 right-0 mb-2 mr-2 p-1 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
          title={`${name} Settings`}
        >
          <Settings className="w-5 h-5 text-gray-700 dark:text-white" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Main Card */}
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md p-6">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
          API Settings
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Connect your exchange accounts to enable automated trading.
        </p>

        {/* Info Banner */}
        <div className="bg-blue-50 dark:bg-gray-800 text-blue-800 dark:text-blue-200 border border-blue-200 dark:border-blue-700 p-4 rounded-md mb-6">
          Ready to test with live data? Connect your Binance and Bitget TestNet
          API to access real-time market data for safe strategy testing.
        </div>

        {/* Exchange Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <ExchangeCard name="Binance" type="binance" />
          <ExchangeCard name="Bitget" type="bitget" />
        </div>
      </div>

      {/* API Modal */}
      {modalType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-900 w-full max-w-md p-6 rounded-lg shadow-lg relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 dark:hover:text-white"
            >
              ✕
            </button>

            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
              Connect {modalType === "binance" ? "Binance" : "Bitget"} API
            </h3>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  API Key
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring focus:border-blue-500"
                  placeholder="Enter your API Key"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Secret Key
                </label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring focus:border-blue-500"
                  placeholder="Enter your Secret Key"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Passphrase
                </label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring focus:border-blue-500"
                  placeholder="Enter your Passphrase"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-semibold"
              >
                Submit
              </button>
            </form>

            {/* Documentation Note */}
            <div className="mt-4 text-sm text-gray-600 dark:text-gray-300">
              <p>
                <strong>Note:</strong> For API documentation click here —
              </p>
              <button
                type="button"
                className="mt-2 px-4 py-1.5 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-sm text-gray-800 dark:text-white rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                View Documentation
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Exchange;
