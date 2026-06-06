import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Calculator, Check } from "lucide-react"

type LoanType = "gold" | "personal" | "home"

export default function EmiCalculator() {
  const [loanType, setLoanType] = useState<LoanType>("gold")
  const [amount, setAmount] = useState(200000) // 2,00,000
  const [interestRate, setInterestRate] = useState(9.5) // 9.5%
  const [tenure, setTenure] = useState(12) // 12 months

  // Handle preset defaults when switching loan type
  useEffect(() => {
    if (loanType === "gold") {
      setAmount(200000)
      setInterestRate(8.9)
      setTenure(12) // 12 months
    } else if (loanType === "personal") {
      setAmount(500000)
      setInterestRate(11.5)
      setTenure(60) // 60 months (5 years)
    } else if (loanType === "home") {
      setAmount(3000000)
      setInterestRate(8.45)
      setTenure(240) // 240 months (20 years)
    }
  }, [loanType])

  // Calculation formulas
  const calculateEMI = () => {
    const P = amount
    const r = (interestRate / 12) / 100
    const n = tenure
    
    if (r === 0) return (P / n).toFixed(0)
    
    const emi = P * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1)
    return isNaN(emi) || !isFinite(emi) ? "0" : emi.toFixed(0)
  }

  const emiVal = Number(calculateEMI())
  const totalPayment = emiVal * tenure
  const totalInterest = totalPayment - amount

  const principalPercentage = (amount / totalPayment) * 100
  const interestPercentage = (totalInterest / totalPayment) * 100

  // Format helper for Indian Rupees
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    }).format(val)
  }

  return (
    <section className="py-20 bg-white" id="loans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#0F7EC3] font-bold text-xs uppercase tracking-widest bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100 flex items-center gap-1.5 w-fit mx-auto">
            <Calculator className="size-3.5 text-[#0F7EC3]" /> Calculator
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-4 leading-tight">
            Estimate your loan repayments instantly
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-3 font-normal leading-relaxed">
            Choose a loan category and adjust sliders to calculate your monthly EMI installment, total interest payable, and repayment schedule.
          </p>
        </div>

        {/* Calculator Body Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Inputs Column */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-100 rounded-3xl p-6 md:p-8 space-y-8 flex flex-col justify-between">
            {/* Loan Type Tabs */}
            <div className="space-y-3">
              <label className="block text-slate-700 font-extrabold text-xs uppercase tracking-wider">Select Loan Type</label>
              <div className="grid grid-cols-3 gap-2 bg-slate-200/60 p-1.5 rounded-xl border border-slate-200">
                {(["gold", "personal", "home"] as LoanType[]).map((type) => (
                  <button
                    key={type}
                    onClick={() => setLoanType(type)}
                    className={`py-2.5 rounded-lg text-xs font-bold capitalize transition-all cursor-pointer ${
                      loanType === type 
                        ? "bg-white text-[#0F7EC3] shadow-md border border-slate-100" 
                        : "text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    {type} Loan
                  </button>
                ))}
              </div>
            </div>

            {/* Slider 1: Loan Amount */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-slate-600 font-bold text-xs uppercase tracking-wider flex items-center gap-1">
                  Loan Amount
                </span>
                <span className="text-slate-900 font-extrabold text-sm sm:text-base font-mono">
                  {formatCurrency(amount)}
                </span>
              </div>
              <input 
                type="range" 
                min={loanType === "gold" ? 10000 : loanType === "personal" ? 50000 : 500000}
                max={loanType === "gold" ? 2500000 : loanType === "personal" ? 2500000 : 15000000}
                step={loanType === "gold" ? 5000 : loanType === "personal" ? 10000 : 50000}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0F7EC3]"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-semibold font-mono">
                <span>Min: {formatCurrency(loanType === "gold" ? 10000 : loanType === "personal" ? 50000 : 500000)}</span>
                <span>Max: {formatCurrency(loanType === "gold" ? 2500000 : loanType === "personal" ? 2500000 : 15000000)}</span>
              </div>
            </div>

            {/* Slider 2: Interest Rate */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-slate-600 font-bold text-xs uppercase tracking-wider flex items-center gap-1">
                  Interest Rate
                </span>
                <span className="text-slate-900 font-extrabold text-sm sm:text-base font-mono">
                  {interestRate}% p.a.
                </span>
              </div>
              <input 
                type="range" 
                min="5"
                max="18"
                step="0.05"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0F7EC3]"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-semibold font-mono">
                <span>Min: 5%</span>
                <span>Max: 18%</span>
              </div>
            </div>

            {/* Slider 3: Tenure */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-slate-600 font-bold text-xs uppercase tracking-wider">
                  Tenure / Period
                </span>
                <span className="text-slate-900 font-extrabold text-sm sm:text-base font-mono">
                  {tenure} Months ({Math.round(tenure / 12 * 10) / 10} yrs)
                </span>
              </div>
              <input 
                type="range" 
                min="3"
                max={loanType === "home" ? 360 : 84}
                step="1"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0F7EC3]"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-semibold font-mono">
                <span>Min: 3 months</span>
                <span>Max: {loanType === "home" ? "30 years (360 mo)" : "7 years (84 mo)"}</span>
              </div>
            </div>

            {/* Features checkmarks */}
            <div className="pt-4 border-t border-slate-200 grid grid-cols-2 gap-3 text-xs text-slate-500 font-semibold">
              <div className="flex items-center gap-1.5"><Check className="size-4 text-emerald-500" /> Minimum Documentation</div>
              <div className="flex items-center gap-1.5"><Check className="size-4 text-emerald-500" /> Secure Storage (Gold)</div>
              <div className="flex items-center gap-1.5"><Check className="size-4 text-emerald-500" /> Zero Hidden Charges</div>
              <div className="flex items-center gap-1.5"><Check className="size-4 text-emerald-500" /> Easy Pre-payment options</div>
            </div>

          </div>

          {/* Outputs Column */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            
            {/* Monthly EMI Result Box */}
            <div className="bg-[#0b1623] rounded-3xl p-8 text-white flex-1 flex flex-col justify-between shadow-xl relative overflow-hidden">
              {/* Background gradient blur */}
              <div className="absolute -right-10 -top-10 size-40 bg-sky-500/10 rounded-full filter blur-xl" />
              
              <div className="space-y-6 relative z-10">
                <span className="text-slate-400 font-bold text-xs uppercase tracking-widest block">Your Estimated Monthly Payment</span>
                <div className="space-y-1">
                  <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-mono">
                    {formatCurrency(emiVal)}
                  </div>
                  <span className="text-xs text-sky-400 font-semibold block">EMI Installment / Month</span>
                </div>
              </div>

              {/* Graphical representation bar */}
              <div className="space-y-4 pt-8 border-t border-slate-800 relative z-10">
                <span className="text-slate-400 font-bold text-xs uppercase tracking-wider block">Principal vs Interest Breakdown</span>
                
                {/* Visual Bar */}
                <div className="h-3.5 bg-slate-900 rounded-full overflow-hidden flex">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${principalPercentage}%` }}
                    transition={{ duration: 0.5 }}
                    className="h-full bg-sky-500" 
                    title={`Principal: ${principalPercentage.toFixed(1)}%`}
                  />
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${interestPercentage}%` }}
                    transition={{ duration: 0.5 }}
                    className="h-full bg-amber-400" 
                    title={`Interest: ${interestPercentage.toFixed(1)}%`}
                  />
                </div>

                {/* Details grid */}
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <span className="size-2.5 rounded-full bg-sky-500" />
                      <span>Principal Loan</span>
                    </div>
                    <span className="font-extrabold text-white font-mono block pl-4">{formatCurrency(amount)}</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <span className="size-2.5 rounded-full bg-amber-400" />
                      <span>Total Interest</span>
                    </div>
                    <span className="font-extrabold text-white font-mono block pl-4">{formatCurrency(totalInterest)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Total Payment Result Box */}
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 flex flex-col justify-between">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-500 font-bold uppercase tracking-wider">Total Repayment Amount</span>
                <span className="text-[10px] text-[#0F7EC3] bg-sky-50 border border-sky-100 font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Principal + Interest
                </span>
              </div>
              <div className="text-2xl font-extrabold text-slate-800 font-mono mt-3">
                {formatCurrency(totalPayment)}
              </div>
              <p className="text-[10px] text-slate-400 mt-2 font-medium">
                *Interest calculations are indicative. Actual rates are subject to verification and bank sanction protocols.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
