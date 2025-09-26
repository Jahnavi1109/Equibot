import React, { useState, useEffect } from "react";
import { Pencil, Trash2 } from "lucide-react";

type PlatformTab = "Binance" | "Bitget";

interface Coin {
  pair: string;
  pricePrecision: string;
  quantityPrecision: string;
  targetPercent: string;
  divisible: string;
  tradeAmount: string;
  platform: string;
  bot: string;
}

const STORAGE_KEY = "coins_data";

const AddCoins: React.FC = () => {
  const [activeTab, setActiveTab] = useState<PlatformTab>("Binance");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [coins, setCoins] = useState<Coin[]>([]);
  const [form, setForm] = useState<Coin>({
    pair: "",
    pricePrecision: "",
    quantityPrecision: "",
    targetPercent: "",
    divisible: "",
    tradeAmount: "",
    platform: "",
    bot: "AMM",
  });
  const [selectedBot, setSelectedBot] = useState("AMM");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) setCoins(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(coins));
  }, [coins]);

  const openModal = (index: number | null = null) => {
    setEditIndex(index);
    if (index !== null) setForm(coins[index]);
    else
      setForm({
        pair: "",
        pricePrecision: "",
        quantityPrecision: "",
        targetPercent: "",
        divisible: "",
        tradeAmount: "",
        platform: "",
        bot: selectedBot,
      });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditIndex(null);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleBotChangeTop = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBot(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updated = [...coins];
      updated[editIndex] = form;
      setCoins(updated);
    } else {
      setCoins((prev) => [...prev, form]);
    }
    closeModal();
  };

  const handleDelete = (index: number) => {
    setCoins((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-7xl mx-auto p-1">
      <div className="bg-white dark:bg-gray-900 border border-blue-500 rounded-lg shadow-md">
        {/* Tabs */}
        {/* Top section: Tabs on left, Bot select + Add Coin on right */}
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 border-b border-blue-500 gap-2 sm:gap-0">
  {/* Tabs on left */}
  <div className="flex space-x-2 sm:space-x-4">
    {(["Binance", "Bitget"] as PlatformTab[]).map((tab) => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`px-4 py-2 rounded-t-lg font-medium ${
          activeTab === tab
            ? "bg-blue-500 text-white"
            : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-white"
        }`}
      >
        {tab}
      </button>
    ))}
  </div>

  {/* AMM select + Add Coin button on right */}
  <div className="flex flex-row space-x-2 mt-2 sm:mt-0">
    <select
      value={selectedBot}
      onChange={handleBotChangeTop}
      className="border dark:border-blue-500 px-3 py-2 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
    >
      <option value="AMM">AMM</option>
      
    </select>
    <button
      onClick={() => openModal()}
      className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md"
    >
      Add Coin
    </button>
  </div>
</div>


        {/* Table */}
        {/* Table Section */}
<div className="p-4 overflow-x-auto">
  {/* Dynamic Platform Heading */}
  <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
    {activeTab} Coins
  </h2>

  <table className="w-full border-collapse border border-blue-500 text-sm">
    <thead>
      <tr className="bg-gray-100 dark:bg-gray-800">
        {[
          "Pair",
          "Price Precision",
          "Quantity Precision",
          "Target %",
          "Divisible",
          "Trade Amount",
          "Platform",
          "Bot",
          "Action",
        ].map((heading) => (
          <th
            key={heading}
            className="border border-blue-500 px-3 py-2 text-gray-700 dark:text-white"
          >
            {heading}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {coins
        .filter((c) => c.platform === activeTab.toUpperCase())
        .map((coin, index) => (
          <tr
            key={index}
            className="hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-900 dark:text-white"
          >
            <td className="border border-blue-500 px-3 py-2">{coin.pair}</td>
            <td className="border border-blue-500 px-3 py-2">{coin.pricePrecision}</td>
            <td className="border border-blue-500 px-3 py-2">{coin.quantityPrecision}</td>
            <td className="border border-blue-500 px-3 py-2">{coin.targetPercent}</td>
            <td className="border border-blue-500 px-3 py-2">{coin.divisible}</td>
            <td className="border border-blue-500 px-3 py-2">{coin.tradeAmount}</td>
            <td className="border border-blue-500 px-3 py-2">{coin.platform}</td>
            <td className="border border-blue-500 px-3 py-2">{coin.bot}</td>
            <td className="border border-blue-500 px-3 py-2 flex space-x-2 justify-center">
              <button
                onClick={() => openModal(index)}
                className="text-blue-600 hover:text-blue-800"
              >
                <Pencil size={18} />
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="text-red-600 hover:text-red-800"
              >
                <Trash2 size={18} />
              </button>
            </td>
          </tr>
        ))}
      {coins.filter((c) => c.platform === activeTab.toUpperCase()).length === 0 && (
        <tr>
          <td
            colSpan={9}
            className="text-center text-gray-500 dark:text-white py-4 border border-blue-500"
          >
            No coins added yet
          </td>
        </tr>
      )}
    </tbody>
  </table>
</div>

      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent bg-opacity-10">
          <div className="bg-white dark:bg-gray-900 dark:text-white border border-blue-500 w-full max-w-xl p-6 rounded-lg shadow-lg relative">
            <button
              onClick={closeModal}
              className="absolute top-3 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-white"
            >
              ✕
            </button>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
              {editIndex !== null ? "Edit Coin" : "Add Coin"}
            </h3>
            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
              {/* Input fields */}
              <div>
                <label className="block mb-1 text-gray-700 dark:text-white">Pair:</label>
                <input
                  type="text"
                  name="pair"
                  value={form.pair}
                  onChange={handleChange}
                  placeholder="Enter Pair"
                  className="border dark:border-blue-500 px-3 py-2 rounded w-full text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-50"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-700 dark:text-white">Price Precision:</label>
                <input
                  type="text"
                  name="pricePrecision"
                  value={form.pricePrecision}
                  onChange={handleChange}
                  placeholder="Enter Price Precision"
                  className="border dark:border-blue-500 px-3 py-2 rounded w-full text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-50"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-700 dark:text-white">Quantity Precision:</label>
                <input
                  type="text"
                  name="quantityPrecision"
                  value={form.quantityPrecision}
                  onChange={handleChange}
                  placeholder="Enter Quantity Precision"
                  className="border dark:border-blue-500 px-3 py-2 rounded w-full text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-50"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-700 dark:text-white">Target Percent:</label>
                <input
                  type="text"
                  name="targetPercent"
                  value={form.targetPercent}
                  onChange={handleChange}
                  placeholder="Enter Target Percent"
                  className="border dark:border-blue-500 px-3 py-2 rounded w-full text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-50"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-700 dark:text-white">Divisible:</label>
                <input
                  type="text"
                  name="divisible"
                  value={form.divisible}
                  onChange={handleChange}
                  placeholder="Enter Divisible"
                  className="border dark:border-blue-500 px-3 py-2 rounded w-full text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-50"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-700 dark:text-white">Trade Amount:</label>
                <input
                  type="text"
                  name="tradeAmount"
                  value={form.tradeAmount}
                  onChange={handleChange}
                  placeholder="Enter Trade Amount"
                  className="border dark:border-blue-500 px-3 py-2 rounded w-full text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-50"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-700 dark:text-white ">Platform:</label>
                <select
                  name="platform"
                  value={form.platform}
                  onChange={handleChange}
                  className="border dark:border-blue-500 px-3 py-2 rounded w-full text-gray-900 dark:text-white "
                  required
                >
                  <option value="" className="dark:bg-gray-900 dark:text-blue-500">-- Please select --</option>
                  <option value="BINANCE" className="dark:bg-gray-900 dark:text-white">BINANCE</option>
                  <option value="BITGET" className="dark:bg-gray-900 dark:text-white">BITGET</option>
                </select>
              </div>
              <div>
                <label className="block mb-1 text-gray-700 dark:text-white">Bot:</label>
                <select
                  name="bot"
                  value={form.bot}
                  onChange={handleChange}
                  className="border dark:border-blue-500 px-3 py-2 rounded w-full text-gray-900 dark:text-white"
                  required
                >
                  <option value="" className="dark:bg-gray-900 dark:text-blue-500">-- Please select --</option>
                  <option value="AMM" className="dark:bg-gray-900 dark:text-blue-500">AMM</option>
                  <option value="BotA" className="dark:bg-gray-900 dark:text-blue-500">Bot A</option>
                  <option value="BotB" className="dark:bg-gray-900 dark:text-blue-500">Bot B</option>
                </select>
              </div>

              {/* Cancel + Add buttons */}
              <div className="col-span-2 flex justify-end space-x-2 mt-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded text-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm"
                >
                  {editIndex !== null ? "Update" : "Add"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddCoins;







