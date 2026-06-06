import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, CheckCircle2, ShieldCheck, Loader2 } from "lucide-react"

interface LoanApplyModalProps {
  isOpen: boolean
  onClose: () => void
  loanType: string
}

export default function LoanApplyModal({ isOpen, onClose, loanType }: LoanApplyModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    amount: "",
    income: "",
    agree: false
  })
  
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle")
  const [applicationId, setApplicationId] = useState("")

  // Reset states on opening/closing
  useEffect(() => {
    if (isOpen) {
      setStatus("idle")
      setFormData({
        name: "",
        phone: "",
        email: "",
        amount: "",
        income: "",
        agree: false
      })
      setErrors({})
    }
  }, [isOpen])

  const validate = () => {
    const tempErrors: Record<string, string> = {}
    if (!formData.name.trim()) tempErrors.name = "Name is required"
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required"
    } else if (!/^\d{10}$/.test(formData.phone.trim())) {
      tempErrors.phone = "Please enter a valid 10-digit mobile number"
    }
    
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      tempErrors.email = "Please enter a valid email address"
    }

    if (!formData.amount.trim()) {
      tempErrors.amount = "Desired loan amount is required"
    } else if (isNaN(Number(formData.amount)) || Number(formData.amount) <= 0) {
      tempErrors.amount = "Please enter a valid positive amount"
    }

    if (!formData.income.trim()) {
      tempErrors.income = "Monthly income is required"
    }

    if (!formData.agree) {
      tempErrors.agree = "You must agree to the terms"
    }

    setErrors(tempErrors)
    return Object.keys(tempErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setStatus("submitting")
    
    // Simulate API request
    setTimeout(() => {
      const generatedId = `ASCB-LN-${Math.floor(100000 + Math.random() * 900000)}`
      setApplicationId(generatedId)
      setStatus("success")
    }, 1500)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear validation error when typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }))
    }
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setFormData(prev => ({ ...prev, [name]: checked }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }))
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={status !== "submitting" ? onClose : undefined}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 10 }}
            transition={{ type: "spring" as const, duration: 0.4 }}
            className="relative bg-white dark:bg-slate-900 w-full max-w-lg rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden z-10"
          >
            {/* Close Button */}
            {status !== "submitting" && (
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                aria-label="Close dialog"
              >
                <X className="size-5" />
              </button>
            )}

            {status === "success" ? (
              /* Success Screen */
              <div className="p-8 text-center space-y-6">
                <div className="flex justify-center">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring" as const, stiffness: 200, damping: 12 }}
                    className="w-16 h-16 bg-emerald-50 dark:bg-emerald-950/30 rounded-full flex items-center justify-center border border-emerald-100 dark:border-emerald-900"
                  >
                    <CheckCircle2 className="size-10 text-emerald-500" />
                  </motion.div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                    Application Submitted!
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Thank you for applying for a <span className="font-semibold text-primary">{loanType}</span>. Our representative will contact you within 24 business hours.
                  </p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 rounded-xl p-4 space-y-1">
                  <span className="block text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-widest font-extrabold">Application ID</span>
                  <span className="block font-mono font-bold text-slate-800 dark:text-slate-200 text-lg tracking-wider">
                    {applicationId}
                  </span>
                </div>

                <button
                  onClick={onClose}
                  className="w-full bg-primary hover:bg-primary/95 text-white py-3 rounded-xl font-bold text-sm transition-all active:scale-[0.98] shadow-md shadow-sky-500/10"
                >
                  Done
                </button>
              </div>
            ) : (
              /* Form Screen */
              <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-5">
                <div className="space-y-1">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-primary bg-sky-50 dark:bg-sky-950/30 px-2.5 py-1 rounded-full border border-sky-100 dark:border-sky-900/50">
                    <ShieldCheck className="size-3.5" /> SECURE LOAN APPLICATION
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mt-1">
                    Apply for {loanType}
                  </h3>
                  <p className="text-xs text-slate-400 dark:text-slate-500 leading-normal">
                    Submit your details and get instant preliminary review. No impact on credit score.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-primary/20 focus:border-primary dark:text-white transition-all ${
                        errors.name ? "border-rose-400 dark:border-rose-950 bg-rose-50/10" : "border-slate-200 dark:border-slate-700"
                      }`}
                      placeholder="Enter your name as in ID"
                      disabled={status === "submitting"}
                    />
                    {errors.name && <span className="block text-[10px] text-rose-500 font-semibold mt-1">{errors.name}</span>}
                  </div>

                  {/* Phone & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        maxLength={10}
                        className={`w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-primary/20 focus:border-primary dark:text-white transition-all ${
                          errors.phone ? "border-rose-400 dark:border-rose-950 bg-rose-50/10" : "border-slate-200 dark:border-slate-700"
                        }`}
                        placeholder="10-digit number"
                        disabled={status === "submitting"}
                      />
                      {errors.phone && <span className="block text-[10px] text-rose-500 font-semibold mt-1">{errors.phone}</span>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-primary/20 focus:border-primary dark:text-white transition-all ${
                          errors.email ? "border-rose-400 dark:border-rose-950 bg-rose-50/10" : "border-slate-200 dark:border-slate-700"
                        }`}
                        placeholder="john@example.com"
                        disabled={status === "submitting"}
                      />
                      {errors.email && <span className="block text-[10px] text-rose-500 font-semibold mt-1">{errors.email}</span>}
                    </div>
                  </div>

                  {/* Loan Amount & Monthly Income Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="amount" className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
                        Desired Loan Amount () *
                      </label>
                      <input
                        type="text"
                        id="amount"
                        name="amount"
                        value={formData.amount}
                        onChange={handleInputChange}
                        className={`w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-primary/20 focus:border-primary dark:text-white transition-all ${
                          errors.amount ? "border-rose-400 dark:border-rose-950 bg-rose-50/10" : "border-slate-200 dark:border-slate-700"
                        }`}
                        placeholder="e.g. 500000"
                        disabled={status === "submitting"}
                      />
                      {errors.amount && <span className="block text-[10px] text-rose-500 font-semibold mt-1">{errors.amount}</span>}
                    </div>

                    <div>
                      <label htmlFor="income" className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
                        Monthly Income *
                      </label>
                      <select
                        id="income"
                        name="income"
                        value={formData.income}
                        onChange={handleInputChange}
                        className={`w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-primary/20 focus:border-primary dark:text-white dark:bg-slate-800 transition-all ${
                          errors.income ? "border-rose-400 dark:border-rose-950 bg-rose-50/10" : ""
                        }`}
                        disabled={status === "submitting"}
                      >
                        <option value="">Select range</option>
                        <option value="under-25k">Below 25,000</option>
                        <option value="25k-50k">25,000 - 50,000</option>
                        <option value="50k-100k">50,000 - 1,00,000</option>
                        <option value="above-100k">Above 1,00,000</option>
                      </select>
                      {errors.income && <span className="block text-[10px] text-rose-500 font-semibold mt-1">{errors.income}</span>}
                    </div>
                  </div>

                  {/* Consent Checkbox */}
                  <div>
                    <label className="flex items-start gap-2.5 cursor-pointer group">
                      <input
                        type="checkbox"
                        name="agree"
                        checked={formData.agree}
                        onChange={handleCheckboxChange}
                        className="mt-0.5 rounded border-slate-300 dark:border-slate-700 focus:ring-primary text-primary transition-colors cursor-pointer"
                        disabled={status === "submitting"}
                      />
                      <span className="text-xs text-slate-500 dark:text-slate-400 select-none leading-normal group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">
                        I hereby authorize ASCB Bank to contact me regarding my loan application. I declare that the details provided are correct.
                      </span>
                    </label>
                    {errors.agree && <span className="block text-[10px] text-rose-500 font-semibold mt-1">{errors.agree}</span>}
                  </div>
                </div>

                {/* Submit Action Button */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/95 text-white py-3 rounded-xl font-bold text-sm transition-all active:scale-[0.98] disabled:opacity-75 disabled:pointer-events-none shadow-md shadow-sky-500/10 hover:shadow-sky-500/20"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="size-4 animate-spin" />
                      Processing Application...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
