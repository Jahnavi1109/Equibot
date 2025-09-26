import React, { useState } from "react";

type ControlKey =
  | "REGISTER"
  | "LOGIN"
  | "ALL_BOTS"
  | "AMM"
  | "BINANCE_AMM"
  | "BITGET_AMM"
  | "FUTURES"
  | "BINANCE_FUTURES"
  | "BITGET_FUTURES";

interface ControlItem {
  label: string;
  enabledByDefault: boolean;
}

const controlItems: Record<ControlKey, ControlItem> = {
  REGISTER: { label: "REGISTER", enabledByDefault: false },
  LOGIN: { label: "LOGIN", enabledByDefault: true },
  ALL_BOTS: { label: "ALL_BOTS", enabledByDefault: true },
  AMM: { label: "AMM", enabledByDefault: true },
  BINANCE_AMM: { label: "BINANCE_AMM", enabledByDefault: true },
  BITGET_AMM: { label: "BITGET_AMM", enabledByDefault: true },
  FUTURES: { label: "FUTURES", enabledByDefault: false },
  BINANCE_FUTURES: { label: "BINANCE_FUTURES", enabledByDefault: false },
  BITGET_FUTURES: { label: "BITGET_FUTURES", enabledByDefault: false },
};

const AdminControls: React.FC = () => {
  // state: which controls are turned on/off
  const [states, setStates] = useState<Record<ControlKey, boolean>>(() => {
    const init: Record<ControlKey, boolean> = {} as any;
    (Object.keys(controlItems) as ControlKey[]).forEach((key) => {
      init[key] = controlItems[key].enabledByDefault;
    });
    return init;
  });

  const toggleControl = (key: ControlKey) => {
    setStates((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="bg-white dark:bg-gray-900 border border-blue-500 dark:border-blue-500 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
          Admin Controls
        </h2>

        <div className="space-y-4">
          {(Object.keys(controlItems) as ControlKey[]).map((key) => {   
            const item = controlItems[key];
            const isEnabled = states[key];
            return (
              <div
                key={key}
                className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-2"
              >
                <div>
                  <div className="font-semibold text-blue-500 dark:text-blue-500">
                    {item.label}
                  </div>
                  <div
                    className={`text-sm ${
                      isEnabled ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    Currently {isEnabled ? "enabled" : "disabled"}
                  </div>
                </div>

                <div>
                  {/* Toggle switch */}
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={isEnabled}
                      onChange={() => toggleControl(key)}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none dark:bg-gray-700 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-500 rounded-full peer peer-checked:after:translate-x-5 peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-500"></div>
                  </label>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminControls;
