"use client";

import { useState, useEffect } from "react";
import { fetchLatestRates, fetchCurrencies } from "@/lib/api";
import { RateCard } from "./RateCard";

const POPULAR_CURRENCIES = [
  "EUR",
  "GBP",
  "JPY",
  "CHF",
  "CAD",
  "AUD",
  "MXN",
  "INR",
  "PHP",
  "CNY",
];

export function RatesOverview() {
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [rates, setRates] = useState<Record<string, number>>({});
  const [currencies, setCurrencies] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCurrencies()
      .then(setCurrencies)
      .catch((err) => setError(err.message));
  }, []);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetchLatestRates(baseCurrency)
      .then((data) => {
        setRates(data.rates);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  const displayedRates = POPULAR_CURRENCIES.filter(
    (code) => code !== baseCurrency && rates[code]
  ).map((code) => ({
    code,
    name: currencies[code] || code,
    rate: rates[code],
  }));

  return (
    <section className="bg-white/5 border border-white/10 rounded-2xl p-7 mb-6">
      <div className="flex justify-between items-center flex-col sm:flex-row gap-3 sm:gap-0 mb-3">
        <h2 className="text-sm uppercase tracking-wider text-slate-400">
          Exchange Rates
        </h2>
        <div className="flex items-center gap-2.5 ">
          <label htmlFor="base-currency" className="text-sm text-slate-400">
            Base currency:
          </label>
          <select
            id="base-currency"
            value={baseCurrency}
            onChange={(e) => setBaseCurrency(e.target.value)}
            className="px-4 py-2.5 bg-white/10 border border-white/10 rounded-lg text-white text-sm cursor-pointer outline-none"
          >
            {Object.entries(currencies).map(([code, name]) => (
              <option key={code} value={code} className="bg-slate-800">
                {code} - {name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {loading && (
        <div className="text-center text-slate-400 py-5">Loading rates...</div>
      )}
      {error && (
        <div className="text-center text-red-400 py-5">Error: {error}</div>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-3">
          {displayedRates.map((currency) => (
            <RateCard
              key={currency.code}
              code={currency.code}
              name={currency.name}
              rate={currency.rate}
            />
          ))}
        </div>
      )}
    </section>
  );
}
