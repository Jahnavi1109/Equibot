import React, { useState } from "react";

const CronSettings: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Close By User");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tabs = [
    "Close By User",
    "Disable/Enable All Coins",
    "See All Coins",
    "Add Admin",
    "Close Pending Spot Orders",
  ];

  return (
    <div className="w-full p-6">
      {/* Tabs Section */}
      <div className="flex overflow-x-auto space-x-4 pb-2 scrollbar-hide">
        {tabs.map((tab) => (
          <div
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`min-w-[200px] flex-shrink-0 cursor-pointer rounded-xl border p-4 shadow-md transition 
              ${
                activeTab === tab
                  ? "bg-blue-500 text-white border-blue-600"
                  : "bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-blue-400 hover:bg-blue-500 hover:text-white"
              }`}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Content Section */}
      <div className="mt-6 bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-blue-500">
        <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
          {activeTab}
        </h2>

        <div className="text-gray-700 dark:text-gray-300">
          {/* ---- Close By User ---- */}
          {activeTab === "Close By User" && (
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block mb-2 text-sm font-medium text-blue-500">
                    UserId
                  </label>
                  <select className="w-full rounded-lg border border-blue-500 px-3 py-2 bg-white dark:bg-gray-800 text-blue-500 dark:text-white">
                    <option value="">Select UserId</option>
                    <option value="userid1">ADMIN (A7403DEC596DCE521)</option>
                    <option value="userid2">TECHLOVER (A37A870F3387D5441)</option>
                    <option value="userid3">ABRAHAM (AE79F9B35A24AA884)</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-blue-500">
                    Platform
                  </label>
                  <select className="w-full rounded-lg border border-blue-500 px-3 py-2 bg-white dark:bg-gray-800 text-blue-500 dark:text-white">
                    <option value="">Select Platform</option>
                    <option value="binance">Binance</option>
                    <option value="bitget">Bitget</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-blue-500">
                    Bot
                  </label>
                  <select className="w-full rounded-lg border border-blue-500 px-3 py-2 bg-white dark:bg-gray-800 text-blue-500 dark:text-white">
                    <option value="">Select Bot</option>
                    <option value="spot">SPOT</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                  Submit
                </button>
              </div>
            </form>
          )}

          {/* ---- Disable/Enable All Coins ---- */}
          {activeTab === "Disable/Enable All Coins" && (
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block mb-2 text-sm font-medium text-blue-500">
                    Platform
                  </label>
                  <select className="w-full rounded-lg border border-blue-500 px-3 py-2 bg-white dark:bg-gray-800 text-blue-500 dark:text-white">
                    <option value="">Select Platform</option>
                    <option value="binance">Binance</option>
                    <option value="bitget">Bitget</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-blue-500">
                    Bot
                  </label>
                  <select className="w-full rounded-lg border border-blue-500 px-3 py-2 bg-white dark:bg-gray-800 text-blue-500 dark:text-white">
                    <option value="">Select Bot</option>
                    <option value="spot">SPOT</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-blue-500">
                    Status
                  </label>
                  <select className="w-full rounded-lg border border-blue-500 px-3 py-2 bg-white dark:bg-gray-800 text-blue-500 dark:text-white">
                    <option value="">Select Status</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                  Submit
                </button>
              </div>
            </form>
          )}

          {/* ---- See All Coins ---- */}
          {activeTab === "See All Coins" && (
            <form className="flex flex-col md:flex-row md:items-end gap-4">
              <div>
                <label className="block mb-2 text-sm font-medium text-blue-500">
                  Bot
                </label>
                <select className="w-48 rounded-lg border border-blue-500 px-3 py-2 bg-white dark:bg-gray-800 text-blue-500 dark:text-white">
                  <option value="binance">Binance</option>
                  <option value="bitget">Bitget</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-blue-500">
                  Bot
                </label>
                <select className="w-48 rounded-lg border border-blue-500 px-3 py-2 bg-white dark:bg-gray-800 text-blue-500 dark:text-white">
                  <option value="spot">SPOT</option>
                </select>
              </div>

              <div>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                  Submit
                </button>
              </div>
            </form>
          )}

          {/* ---- Add Admin ---- */}
          {activeTab === "Add Admin" && (
            <form className="space-y-6">
              {/* First row: Email + Username */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 text-sm font-medium text-blue-500">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    className="w-full rounded-lg border border-blue-500 px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-blue-500">
                    UserName
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Username"
                    className="w-full rounded-lg border border-blue-500 px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                </div>
              </div>

              {/* Second row: Password + UserType + AccessType */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block mb-2 text-sm font-medium text-blue-500">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="w-full rounded-lg border border-blue-500 px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-blue-500">
                    User Type
                  </label>
                  <select className="w-full rounded-lg border border-blue-500 px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
                    <option value="">Select Type</option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-blue-500">
                    Access Type
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Access Type"
                    className="w-full rounded-lg border border-blue-500 px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                  Submit
                </button>
              </div>
            </form>
          )}

          {/* ---- Close Pending Spot Orders ---- */}
          {activeTab === "Close Pending Spot Orders" && (
            <div className="flex justify-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-3 bg-orange-400 text-white font-semibold rounded-lg hover:bg-orange-600 transition"
              >
                Close the pending SPOT Orders
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ---- Modal ---- */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-md w-full text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Sure! You want to close all the pending SPOT orders?
            </h2>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-600 transition"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  alert("Orders closed!");
                }}
                className="px-6 py-2 bg-red-700 text-white rounded-lg hover:bg-orange-600 transition"
              >
                Yes, Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CronSettings;
