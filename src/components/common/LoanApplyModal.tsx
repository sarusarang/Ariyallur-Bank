import React, { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { CheckCircle2, FileText, Loader2, ShieldCheck, X } from "lucide-react"

interface LoanApplyModalProps {
  isOpen: boolean
  onClose: () => void
  loanType: string
}

interface LoanFormData {
  branch: string
  memberNumber: string
  applicantName: string
  address: string
  phone: string
  houseNumber: string
  wardNumber: string
  villagePanchayat: string
  parentOrSpouseName: string
  age: string
  occupationDetails: string
  ownLandDetails: string
  ownSurveyNumber: string
  ownLandExtent: string
  ownIrrigation: string
  leasedLandOwner: string
  leasedSurveyNumber: string
  leasedLandExtent: string
  leasedIrrigation: string
  requestedAmount: string
  loanPurpose: string
  proposedSecurity: string
  suretyOne: string
  suretyTwo: string
  propertySecurityDetails: string
  existingDebtDetails: string
  agree: boolean
}

const initialFormData: LoanFormData = {
  branch: "",
  memberNumber: "",
  applicantName: "",
  address: "",
  phone: "",
  houseNumber: "",
  wardNumber: "",
  villagePanchayat: "",
  parentOrSpouseName: "",
  age: "",
  occupationDetails: "",
  ownLandDetails: "",
  ownSurveyNumber: "",
  ownLandExtent: "",
  ownIrrigation: "",
  leasedLandOwner: "",
  leasedSurveyNumber: "",
  leasedLandExtent: "",
  leasedIrrigation: "",
  requestedAmount: "",
  loanPurpose: "",
  proposedSecurity: "",
  suretyOne: "",
  suretyTwo: "",
  propertySecurityDetails: "",
  existingDebtDetails: "",
  agree: false
}

const branchOptions = [
  "Main Branch (HO) - Ariyallur",
  "Kodakkad Branch",
  "Anangadi Branch"
]

export default function LoanApplyModal({ isOpen, onClose, loanType }: LoanApplyModalProps) {
  const [formData, setFormData] = useState<LoanFormData>(initialFormData)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle")
  const [applicationId, setApplicationId] = useState("")

  useEffect(() => {
    if (isOpen) {
      setStatus("idle")
      setFormData(initialFormData)
      setErrors({})
    }
  }, [isOpen])

  const validate = () => {
    const tempErrors: Record<string, string> = {}

    if (!formData.branch.trim()) tempErrors.branch = "Preferred branch is required"
    if (!formData.applicantName.trim()) tempErrors.applicantName = "Applicant name is required"
    if (!formData.address.trim()) tempErrors.address = "Address is required"

    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required"
    } else if (!/^\d{10}$/.test(formData.phone.trim())) {
      tempErrors.phone = "Enter a valid 10-digit mobile number"
    }

    if (formData.age.trim()) {
      const age = Number(formData.age)
      if (Number.isNaN(age) || age < 18 || age > 100) {
        tempErrors.age = "Enter a valid age"
      }
    }

    if (!formData.requestedAmount.trim()) {
      tempErrors.requestedAmount = "Loan amount is required"
    } else {
      const amount = Number(formData.requestedAmount.replace(/,/g, ""))
      if (Number.isNaN(amount) || amount <= 0) {
        tempErrors.requestedAmount = "Enter a valid positive amount"
      }
    }

    if (!formData.loanPurpose.trim()) tempErrors.loanPurpose = "Loan purpose is required"
    if (!formData.agree) tempErrors.agree = "Declaration must be accepted"

    setErrors(tempErrors)
    return Object.keys(tempErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setStatus("submitting")

    setTimeout(() => {
      const generatedId = `ASCB-LN-${Math.floor(100000 + Math.random() * 900000)}`
      setApplicationId(generatedId)
      setStatus("success")
    }, 1500)
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))

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

  const inputClass = (field: keyof LoanFormData) =>
    `w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary dark:text-white transition-all ${
      errors[field] ? "border-rose-400 dark:border-rose-950 bg-rose-50/10" : "border-slate-200 dark:border-slate-700"
    }`

  const labelClass = "block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5"

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center p-3 sm:p-4 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={status !== "submitting" ? onClose : undefined}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs"
          />

          <motion.div
            initial={{ scale: 0.96, opacity: 0, y: 18 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.96, opacity: 0, y: 10 }}
            transition={{ type: "spring" as const, duration: 0.4 }}
            className="relative z-10 my-4 w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl border border-slate-100 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900"
          >
            {status !== "submitting" && (
              <button
                onClick={onClose}
                className="absolute right-4 top-4 z-20 rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-200"
                aria-label="Close dialog"
              >
                <X className="size-5" />
              </button>
            )}

            {status === "success" ? (
              <div className="p-8 text-center space-y-6">
                <div className="flex justify-center">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring" as const, stiffness: 200, damping: 12 }}
                    className="flex h-16 w-16 items-center justify-center rounded-full border border-emerald-100 bg-emerald-50 dark:border-emerald-900 dark:bg-emerald-950/30"
                  >
                    <CheckCircle2 className="size-10 text-emerald-500" />
                  </motion.div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                    Application Submitted
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Thank you for applying for a <span className="font-semibold text-primary">{loanType}</span>. Our representative will review the submitted details.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/60">
                  <span className="block text-[10px] font-extrabold uppercase tracking-widest text-slate-400 dark:text-slate-500">Application ID</span>
                  <span className="block text-lg font-bold tracking-wider text-slate-800 dark:text-slate-200">
                    {applicationId}
                  </span>
                </div>

                <button
                  onClick={onClose}
                  className="w-full rounded-xl bg-primary py-3 text-sm font-bold text-white shadow-md shadow-sky-500/10 transition-all hover:bg-primary/95 active:scale-[0.98]"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-5 sm:p-6 md:p-8 space-y-6">
                <div className="grid grid-cols-1 gap-4 border-b border-slate-100 pb-5 sm:grid-cols-[1fr_auto] dark:border-slate-800">
                  <div className="space-y-2 pr-8 sm:pr-0">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-100 bg-sky-50 px-2.5 py-1 text-[10px] font-bold text-primary dark:border-sky-900/50 dark:bg-sky-950/30">
                      <ShieldCheck className="size-3.5" /> SECURE LOAN APPLICATION
                    </span>
                    <div>
                      <h3 className="text-xl font-extrabold leading-tight text-slate-900 dark:text-white">
                        Ariyallur Service Co-Operative Bank No. F7730
                      </h3>
                      <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                        English Loan Application Form - {loanType}
                      </p>
                    </div>
                  </div>

                  <div className="flex h-28 w-24 items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 text-center text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:border-slate-700 dark:bg-slate-800">
                    Photo
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm font-extrabold text-slate-800 dark:text-white">
                    <FileText className="size-4 text-primary" />
                    Applicant Details
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div>
                      <label htmlFor="branch" className={labelClass}>Preferred Branch *</label>
                      <select
                        id="branch"
                        name="branch"
                        value={formData.branch}
                        onChange={handleInputChange}
                        className={inputClass("branch")}
                        disabled={status === "submitting"}
                      >
                        <option value="">Select branch</option>
                        {branchOptions.map(branch => (
                          <option key={branch} value={branch}>{branch}</option>
                        ))}
                      </select>
                      {errors.branch && <span className="mt-1 block text-[10px] font-semibold text-rose-500">{errors.branch}</span>}
                    </div>

                    <div>
                      <label htmlFor="memberNumber" className={labelClass}>Member Number</label>
                      <input
                        type="text"
                        id="memberNumber"
                        name="memberNumber"
                        value={formData.memberNumber}
                        onChange={handleInputChange}
                        className={inputClass("memberNumber")}
                        placeholder="If available"
                        disabled={status === "submitting"}
                      />
                    </div>

                    <div>
                      <label htmlFor="applicantName" className={labelClass}>Applicant Name *</label>
                      <input
                        type="text"
                        id="applicantName"
                        name="applicantName"
                        value={formData.applicantName}
                        onChange={handleInputChange}
                        className={inputClass("applicantName")}
                        placeholder="Full name"
                        disabled={status === "submitting"}
                      />
                      {errors.applicantName && <span className="mt-1 block text-[10px] font-semibold text-rose-500">{errors.applicantName}</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className={labelClass}>Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        maxLength={10}
                        className={inputClass("phone")}
                        placeholder="10-digit mobile number"
                        disabled={status === "submitting"}
                      />
                      {errors.phone && <span className="mt-1 block text-[10px] font-semibold text-rose-500">{errors.phone}</span>}
                    </div>

                    <div>
                      <label htmlFor="parentOrSpouseName" className={labelClass}>Father / Spouse Name</label>
                      <input
                        type="text"
                        id="parentOrSpouseName"
                        name="parentOrSpouseName"
                        value={formData.parentOrSpouseName}
                        onChange={handleInputChange}
                        className={inputClass("parentOrSpouseName")}
                        placeholder="Father or spouse name"
                        disabled={status === "submitting"}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="address" className={labelClass}>Address *</label>
                    <textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      rows={3}
                      className={inputClass("address")}
                      placeholder="House name, street, post office, district, PIN"
                      disabled={status === "submitting"}
                    />
                    {errors.address && <span className="mt-1 block text-[10px] font-semibold text-rose-500">{errors.address}</span>}
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                    <div>
                      <label htmlFor="houseNumber" className={labelClass}>House Number</label>
                      <input
                        type="text"
                        id="houseNumber"
                        name="houseNumber"
                        value={formData.houseNumber}
                        onChange={handleInputChange}
                        className={inputClass("houseNumber")}
                        disabled={status === "submitting"}
                      />
                    </div>

                    <div>
                      <label htmlFor="wardNumber" className={labelClass}>Ward Number</label>
                      <input
                        type="text"
                        id="wardNumber"
                        name="wardNumber"
                        value={formData.wardNumber}
                        onChange={handleInputChange}
                        className={inputClass("wardNumber")}
                        disabled={status === "submitting"}
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="villagePanchayat" className={labelClass}>Village / Panchayat</label>
                      <input
                        type="text"
                        id="villagePanchayat"
                        name="villagePanchayat"
                        value={formData.villagePanchayat}
                        onChange={handleInputChange}
                        className={inputClass("villagePanchayat")}
                        disabled={status === "submitting"}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div>
                      <label htmlFor="age" className={labelClass}>Age</label>
                      <input
                        type="number"
                        id="age"
                        name="age"
                        min="18"
                        max="100"
                        value={formData.age}
                        onChange={handleInputChange}
                        className={inputClass("age")}
                        disabled={status === "submitting"}
                      />
                      {errors.age && <span className="mt-1 block text-[10px] font-semibold text-rose-500">{errors.age}</span>}
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="occupationDetails" className={labelClass}>Job / Occupation Details</label>
                      <input
                        type="text"
                        id="occupationDetails"
                        name="occupationDetails"
                        value={formData.occupationDetails}
                        onChange={handleInputChange}
                        className={inputClass("occupationDetails")}
                        placeholder="Employment, business, farming, or other income source"
                        disabled={status === "submitting"}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4 border-t border-slate-100 pt-5 dark:border-slate-800">
                  <div className="flex items-center gap-2 text-sm font-extrabold text-slate-800 dark:text-white">
                    <FileText className="size-4 text-primary" />
                    Loan Details
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div>
                      <label className={labelClass}>Loan Type</label>
                      <input
                        type="text"
                        value={loanType}
                        readOnly
                        className="w-full rounded-xl border border-slate-200 bg-slate-100 px-3.5 py-2.5 text-sm font-bold text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                      />
                    </div>

                    <div>
                      <label htmlFor="requestedAmount" className={labelClass}>Requested Loan Amount *</label>
                      <input
                        type="text"
                        id="requestedAmount"
                        name="requestedAmount"
                        value={formData.requestedAmount}
                        onChange={handleInputChange}
                        className={inputClass("requestedAmount")}
                        placeholder="Amount in Rs."
                        disabled={status === "submitting"}
                      />
                      {errors.requestedAmount && <span className="mt-1 block text-[10px] font-semibold text-rose-500">{errors.requestedAmount}</span>}
                    </div>

                    <div>
                      <label htmlFor="proposedSecurity" className={labelClass}>Proposed Security</label>
                      <select
                        id="proposedSecurity"
                        name="proposedSecurity"
                        value={formData.proposedSecurity}
                        onChange={handleInputChange}
                        className={inputClass("proposedSecurity")}
                        disabled={status === "submitting"}
                      >
                        <option value="">Select security</option>
                        <option value="surety">Surety / Guarantor</option>
                        <option value="property">Property mortgage</option>
                        <option value="gold">Gold pledge</option>
                        <option value="other">Other security</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="loanPurpose" className={labelClass}>Purpose of Loan *</label>
                    <textarea
                      id="loanPurpose"
                      name="loanPurpose"
                      value={formData.loanPurpose}
                      onChange={handleInputChange}
                      rows={3}
                      className={inputClass("loanPurpose")}
                      placeholder="State the loan requirement"
                      disabled={status === "submitting"}
                    />
                    {errors.loanPurpose && <span className="mt-1 block text-[10px] font-semibold text-rose-500">{errors.loanPurpose}</span>}
                  </div>
                </div>

                <div className="space-y-4 border-t border-slate-100 pt-5 dark:border-slate-800">
                  <div className="flex items-center gap-2 text-sm font-extrabold text-slate-800 dark:text-white">
                    <FileText className="size-4 text-primary" />
                    Land and Security Details
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                    <div className="md:col-span-2">
                      <label htmlFor="ownLandDetails" className={labelClass}>Land Owned by Applicant</label>
                      <input
                        type="text"
                        id="ownLandDetails"
                        name="ownLandDetails"
                        value={formData.ownLandDetails}
                        onChange={handleInputChange}
                        className={inputClass("ownLandDetails")}
                        placeholder="Location or description"
                        disabled={status === "submitting"}
                      />
                    </div>

                    <div>
                      <label htmlFor="ownSurveyNumber" className={labelClass}>Survey Number</label>
                      <input
                        type="text"
                        id="ownSurveyNumber"
                        name="ownSurveyNumber"
                        value={formData.ownSurveyNumber}
                        onChange={handleInputChange}
                        className={inputClass("ownSurveyNumber")}
                        disabled={status === "submitting"}
                      />
                    </div>

                    <div>
                      <label htmlFor="ownLandExtent" className={labelClass}>Extent</label>
                      <input
                        type="text"
                        id="ownLandExtent"
                        name="ownLandExtent"
                        value={formData.ownLandExtent}
                        onChange={handleInputChange}
                        className={inputClass("ownLandExtent")}
                        placeholder="Area"
                        disabled={status === "submitting"}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                    <div>
                      <label htmlFor="ownIrrigation" className={labelClass}>Irrigation Facility</label>
                      <select
                        id="ownIrrigation"
                        name="ownIrrigation"
                        value={formData.ownIrrigation}
                        onChange={handleInputChange}
                        className={inputClass("ownIrrigation")}
                        disabled={status === "submitting"}
                      >
                        <option value="">Select</option>
                        <option value="available">Available</option>
                        <option value="not-available">Not available</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="leasedLandOwner" className={labelClass}>Leased Land Owner</label>
                      <input
                        type="text"
                        id="leasedLandOwner"
                        name="leasedLandOwner"
                        value={formData.leasedLandOwner}
                        onChange={handleInputChange}
                        className={inputClass("leasedLandOwner")}
                        disabled={status === "submitting"}
                      />
                    </div>

                    <div>
                      <label htmlFor="leasedSurveyNumber" className={labelClass}>Leased Survey No.</label>
                      <input
                        type="text"
                        id="leasedSurveyNumber"
                        name="leasedSurveyNumber"
                        value={formData.leasedSurveyNumber}
                        onChange={handleInputChange}
                        className={inputClass("leasedSurveyNumber")}
                        disabled={status === "submitting"}
                      />
                    </div>

                    <div>
                      <label htmlFor="leasedLandExtent" className={labelClass}>Leased Extent</label>
                      <input
                        type="text"
                        id="leasedLandExtent"
                        name="leasedLandExtent"
                        value={formData.leasedLandExtent}
                        onChange={handleInputChange}
                        className={inputClass("leasedLandExtent")}
                        disabled={status === "submitting"}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div>
                      <label htmlFor="leasedIrrigation" className={labelClass}>Leased Land Irrigation</label>
                      <select
                        id="leasedIrrigation"
                        name="leasedIrrigation"
                        value={formData.leasedIrrigation}
                        onChange={handleInputChange}
                        className={inputClass("leasedIrrigation")}
                        disabled={status === "submitting"}
                      >
                        <option value="">Select</option>
                        <option value="available">Available</option>
                        <option value="not-available">Not available</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="suretyOne" className={labelClass}>Surety 1 - Member No., Name, Address</label>
                      <input
                        type="text"
                        id="suretyOne"
                        name="suretyOne"
                        value={formData.suretyOne}
                        onChange={handleInputChange}
                        className={inputClass("suretyOne")}
                        disabled={status === "submitting"}
                      />
                    </div>

                    <div>
                      <label htmlFor="suretyTwo" className={labelClass}>Surety 2 - Member No., Name, Address</label>
                      <input
                        type="text"
                        id="suretyTwo"
                        name="suretyTwo"
                        value={formData.suretyTwo}
                        onChange={handleInputChange}
                        className={inputClass("suretyTwo")}
                        disabled={status === "submitting"}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label htmlFor="propertySecurityDetails" className={labelClass}>Property Security Details</label>
                      <textarea
                        id="propertySecurityDetails"
                        name="propertySecurityDetails"
                        value={formData.propertySecurityDetails}
                        onChange={handleInputChange}
                        rows={3}
                        className={inputClass("propertySecurityDetails")}
                        placeholder="Survey number, extent, and ownership details"
                        disabled={status === "submitting"}
                      />
                    </div>

                    <div>
                      <label htmlFor="existingDebtDetails" className={labelClass}>Existing Debt / Liability Details</label>
                      <textarea
                        id="existingDebtDetails"
                        name="existingDebtDetails"
                        value={formData.existingDebtDetails}
                        onChange={handleInputChange}
                        rows={3}
                        className={inputClass("existingDebtDetails")}
                        placeholder="Current loans or dues, if any"
                        disabled={status === "submitting"}
                      />
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/60">
                  <label className="flex cursor-pointer items-start gap-2.5">
                    <input
                      type="checkbox"
                      name="agree"
                      checked={formData.agree}
                      onChange={handleCheckboxChange}
                      className="mt-0.5 cursor-pointer rounded border-slate-300 text-primary transition-colors focus:ring-primary dark:border-slate-700"
                      disabled={status === "submitting"}
                    />
                    <span className="select-none text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                      I certify that the details given above are true. If any information is found incorrect, I accept responsibility for action under bank rules and applicable law.
                    </span>
                  </label>
                  {errors.agree && <span className="mt-2 block text-[10px] font-semibold text-rose-500">{errors.agree}</span>}
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-bold text-white shadow-md shadow-sky-500/10 transition-all hover:bg-primary/95 hover:shadow-sky-500/20 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-75"
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
