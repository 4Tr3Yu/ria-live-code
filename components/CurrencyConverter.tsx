"use client";

import { useState, useEffect } from "react";
import { fetchCurrencies } from "@/lib/api";

export function CurrencyConverter() {
  const [currencies, setCurrencies] = useState<Record<string, string>>({});
  const [amount, setAmount] = useState<string>("1000");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [result, setResult] = useState<number | null>(null);
  const [rate, setRate] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch available currencies
  useEffect(() => {
    fetchCurrencies().then(setCurrencies).catch(console.error);
  }, []);

  // TODO: Implement conversion logic

  const handleSwap = () => {
    // TODO: Implement swap functionality
  };

  return (
    <section className="bg-white/5 border border-white/10 rounded-2xl p-7 mb-6">
      <h2 className="text-sm uppercase tracking-wider text-slate-400 mb-5">
        Currency Converter
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-4 items-end">
        <div className="flex flex-col gap-2">
          <label htmlFor="amount" className="text-xs text-slate-400">
            You send
          </label>
          <div className="flex bg-white/10 rounded-xl overflow-hidden border border-white/10">
            <input
              id="amount"
              type="text"
              placeholder="Enter amount"
              className="flex-1 p-4 bg-transparent border-none text-white text-lg outline-none w-full"
            />
            <select className="p-4 bg-white/5 border-none border-l border-white/10 text-white text-sm font-semibold cursor-pointer outline-none">
              {Object.entries(currencies).map(([code, name]) => (
                <option key={code} value={code} className="bg-slate-800">
                  {code}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          className="w-12 h-12 rounded-full bg-indigo-500 border-none text-white text-xl cursor-pointer mb-1 mx-auto sm:mx-0 rotate-90 sm:rotate-0 hover:bg-indigo-600 transition-colors"
          onClick={handleSwap}
          aria-label="Swap currencies"
        >
          ⇄
        </button>

        <div className="flex flex-col gap-2">
          <label htmlFor="result" className="text-xs text-slate-400">
            They receive
          </label>
          <div className="flex bg-white/10 rounded-xl overflow-hidden border border-white/10">
            <input
              id="result"
              type="text"
              value={result !== null ? result.toFixed(2) : "—"}
              readOnly
              className="flex-1 p-4 bg-transparent border-none text-indigo-300 text-lg outline-none w-full"
            />
            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className="p-4 bg-white/5 border-none border-l border-white/10 text-white text-sm font-semibold cursor-pointer outline-none"
            >
              {Object.entries(currencies).map(([code, name]) => (
                <option key={code} value={code} className="bg-slate-800">
                  {code}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      {/* // TODO: Loading and error states */}
    </section>
  );
}
