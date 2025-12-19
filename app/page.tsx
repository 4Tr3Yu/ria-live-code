import { CurrencyConverter } from "@/components/CurrencyConverter";
import { RatesOverview } from "@/components/RatesOverview";

export default function Home() {
  return (
    <main className="max-w-225  mx-auto">
      <header className="mb-10">
        <h1 className="text-2xl font-semibold mb-2">Currency Exchange</h1>
        <p className="text-slate-400 text-sm">Real-time exchange rates</p>
      </header>

      <div className="flex flex-col gap-10">
        <CurrencyConverter />
        <RatesOverview />
      </div>
    </main>
  );
}
