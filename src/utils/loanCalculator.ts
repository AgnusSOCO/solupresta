export interface LoanCalculationResult {
  monthlyPayment: number;
  totalInterest: number;
  totalPayment: number;
  annualRate: number;
}

export function calculateLoan(principal: number, termMonths: number, program: 'repara' | 'renueva' = 'repara'): LoanCalculationResult {
  // Different rates based on program
  const annualRate = program === 'repara' ? 0.10 : 0.11; // 10% for Repara, 11% for Renueva
  const monthlyRate = annualRate / 12;
  
  const monthlyPayment = (principal * monthlyRate * Math.pow(1 + monthlyRate, termMonths)) / 
                        (Math.pow(1 + monthlyRate, termMonths) - 1);
  
  const totalPayment = monthlyPayment * termMonths;
  const totalInterest = totalPayment - principal;

  return {
    monthlyPayment: Math.round(monthlyPayment * 100) / 100,
    totalInterest: Math.round(totalInterest * 100) / 100,
    totalPayment: Math.round(totalPayment * 100) / 100,
    annualRate
  };
}

export const LOAN_LIMITS = {
  repara: {
    min: 9461.10, // 3 UMA monthly
    max: 37844.35, // 12 UMA monthly
    maxTerm: 5, // 5 years
    rate: 0.10, // 10%
    laborPercentage: 0.20, // 20% for labor costs
    regularizationPercentage: 0.30 // 30% for housing regularization
  },
  renueva: {
    min: 37844.35, // 12 UMA monthly
    max: 149485.19, // 47.4 UMA monthly
    maxTerm: 10, // 10 years
    rate: 0.11, // 11%
    laborPercentage: 0.20, // 20% for labor costs
    regularizationPercentage: 0.30 // 30% for housing regularization
  }
};