import React from "react";
import { Settings } from "lucide-react"; // Importing Settings icon from lucide-react

type BotInfo = {
  name: string;
  status: string;
  pnl: number;
  trades: number;
  balance: number;
  assets?: { symbol: string; amount: number }[];
};

const bots: BotInfo[] = [
  {
    name: "Binance Bot",
    status: "Inactive",
    pnl: -16.68,
    trades: 0,
    balance: 83.31,
    assets: [
      { symbol: "USDT", amount: 78.0192 },
      { symbol: "FET", amount: 1.2863 },
      { symbol: "FIDA", amount: 5.7282 },
      { symbol: "ZK", amount: 6.4401 },
      { symbol: "POL", amount: 2.4595 },
    ],
  },
  {
    name: "Bitget Bot",
    status: "Inactive",
    pnl: -62.06,
    trades: 0,
    balance: 37.93,
    assets: [
      { symbol: "USDT", amount: 33.011 },
      { symbol: "XLM", amount: 2.3681 },
      { symbol: "AUDIO", amount: 3.6265 },
      { symbol: "FET", amount: 1.877 },
    ],
  },
  {
    name: "Hyperliquid Bot",
    status: "Inactive",
    pnl: 0,
    trades: 0,
    balance: 0,
    assets: [],
  },
];

const TradingBot: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-900 shadow-md rounded-xl p-6 w-full max-w-6xl mx-auto">
        <h2 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-2 p-4">
          Manage your automated trading strategies
        </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {bots.map((bot) => (
          <div
            key={bot.name}
            className="border border-blue-500 dark:border-blue-500 rounded-md p-4 flex flex-col justify-between"
          >
            {/* Bot Header */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-blue-500 dark:text-blue-500">
                {bot.name}{" "}
                <span className="text-sm text-red-500 font-medium">
                  ({bot.status})
                </span>
              </h3>
            </div>

            {/* Bot Details */}
            <div className="space-y-2 text-sm text-gray-900 dark:text-gray-300 mb-4">
              <p>
                <span className="font-medium">P&amp;L:</span>{" "}
                <span
                  className={
                    bot.pnl < 0
                      ? "text-red-500 font-semibold"
                      : "text-green-500 font-semibold"
                  }
                >
                  {bot.pnl}
                </span>
              </p>
              <p>
                <span className="font-medium">Trades:</span>{" "}
                <span>{bot.trades}</span>
              </p>
              <p>
                <span className="font-medium">Balance:</span>{" "}
                <span className = " text-blue-500 font-semibold text-xl">${bot.balance.toFixed(2)}</span>
              </p>
            </div>

            {/* Assets section */}
            <div className="mt-2 mb-4">
              <h4 className="text-sm font-semibold text-blue-500 dark:text-blue-500 mb-2">
                Assets
              </h4>
              {bot.assets && bot.assets.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {bot.assets.map((asset) => (
                    <div
                      key={asset.symbol}
                      className="bg-blue-400 text-white dark:bg-blue-500 text-sm text-white- dark:text-white px-3 py-1 rounded-full border border-blue-400 dark:border-blue-400"
                    >
                      <span className="font-medium">{asset.symbol}</span>:{" "}
                      {asset.amount}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                  No balances available
                </p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between mt-auto pt-2">
              <button className="px-4 py-1.5 text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-600 rounded-md">
                Pause
              </button>
              <button className="p-2 rounded-md border border-gray-300 dark:border-white text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                <Settings className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TradingBot;
