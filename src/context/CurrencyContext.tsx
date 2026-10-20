"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { CurrencyCode, Currency } from '@/types';
import { CURRENCIES } from '@/data/catalog';

interface CurrencyContextType {
  currency: Currency;
  currencyCode: CurrencyCode;
  setCurrencyCode: (code: CurrencyCode) => void;
  formatPrice: (amountUSD: number) => string;
}

const CurrencyContext = createContext<CurrencyContextType>({
  currency: CURRENCIES.USD,
  currencyCode: 'USD',
  setCurrencyCode: () => {},
  formatPrice: (amt) => `$${amt.toFixed(2)}`
});

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currencyCode, setCurrencyCodeState] = useState<CurrencyCode>('USD');

  useEffect(() => {
    const saved = localStorage.getItem('packmenn_currency');
    if (saved && CURRENCIES[saved]) {
      setCurrencyCodeState(saved as CurrencyCode);
    }
  }, []);

  const setCurrencyCode = (code: CurrencyCode) => {
    setCurrencyCodeState(code);
    localStorage.setItem('packmenn_currency', code);
  };

  const currency = CURRENCIES[currencyCode] || CURRENCIES.USD;

  const formatPrice = (amountUSD: number): string => {
    const converted = amountUSD * currency.exchangeRate;
    if (currency.code === 'AED') {
      return `${currency.symbol}${converted.toFixed(2)}`;
    }
    return `${currency.symbol}${converted.toFixed(2)}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, currencyCode, setCurrencyCode, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  return useContext(CurrencyContext);
}
