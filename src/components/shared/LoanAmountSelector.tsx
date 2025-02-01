import { useState, type ReactElement } from 'react';

interface LoanAmountSelectorProps {
  onAmountChange?: (amount: number) => void;
  className?: string;
}

export function LoanAmountSelector({ onAmountChange, className = '' }: LoanAmountSelectorProps): ReactElement {
  const [amount, setAmount] = useState(5000);
  const minAmount = 5000;
  const maxAmount = 500000;
  const step = 1000;

  const handleAmountChange = (value: number) => {
    const newAmount = Math.min(Math.max(value, minAmount), maxAmount);
    setAmount(newAmount);
    onAmountChange?.(newAmount);
  };

  const calculateProgress = () => {
    return ((amount - minAmount) / (maxAmount - minAmount)) * 100;
  };

  const monthlyPayment = (amount * 0.015).toFixed(2); // Example calculation - 1.5% monthly rate

  return (
    <div className={`loan-selector bg-white rounded-2xl p-6 shadow-xl ${className}`} role="group" aria-labelledby="loan-amount-label">
      <div className="mb-6">
        <h3 id="loan-amount-label" className="text-xl font-semibold text-primary-navy mb-2">
          ¿Cuánto necesitas?
        </h3>
        <p className="text-gray-600 text-sm">
          Desliza para seleccionar el monto deseado
        </p>
      </div>

      <div className="amount-display mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold text-primary-cyan">
              ${amount.toLocaleString()}
            </span>
            <span className="text-gray-500">MXN</span>
          </div>
          <input
            type="number"
            value={amount}
            onChange={(e) => handleAmountChange(Number(e.target.value))}
            min={minAmount}
            max={maxAmount}
            step={step}
            className="w-32 px-3 py-2 text-right border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-cyan focus:border-transparent"
            aria-label="Monto del préstamo"
          />
        </div>
      </div>

      <div className="slider-container relative mb-8">
        <div className="h-2 bg-gray-100 rounded-full">
          <div 
            className="absolute h-2 bg-primary-cyan rounded-full transition-all duration-200"
            style={{ width: `${calculateProgress()}%` }}
          />
        </div>
        <input
          type="range"
          value={amount}
          onChange={(e) => handleAmountChange(Number(e.target.value))}
          min={minAmount}
          max={maxAmount}
          step={step}
          className="absolute inset-0 w-full h-2 opacity-0 cursor-pointer"
          aria-label="Ajustar monto del préstamo"
        />
        <div 
          className="absolute w-6 h-6 bg-white border-4 border-primary-cyan rounded-full shadow-lg -mt-2 transition-all duration-200 hover:scale-110"
          style={{ left: `${calculateProgress()}%`, transform: 'translateX(-50%)' }}
        />
      </div>

      <div className="amount-range flex justify-between text-sm text-gray-500 mb-8">
        <span>${minAmount.toLocaleString()}</span>
        <span>${maxAmount.toLocaleString()}</span>
      </div>

      <div className="loan-details bg-gray-50 rounded-xl p-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-gray-600 mb-1">Pago mensual estimado</p>
            <p className="text-2xl font-bold text-primary-navy">${monthlyPayment}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Plazo sugerido</p>
            <p className="text-2xl font-bold text-primary-navy">36 meses</p>
          </div>
        </div>
      </div>
    </div>
  );
}