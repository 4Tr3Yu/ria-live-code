interface RateCardProps {
  code: string;
  name: string;
  rate: number;
}

export function RateCard({ code, name, rate }: RateCardProps) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center flex flex-col gap-1">
      <span className="text-xs text-slate-400">{name}</span>
      <span className="text-lg font-bold">{code}</span>
      <span className="text-base text-indigo-300">{rate.toFixed(4)}</span>
    </div>
  );
}
