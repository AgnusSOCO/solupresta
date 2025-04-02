import React, { useState, useRef, type ReactElement } from 'react';
import { LOAN_LIMITS } from '../../utils/loanCalculator';

interface LoanAmountSelectorProps {
  onAmountChange?: (amount: number) => void;
  className?: string;
}

export function LoanAmountSelector({ onAmountChange, className = '' }: LoanAmountSelectorProps): ReactElement {
  const [amount, setAmount] = useState(LOAN_LIMITS.repara.min);
  const [selectedProgram, setSelectedProgram] = useState<'repara' | 'renueva'>('repara');
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  const limits = LOAN_LIMITS[selectedProgram];
  const minAmount = limits.min;
  const maxAmount = limits.max;
  const step = 1000;

  const handleAmountChange = (value: number) => {
    const newAmount = Math.min(Math.max(value, minAmount), maxAmount);
    const roundedAmount = Math.round(newAmount / step) * step;
    setAmount(roundedAmount);
    onAmountChange?.(roundedAmount);
  };

  const calculateProgress = () => {
    return ((amount - minAmount) / (maxAmount - minAmount)) * 100;
  };

  const monthlyPayment = (amount * limits.rate / 12).toFixed(2);

  const updateAmountFromPosition = (clientX: number) => {
    if (!sliderRef.current) return;
    
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.min(Math.max(x / rect.width, 0), 1);
    const value = minAmount + (maxAmount - minAmount) * percentage;
    handleAmountChange(value);
  };

  const handleSliderMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
    updateAmountFromPosition(e.clientX);
  };

  const handleSliderMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    updateAmountFromPosition(e.clientX);
  };

  const handleSliderMouseUp = () => {
    setIsDragging(false);
  };

  const handleSliderClick = (e: React.MouseEvent<HTMLDivElement>) => {
    updateAmountFromPosition(e.clientX);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (!isNaN(value)) {
      handleAmountChange(value);
    }
  };

  React.useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleSliderMouseMove);
      window.addEventListener('mouseup', handleSliderMouseUp);
      window.addEventListener('mouseleave', handleSliderMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleSliderMouseMove);
      window.removeEventListener('mouseup', handleSliderMouseUp);
      window.removeEventListener('mouseleave', handleSliderMouseUp);
    };
  }, [isDragging]);

  return (
    <div className={`loan-selector bg-white rounded-2xl p-6 shadow-xl ${className}`} role="group" aria-labelledby="loan-amount-label">
      <div className="mb-6">
        <h3 id="loan-amount-label" className="text-xl font-semibold text-primary-navy mb-2">
          ¿Cuánto necesitas?
        </h3>
        <div className="flex gap-4 mb-4">
          <button
            onClick={() => {
              setSelectedProgram('repara');
              handleAmountChange(LOAN_LIMITS.repara.min);
            }}
            className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
              selectedProgram === 'repara'
                ? 'bg-primary-cyan text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Mejoravit Repara
          </button>
          <button
            onClick={() => {
              setSelectedProgram('renueva');
              handleAmountChange(LOAN_LIMITS.renueva.min);
            }}
            className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
              selectedProgram === 'renueva'
                ? 'bg-primary-cyan text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Mejoravit Renueva
          </button>
        </div>
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
            onChange={handleInputChange}
            min={minAmount}
            max={maxAmount}
            step={step}
            className="w-32 px-3 py-2 text-right border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-cyan focus:border-transparent"
            aria-label="Monto del préstamo"
          />
        </div>
      </div>

      <div 
        ref={sliderRef}
        className="slider-container relative mb-8 cursor-pointer select-none" 
        onClick={handleSliderClick}
      >
        <div className="h-2 bg-gray-100 rounded-full">
          <div 
            className="absolute h-2 bg-primary-cyan rounded-full transition-all duration-200"
            style={{ width: `${calculateProgress()}%` }}
          />
        </div>
        <div 
          className="absolute w-6 h-6 bg-white border-4 border-primary-cyan rounded-full shadow-lg -mt-2 transition-all duration-200 hover:scale-110 cursor-grab active:cursor-grabbing"
          style={{ left: `${calculateProgress()}%`, transform: 'translateX(-50%)' }}
          onMouseDown={handleSliderMouseDown}
          onTouchStart={() => setIsDragging(true)}
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
            <p className="text-2xl font-bold text-primary-navy">{limits.maxTerm} años</p>
          </div>
        </div>
      </div>
    </div>
  );
}