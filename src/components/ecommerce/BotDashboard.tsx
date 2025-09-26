import { useState } from "react";

const bots = [
  {
    id: "binance",
    name: "Binance Spot Bot",
    data: {
      capital: "100",
      balance: "83.3",
      change: "-16.70%",
      status: true,
    },
  },
  {
    id: "bidget",
    name: "Bidget Spot Bot",
    data: {
      capital: "100",
      balance: "37.88",
      change: "-62.12%",
      status: false,
    },
  },
  {
    id: "hyperliquid",
    name: "Hyperliquid Spot Bot",
    data: {
      capital: "0",
      balance: "0",
      change: "0%",
      status: true,
    },
  },
];

export default function BotDashboard() {
  const [selectedBotId, setSelectedBotId] = useState<string>("binance");

  const [botStates, setBotStates] = useState(
    bots.reduce((acc, bot) => {
      acc[bot.id] = bot.data.status;
      return acc;
    }, {} as Record<string, boolean>)
  );

  const selectedBot = bots.find((bot) => bot.id === selectedBotId);

  const toggleStatus = (id: string) => {
    setBotStates((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="space-y-6">
      {/* Bot Selector Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {bots.map((bot) => {
          const isSelected = selectedBotId === bot.id;
          return (
            <div
              key={bot.id}
              onClick={() => setSelectedBotId(bot.id)}
              className={`cursor-pointer rounded-xl border h-12 w-full flex items-center justify-center text-center transition hover:shadow-md ${
                isSelected
                  ? "border-blue-500 bg-blue-500"
                  : "border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]"
              }`}
            >
              <h3
                className={`text-sm font-medium ${
                  isSelected ? "text-white" : "text-black dark:text-blue-400"
                }`}
              >
                {bot.name}
              </h3>
            </div>
          );
        })}
      </div>

      {/* Bot Info Cards */}
      {/* Bot Info Cards */}
{selectedBot && (
  <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
    <div className="rounded-2xl border border-blue-500 bg-white p-5 dark:border-blue-400 dark:bg-white/[0.03]">
      <p className="text-black dark:text-white font-semibold text-sm">
        Assigned Capital
      </p>
      <p className="text-blue-500 font-semibold text-lg">
        {selectedBot.data.capital}
      </p>
    </div>

    <div className="rounded-2xl border border-blue-500 bg-white p-5 dark:border-blue-400 dark:bg-white/[0.03]">
      <p className="text-black dark:text-white font-semibold text-sm">
        Current Balance
      </p>
      <p className="text-blue-500 font-semibold text-lg">
        {selectedBot.data.balance}
      </p>
    </div>

    <div className="rounded-2xl border border-blue-500 bg-white p-5 dark:border-blue-400 dark:bg-white/[0.03]">
      <p className="text-black dark:text-white font-semibold text-sm">
        % Change (PnL)
      </p>
      <p
        className={`font-semibold text-lg ${
          selectedBot.data.change.startsWith("-")
            ? "text-red-500"
            : "text-green-500"
        }`}
      >
        {selectedBot.data.change}
      </p>
    </div>

    {/* Status or Add Bot */}
    <div className="rounded-2xl border border-blue-500 bg-white p-5 flex items-center justify-between dark:border-blue-400 dark:bg-white/[0.03]">
      <p className="text-gray-500 dark:text-white text-sm mb-2">Status</p>

      {selectedBot.id === "hyperliquid" ? (
        <button
          className="px-4 py-2 text-sm font-semibold text-white rounded-lg bg-gradient-to-r from-blue-500 to-sky-300 hover:opacity-90 transition"
          onClick={() => alert("Add Bot clicked")}
        >
          Add Bot
        </button>
      ) : (
        <label className="inline-flex items-center cursor-pointer ml-auto">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={botStates[selectedBot.id]}
            onChange={() => toggleStatus(selectedBot.id)}
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-500 relative transition-all">
            <div className="absolute top-0.5 left-0.5 bg-white w-5 h-5 rounded-full shadow-md transform transition peer-checked:translate-x-full"></div>
          </div>
          <span className="ml-3 text-sm text-gray-700 dark:text-gray-300">
            {botStates[selectedBot.id] ? "On" : "Off"}
          </span>
        </label>
      )}
    </div>
  </div>
)}

    </div>
  );
}
