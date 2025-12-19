import type { ExchangeRates} from './types';

const API_BASE = 'https://api.frankfurter.app';

export async function fetchCurrencies(): Promise<Record<string, string>> {
  const response = await fetch(`${API_BASE}/currencies`);
  if (!response.ok) throw new Error('Failed to fetch currencies');
  return response.json();
}

export async function fetchLatestRates(base: string): Promise<ExchangeRates> {
  const response = await fetch(`${API_BASE}/latest?from=${base}`);
  if (!response.ok) throw new Error('Failed to fetch rates');
  return response.json();
}

export async function fetchConversion(
  from: string,
  to: string,
  amount: number
): Promise<any> {
  // TODO: Implement this function with correct typing
  throw new Error('Not implemented');
}
