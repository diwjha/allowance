// import { useState } from "react";
// import DocumentUploadField from "../../components/DocumentUploadField";

// const steps = [
//   "Personal",
//   "Employment",
//   "Salary",
//   "Family",
//   "Leave",
//   "Benefits",
//   "Service",
//   "Training",
//   "Compliance",
//   "Documents",
// ];

// export default function EmployeeWizardPage() {
//   const [step, setStep] = useState(1);

//   const nextStep = () => {
//     if (step < steps.length) {
//       setStep(step + 1);
//     }
//   };

//   const prevStep = () => {
//     if (step > 1) {
//       setStep(step - 1);
//     }
//   };

//   return (
//     <div className="space-y-6">

//       {/* HEADER */}

//       <div className="bg-white rounded-3xl shadow-lg p-6">

//         <h1 className="text-3xl font-bold text-slate-800">
//           Employee Registration Wizard
//         </h1>

//         <p className="text-slate-500 mt-2">
//           Complete employee onboarding process.
//         </p>

//       </div>

//       {/* STEP INDICATOR */}

//       <div className="bg-white rounded-3xl shadow-lg p-6">

//         <div className="flex flex-wrap gap-3">

//           {steps.map((item, index) => (
//             <div
//               key={item}
//               className={`
//               px-4
//               py-2
//               rounded-xl
//               text-sm
//               font-semibold

//               ${
//                 step === index + 1
//                   ? "bg-indigo-600 text-white"
//                   : "bg-slate-100 text-slate-600"
//               }
//               `}
//             >
//               {index + 1}. {item}
//             </div>
//           ))}

//         </div>

//       </div>

//       {/* STEP CONTENT */}

//       <div className="bg-white rounded-3xl shadow-lg p-8">

//         {step === 1 && <PersonalDetailsStep />}

//         {step === 2 && <EmploymentStep />}

//         {step === 3 && <SalaryStep />}

//         {step === 4 && <FamilyStep />}

//         {step === 5 && <LeaveStep />}

//         {step === 6 && <BenefitsStep />}

//         {step === 7 && <ServiceStep />}

//         {step === 8 && <TrainingStep />}

//         {step === 9 && <ComplianceStep />}

//         {step === 10 && <DocumentsStep />}

//       </div>

//       {/* FOOTER */}

//       <div className="flex justify-between">

//         <button
//           onClick={prevStep}
//           disabled={step === 1}
//           className="
//           px-6
//           py-3
//           rounded-xl
//           bg-slate-200
//           disabled:opacity-50
//           "
//         >
//           Previous
//         </button>

//         {step < steps.length ? (
//           <button
//             onClick={nextStep}
//             className="
//             px-6
//             py-3
//             rounded-xl
//             bg-indigo-600
//             text-white
//             "
//           >
//             Next
//           </button>
//         ) : (
//           <button
//             className="
//             px-6
//             py-3
//             rounded-xl
//             bg-green-600
//             text-white
//             "
//           >
//             Save Employee
//           </button>
//         )}

//       </div>

//     </div>
//   );
// }

// /* ============================
//    STEP 1
// ============================ */

// function PersonalDetailsStep() {
//   return (
//     <>
//       <h2 className="text-2xl font-bold mb-6">
//         Personal Details
//       </h2>

//       <div className="grid md:grid-cols-3 gap-4">

//         <input
//           placeholder="First Name"
//           className="border rounded-xl p-3"
//         />

//         <input
//           placeholder="Middle Name"
//           className="border rounded-xl p-3"
//         />

//         <input
//           placeholder="Last Name"
//           className="border rounded-xl p-3"
//         />

//         <input
//           placeholder="Father Name"
//           className="border rounded-xl p-3"
//         />

//         <input
//           placeholder="Mother Name"
//           className="border rounded-xl p-3"
//         />

//         <input
//           type="date"
//           className="border rounded-xl p-3"
//         />

//         <select
//           className="border rounded-xl p-3"
//         >
//           <option>Male</option>
//           <option>Female</option>
//           <option>Other</option>
//         </select>

//         <select
//           className="border rounded-xl p-3"
//         >
//           <option>Single</option>
//           <option>Married</option>
//           <option>Divorced</option>
//           <option>Widowed</option>
//         </select>

//         <input
//           placeholder="Mobile Number"
//           className="border rounded-xl p-3"
//         />

//         <input
//           placeholder="Alternate Mobile"
//           className="border rounded-xl p-3"
//         />

//         <input
//           placeholder="Email Address"
//           className="border rounded-xl p-3"
//         />

//         <input
//           placeholder="Aadhaar Number"
//           className="border rounded-xl p-3"
//         />

//         <input
//           placeholder="PAN Number"
//           className="border rounded-xl p-3"
//         />

//       </div>

//       <div className="grid md:grid-cols-2 gap-4 mt-4">

//         <textarea
//           rows={4}
//           placeholder="Permanent Address"
//           className="border rounded-xl p-3"
//         />

//         <textarea
//           rows={4}
//           placeholder="Current Address"
//           className="border rounded-xl p-3"
//         />

//       </div>

//       <div className="mt-6">

//         <label className="block mb-2 font-semibold">
//           Employee Photograph
//         </label>

//         <input
//           type="file"
//           className="border rounded-xl p-3 w-full"
//         />

//       </div>
//     </>
//   );
// }

// /* ============================
//    STEP 2
// ============================ */

// function EmploymentStep() {
//   return (
//     <>
//       <h2 className="text-2xl font-bold mb-6">
//         Employment Details
//       </h2>

//       <div className="grid md:grid-cols-3 gap-4">

//         <input
//           placeholder="Employee ID"
//           className="border rounded-xl p-3"
//         />

//         <input
//           placeholder="Service Number"
//           className="border rounded-xl p-3"
//         />

//         <input
//           placeholder="Batch Year"
//           className="border rounded-xl p-3"
//         />

//         <input
//           placeholder="Ministry"
//           className="border rounded-xl p-3"
//         />

//         <input
//           placeholder="Department"
//           className="border rounded-xl p-3"
//         />

//         <input
//           placeholder="Division"
//           className="border rounded-xl p-3"
//         />

//         <input
//           placeholder="Designation"
//           className="border rounded-xl p-3"
//         />

//         <input
//           placeholder="Office Location"
//           className="border rounded-xl p-3"
//         />

//         <input
//           placeholder="Reporting Officer"
//           className="border rounded-xl p-3"
//         />

//         <input
//           placeholder="Reviewing Officer"
//           className="border rounded-xl p-3"
//         />

//         <input
//           type="date"
//           className="border rounded-xl p-3"
//         />

//         <input
//           type="date"
//           className="border rounded-xl p-3"
//         />

//       </div>

//       <div className="grid md:grid-cols-3 gap-4 mt-4">

//         <select className="border rounded-xl p-3">
//           <option>Permanent</option>
//           <option>Contractual</option>
//           <option>Temporary</option>
//           <option>Deputation</option>
//         </select>

//         <select className="border rounded-xl p-3">
//           <option>IAS</option>
//           <option>IPS</option>
//           <option>IFS</option>
//           <option>Central Service</option>
//           <option>State Service</option>
//           <option>PSU</option>
//         </select>

//         <select className="border rounded-xl p-3">
//           <option>Direct Recruitment</option>
//           <option>Promotion</option>
//           <option>Contractual</option>
//         </select>

//         <select className="border rounded-xl p-3">
//           <option>Group A</option>
//           <option>Group B</option>
//           <option>Group C</option>
//           <option>Group D</option>
//         </select>

//         <select className="border rounded-xl p-3">
//           <option>Gazetted</option>
//           <option>Non Gazetted</option>
//         </select>

//         <input
//           placeholder="Seniority Number"
//           className="border rounded-xl p-3"
//         />

//       </div>
//     </>
//   );
// }

// /* ============================
//    STEP 3
// ============================ */

// function SalaryStep() {
//   return (
//     <>
//       <h2 className="text-2xl font-bold mb-6">
//         Salary & Financial Details
//       </h2>

//       {/* PAY DETAILS */}

//       <div className="mb-8">

//         <h3 className="text-lg font-semibold text-slate-700 mb-4">
//           Pay Structure
//         </h3>

//         <div className="grid md:grid-cols-3 gap-4">

//           <input
//             type="number"
//             placeholder="Basic Pay"
//             className="border rounded-xl p-3"
//           />

//           <input
//             placeholder="Pay Level (Level 7, Level 10)"
//             className="border rounded-xl p-3"
//           />

//           <input
//             type="number"
//             placeholder="Grade Pay"
//             className="border rounded-xl p-3"
//           />

//         </div>

//       </div>

//       {/* ALLOWANCES */}

//       <div className="mb-8">

//         <h3 className="text-lg font-semibold text-slate-700 mb-4">
//           Allowances
//         </h3>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">

//           <input
//             type="number"
//             placeholder="HRA"
//             className="border rounded-xl p-3"
//           />

//           <input
//             type="number"
//             placeholder="DA"
//             className="border rounded-xl p-3"
//           />

//           <input
//             type="number"
//             placeholder="TA"
//             className="border rounded-xl p-3"
//           />

//           <input
//             type="number"
//             placeholder="Special Allowance"
//             className="border rounded-xl p-3"
//           />

//         </div>

//       </div>

//       {/* DEDUCTIONS */}

//       <div className="mb-8">

//         <h3 className="text-lg font-semibold text-slate-700 mb-4">
//           Deductions
//         </h3>

//         <div className="grid md:grid-cols-3 gap-4">

//           <input
//             type="number"
//             placeholder="PF Deduction"
//             className="border rounded-xl p-3"
//           />

//           <input
//             type="number"
//             placeholder="Tax Deduction"
//             className="border rounded-xl p-3"
//           />

//           <input
//             type="number"
//             placeholder="Insurance Deduction"
//             className="border rounded-xl p-3"
//           />

//         </div>

//       </div>

//       {/* BANK DETAILS */}

//       <div className="mb-8">

//         <h3 className="text-lg font-semibold text-slate-700 mb-4">
//           Bank Account Details
//         </h3>

//         <div className="grid md:grid-cols-2 gap-4">

//           <input
//             placeholder="Bank Name"
//             className="border rounded-xl p-3"
//           />

//           <input
//             placeholder="Account Number"
//             className="border rounded-xl p-3"
//           />

//           <input
//             placeholder="IFSC Code"
//             className="border rounded-xl p-3"
//           />

//           <input
//             placeholder="Branch Name"
//             className="border rounded-xl p-3"
//           />

//         </div>

//       </div>

//       {/* PENSION DETAILS */}

//       <div>

//         <h3 className="text-lg font-semibold text-slate-700 mb-4">
//           Pension Information
//         </h3>

//         <div className="grid md:grid-cols-2 gap-4">

//           <input
//             placeholder="Pension Scheme"
//             className="border rounded-xl p-3"
//           />

//           <input
//             placeholder="Pension Account Number"
//             className="border rounded-xl p-3"
//           />

//         </div>

//       </div>

//     </>
//   );
// }

// /* ============================
//    STEP 4
// ============================ */

// function FamilyStep() {
//   return (
//     <>
//       <h2 className="text-2xl font-bold mb-6">
//         Family & Nominee Details
//       </h2>

//       {/* SPOUSE DETAILS */}

//       <div className="mb-8">

//         <h3 className="text-lg font-semibold text-slate-700 mb-4">
//           Spouse Information
//         </h3>

//         <div className="grid md:grid-cols-2 gap-4">

//           <input
//             placeholder="Spouse Name"
//             className="border rounded-xl p-3"
//           />

//           <input
//             type="date"
//             className="border rounded-xl p-3"
//           />

//         </div>

//       </div>

//       {/* CHILD 1 */}

//       <div className="mb-8 border rounded-2xl p-5">

//         <div className="flex justify-between items-center mb-4">

//           <h3 className="text-lg font-semibold text-slate-700">
//             Family Member #1
//           </h3>

//           <span
//             className="
//             bg-indigo-100
//             text-indigo-700
//             px-3
//             py-1
//             rounded-full
//             text-sm
//             "
//           >
//             Dependent
//           </span>

//         </div>

//         <div className="grid md:grid-cols-2 gap-4">

//           <input
//             placeholder="Full Name"
//             className="border rounded-xl p-3"
//           />

//           <select
//             className="border rounded-xl p-3"
//           >
//             <option>Spouse</option>
//             <option>Son</option>
//             <option>Daughter</option>
//             <option>Father</option>
//             <option>Mother</option>
//             <option>Brother</option>
//             <option>Sister</option>
//             <option>Other</option>
//           </select>

//           <input
//             type="date"
//             className="border rounded-xl p-3"
//           />

//           <select
//             className="border rounded-xl p-3"
//           >
//             <option>Dependent</option>
//             <option>Non Dependent</option>
//           </select>

//         </div>

//       </div>

//       {/* NOMINEE DETAILS */}

//       <div
//         className="
//         bg-slate-50
//         rounded-2xl
//         p-5
//         "
//       >

//         <h3 className="text-lg font-semibold text-slate-700 mb-4">
//           Nominee Information
//         </h3>

//         <div className="grid md:grid-cols-2 gap-4">

//           <input
//             placeholder="Nominee Name"
//             className="border rounded-xl p-3"
//           />

//           <input
//             placeholder="Relationship"
//             className="border rounded-xl p-3"
//           />

//           <input
//             type="number"
//             placeholder="Nominee Percentage (%)"
//             className="border rounded-xl p-3"
//           />

//           <select
//             className="border rounded-xl p-3"
//           >
//             <option>Pension Nominee</option>
//             <option>PF Nominee</option>
//             <option>Insurance Nominee</option>
//           </select>

//         </div>

//       </div>

//       {/* FUTURE DYNAMIC BUTTON */}

//       <div className="mt-6">

//         <button
//           type="button"
//           className="
//           bg-indigo-600
//           text-white
//           px-5
//           py-3
//           rounded-xl
//           hover:bg-indigo-700
//           transition
//           "
//         >
//           + Add Family Member
//         </button>

//       </div>

//     </>
//   );
// }

// function LeaveStep() {
//   return (
//     <>
//       <h2 className="text-2xl font-bold mb-6">
//         Leave & Attendance Details
//       </h2>

//       {/* LEAVE BALANCES */}

//       <div className="mb-8">

//         <h3 className="text-lg font-semibold text-slate-700 mb-4">
//           Leave Allocation
//         </h3>

//         <div className="grid md:grid-cols-3 gap-4">

//           <input
//             type="number"
//             placeholder="Casual Leave (CL)"
//             className="border rounded-xl p-3"
//           />

//           <input
//             type="number"
//             placeholder="Earned Leave (EL)"
//             className="border rounded-xl p-3"
//           />

//           <input
//             type="number"
//             placeholder="Sick Leave (SL)"
//             className="border rounded-xl p-3"
//           />

//           <input
//             type="number"
//             placeholder="Maternity Leave"
//             className="border rounded-xl p-3"
//           />

//           <input
//             type="number"
//             placeholder="Paternity Leave"
//             className="border rounded-xl p-3"
//           />

//           <input
//             type="number"
//             placeholder="Special Leave"
//             className="border rounded-xl p-3"
//           />

//         </div>

//       </div>

//       {/* ATTENDANCE SETTINGS */}

//       <div className="mb-8">

//         <h3 className="text-lg font-semibold text-slate-700 mb-4">
//           Attendance Configuration
//         </h3>

//         <div className="grid md:grid-cols-2 gap-4">

//           <select
//             className="border rounded-xl p-3"
//           >
//             <option>General Shift</option>
//             <option>Morning Shift</option>
//             <option>Evening Shift</option>
//             <option>Night Shift</option>
//           </select>

//           <select
//             className="border rounded-xl p-3"
//           >
//             <option>Sunday Off</option>
//             <option>Saturday & Sunday Off</option>
//             <option>Rotational Off</option>
//           </select>

//         </div>

//       </div>

//       {/* ATTENDANCE OPTIONS */}

//       <div
//         className="
//         bg-slate-50
//         rounded-2xl
//         p-5
//         "
//       >

//         <h3 className="text-lg font-semibold text-slate-700 mb-5">
//           Attendance Controls
//         </h3>

//         <div className="grid md:grid-cols-2 gap-5">

//           <label className="flex items-center gap-3">

//             <input
//               type="checkbox"
//               className="h-5 w-5"
//             />

//             <span>
//               Attendance Tracking Enabled
//             </span>

//           </label>

//           <label className="flex items-center gap-3">

//             <input
//               type="checkbox"
//               className="h-5 w-5"
//             />

//             <span>
//               Biometric Attendance Enabled
//             </span>

//           </label>

//           <label className="flex items-center gap-3">

//             <input
//               type="checkbox"
//               className="h-5 w-5"
//             />

//             <span>
//               Leave Encashment Allowed
//             </span>

//           </label>

//           <label className="flex items-center gap-3">

//             <input
//               type="checkbox"
//               className="h-5 w-5"
//             />

//             <span>
//               Carry Forward Leave Allowed
//             </span>

//           </label>

//         </div>

//       </div>

//     </>
//   );
// }

// function BenefitsStep() {
//   return (
//     <>
//       <h2 className="text-2xl font-bold mb-6">
//         Benefits & Welfare Details
//       </h2>

//       {/* BENEFIT FLAGS */}

//       <div className="bg-slate-50 rounded-2xl p-6 mb-8">

//         <h3 className="text-lg font-semibold text-slate-700 mb-5">
//           Employee Benefits
//         </h3>

//         <div className="grid md:grid-cols-2 gap-5">

//           <label className="flex items-center gap-3">
//             <input
//               type="checkbox"
//               className="w-5 h-5"
//             />
//             <span>Medical Benefits Available</span>
//           </label>

//           <label className="flex items-center gap-3">
//             <input
//               type="checkbox"
//               className="w-5 h-5"
//             />
//             <span>Insurance Coverage Available</span>
//           </label>

//           <label className="flex items-center gap-3">
//             <input
//               type="checkbox"
//               className="w-5 h-5"
//             />
//             <span>Government Housing Facility</span>
//           </label>

//           <label className="flex items-center gap-3">
//             <input
//               type="checkbox"
//               className="w-5 h-5"
//             />
//             <span>Travel Benefits Available</span>
//           </label>

//           <label className="flex items-center gap-3">
//             <input
//               type="checkbox"
//               className="w-5 h-5"
//             />
//             <span>LTC Available</span>
//           </label>

//           <label className="flex items-center gap-3">
//             <input
//               type="checkbox"
//               className="w-5 h-5"
//             />
//             <span>Children Education Allowance</span>
//           </label>

//         </div>

//       </div>

//       {/* MEDICAL DETAILS */}

//       <div className="mb-8">

//         <h3 className="text-lg font-semibold text-slate-700 mb-4">
//           Medical Benefits
//         </h3>

//         <div className="grid md:grid-cols-2 gap-4">

//           <input
//             placeholder="Medical Scheme Name (CGHS, ECHS etc.)"
//             className="border rounded-xl p-3"
//           />

//           <input
//             placeholder="Medical Card Number"
//             className="border rounded-xl p-3"
//           />

//         </div>

//       </div>

//       {/* INSURANCE DETAILS */}

//       <div className="mb-8">

//         <h3 className="text-lg font-semibold text-slate-700 mb-4">
//           Insurance Details
//         </h3>

//         <div className="grid md:grid-cols-2 gap-4">

//           <input
//             placeholder="Insurance Provider"
//             className="border rounded-xl p-3"
//           />

//           <input
//             placeholder="Insurance Policy Number"
//             className="border rounded-xl p-3"
//           />

//           <input
//             placeholder="Insurance Coverage Amount"
//             className="border rounded-xl p-3"
//           />

//           <input
//             placeholder="Policy Expiry Date"
//             type="date"
//             className="border rounded-xl p-3"
//           />

//         </div>

//       </div>

//       {/* HOUSING DETAILS */}

//       <div className="mb-8">

//         <h3 className="text-lg font-semibold text-slate-700 mb-4">
//           Housing Details
//         </h3>

//         <div className="grid md:grid-cols-2 gap-4">

//           <input
//             placeholder="Government Quarter Number"
//             className="border rounded-xl p-3"
//           />

//           <input
//             placeholder="Housing Type"
//             className="border rounded-xl p-3"
//           />

//         </div>

//       </div>

//       {/* TRAVEL BENEFITS */}

//       <div className="mb-8">

//         <h3 className="text-lg font-semibold text-slate-700 mb-4">
//           Travel Benefits
//         </h3>

//         <div className="grid md:grid-cols-2 gap-4">

//           <input
//             placeholder="LTC Eligibility"
//             className="border rounded-xl p-3"
//           />

//           <input
//             placeholder="Travel Allowance Category"
//             className="border rounded-xl p-3"
//           />

//         </div>

//       </div>

//       {/* OTHER BENEFITS */}

//       <div>

//         <h3 className="text-lg font-semibold text-slate-700 mb-4">
//           Other Welfare Benefits
//         </h3>

//         <textarea
//           rows={5}
//           placeholder="Describe any additional government welfare schemes or employee benefits..."
//           className="
//           w-full
//           border
//           rounded-xl
//           p-4
//           "
//         />

//       </div>

//     </>
//   );
// }

// function ServiceStep() {
//   return (
//     <>
//       <h2 className="text-2xl font-bold mb-6">
//         Service History & Career Progression
//       </h2>

//       {/* CURRENT SERVICE STATUS */}

//       <div className="mb-8">

//         <h3 className="text-lg font-semibold text-slate-700 mb-4">
//           Current Service Status
//         </h3>

//         <div className="grid md:grid-cols-2 gap-4">

//           <select
//             className="border rounded-xl p-3"
//           >
//             <option>Active</option>
//             <option>On Leave</option>
//             <option>Suspended</option>
//             <option>Retired</option>
//           </select>

//           <input
//             placeholder="Current Posting Location"
//             className="border rounded-xl p-3"
//           />

//           <input
//             placeholder="Current Department"
//             className="border rounded-xl p-3"
//           />

//           <input
//             placeholder="Current Designation"
//             className="border rounded-xl p-3"
//           />

//         </div>

//       </div>

//       {/* PROMOTION HISTORY */}

//       <div className="mb-8">

//         <h3 className="text-lg font-semibold text-slate-700 mb-4">
//           Promotion History
//         </h3>

//         <div
//           className="
//           grid
//           md:grid-cols-2
//           gap-4
//           bg-slate-50
//           rounded-2xl
//           p-5
//           "
//         >

//           <input
//             type="date"
//             className="border rounded-xl p-3"
//           />

//           <input
//             placeholder="Promotion Order Number"
//             className="border rounded-xl p-3"
//           />

//           <input
//             placeholder="Old Designation"
//             className="border rounded-xl p-3"
//           />

//           <input
//             placeholder="New Designation"
//             className="border rounded-xl p-3"
//           />

//           <textarea
//             rows={3}
//             placeholder="Promotion Remarks"
//             className="
//             md:col-span-2
//             border
//             rounded-xl
//             p-3
//             "
//           />

//         </div>

//       </div>

//       {/* TRANSFER HISTORY */}

//       <div className="mb-8">

//         <h3 className="text-lg font-semibold text-slate-700 mb-4">
//           Transfer Records
//         </h3>

//         <div
//           className="
//           grid
//           md:grid-cols-2
//           gap-4
//           bg-slate-50
//           rounded-2xl
//           p-5
//           "
//         >

//           <input
//             type="date"
//             className="border rounded-xl p-3"
//           />

//           <input
//             placeholder="Transfer Order Number"
//             className="border rounded-xl p-3"
//           />

//           <input
//             placeholder="From Department"
//             className="border rounded-xl p-3"
//           />

//           <input
//             placeholder="To Department"
//             className="border rounded-xl p-3"
//           />

//           <input
//             placeholder="From Location"
//             className="border rounded-xl p-3"
//           />

//           <input
//             placeholder="To Location"
//             className="border rounded-xl p-3"
//           />

//           <textarea
//             rows={3}
//             placeholder="Transfer Reason"
//             className="
//             md:col-span-2
//             border
//             rounded-xl
//             p-3
//             "
//           />

//         </div>

//       </div>

//       {/* CAREER PROGRESSION */}

//       <div className="mb-8">

//         <h3 className="text-lg font-semibold text-slate-700 mb-4">
//           Career Progression
//         </h3>

//         <div className="grid md:grid-cols-2 gap-4">

//           <input
//             placeholder="MACP Level"
//             className="border rounded-xl p-3"
//           />

//           <input
//             placeholder="Time Bound Promotion Scheme"
//             className="border rounded-xl p-3"
//           />

//           <input
//             placeholder="Departmental Exams Cleared"
//             className="border rounded-xl p-3"
//           />

//           <input
//             placeholder="Seniority Position"
//             className="border rounded-xl p-3"
//           />

//         </div>

//       </div>

//       {/* SERVICE BOOK */}

//       <div>

//         <h3 className="text-lg font-semibold text-slate-700 mb-4">
//           Service Book Remarks
//         </h3>

//         <textarea
//           rows={5}
//           placeholder="Enter service book notes, postings, special entries or administrative remarks..."
//           className="
//           w-full
//           border
//           rounded-xl
//           p-4
//           "
//         />

//       </div>

//     </>
//   );
// }

// function TrainingStep() {
//   return (
//     <>
//       <h2 className="text-2xl font-bold mb-6">
//         Training & Performance Records
//       </h2>

//       {/* INDUCTION TRAINING */}

//       <div className="mb-8">

//         <h3 className="text-lg font-semibold text-slate-700 mb-4">
//           Induction Training
//         </h3>

//         <div
//           className="
//           grid
//           md:grid-cols-2
//           gap-4
//           bg-slate-50
//           p-5
//           rounded-2xl
//           "
//         >

//           <input
//             placeholder="Training Name"
//             className="border rounded-xl p-3"
//           />

//           <input
//             placeholder="Institute Name"
//             className="border rounded-xl p-3"
//           />

//           <input
//             type="date"
//             className="border rounded-xl p-3"
//           />

//           <input
//             type="date"
//             className="border rounded-xl p-3"
//           />

//           <input
//             placeholder="Certification Name"
//             className="border rounded-xl p-3 md:col-span-2"
//           />

//         </div>

//       </div>

//       {/* IN-SERVICE TRAINING */}

//       <div className="mb-8">

//         <h3 className="text-lg font-semibold text-slate-700 mb-4">
//           In-Service Training Programs
//         </h3>

//         <div
//           className="
//           grid
//           md:grid-cols-2
//           gap-4
//           bg-slate-50
//           p-5
//           rounded-2xl
//           "
//         >

//           <input
//             placeholder="Workshop / Seminar Name"
//             className="border rounded-xl p-3"
//           />

//           <input
//             placeholder="Conducted By"
//             className="border rounded-xl p-3"
//           />

//           <input
//             type="date"
//             className="border rounded-xl p-3"
//           />

//           <input
//             type="date"
//             className="border rounded-xl p-3"
//           />

//           <textarea
//             rows={3}
//             placeholder="Training Outcome / Remarks"
//             className="
//             border
//             rounded-xl
//             p-3
//             md:col-span-2
//             "
//           />

//         </div>

//       </div>

//       {/* CERTIFICATIONS */}

//       <div className="mb-8">

//         <h3 className="text-lg font-semibold text-slate-700 mb-4">
//           Certifications & Skill Development
//         </h3>

//         <div className="grid md:grid-cols-2 gap-4">

//           <input
//             placeholder="Certification Name"
//             className="border rounded-xl p-3"
//           />

//           <input
//             placeholder="Issued By"
//             className="border rounded-xl p-3"
//           />

//           <input
//             type="date"
//             className="border rounded-xl p-3"
//           />

//           <input
//             placeholder="Certificate Number"
//             className="border rounded-xl p-3"
//           />

//         </div>

//       </div>

//       {/* APAR */}

//       <div className="mb-8">

//         <h3 className="text-lg font-semibold text-slate-700 mb-4">
//           APAR (Annual Performance Appraisal Report)
//         </h3>

//         <div
//           className="
//           grid
//           md:grid-cols-2
//           gap-4
//           bg-slate-50
//           p-5
//           rounded-2xl
//           "
//         >

//           <input
//             type="number"
//             placeholder="Assessment Year"
//             className="border rounded-xl p-3"
//           />

//           <select
//             className="border rounded-xl p-3"
//           >
//             <option>Outstanding</option>
//             <option>Very Good</option>
//             <option>Good</option>
//             <option>Average</option>
//             <option>Below Average</option>
//           </select>

//           <input
//             placeholder="Reporting Officer"
//             className="border rounded-xl p-3"
//           />

//           <input
//             placeholder="Reviewing Officer"
//             className="border rounded-xl p-3"
//           />

//         </div>

//       </div>

//       {/* ACR */}

//       <div className="mb-8">

//         <h3 className="text-lg font-semibold text-slate-700 mb-4">
//           ACR (Annual Confidential Report)
//         </h3>

//         <div
//           className="
//           grid
//           md:grid-cols-2
//           gap-4
//           bg-slate-50
//           p-5
//           rounded-2xl
//           "
//         >

//           <input
//             type="number"
//             placeholder="Year"
//             className="border rounded-xl p-3"
//           />

//           <select
//             className="border rounded-xl p-3"
//           >
//             <option>Outstanding</option>
//             <option>Very Good</option>
//             <option>Good</option>
//             <option>Average</option>
//           </select>

//           <textarea
//             rows={3}
//             placeholder="Confidential Remarks"
//             className="
//             border
//             rounded-xl
//             p-3
//             md:col-span-2
//             "
//           />

//         </div>

//       </div>

//       {/* ACHIEVEMENTS */}

//       <div>

//         <h3 className="text-lg font-semibold text-slate-700 mb-4">
//           Achievements & Awards
//         </h3>

//         <textarea
//           rows={5}
//           placeholder="Major achievements, awards, recognitions, special contributions..."
//           className="
//           w-full
//           border
//           rounded-xl
//           p-4
//           "
//         />

//       </div>

//     </>
//   );
// }

// function ComplianceStep() {
//   return (
//     <>
//       <h2 className="text-2xl font-bold mb-6">
//         Compliance & Legal Records
//       </h2>

//       {/* BACKGROUND VERIFICATION */}

//       <div className="mb-8">

//         <h3 className="text-lg font-semibold text-slate-700 mb-4">
//           Background Verification
//         </h3>

//         <div
//           className="
//           grid
//           md:grid-cols-2
//           gap-4
//           bg-slate-50
//           p-5
//           rounded-2xl
//           "
//         >

//           <select
//             className="border rounded-xl p-3"
//           >
//             <option>Pending</option>
//             <option>Verified</option>
//             <option>Rejected</option>
//           </select>

//           <input
//             placeholder="Verification Agency"
//             className="border rounded-xl p-3"
//           />

//           <input
//             type="date"
//             className="border rounded-xl p-3"
//           />

//           <input
//             placeholder="Verification Reference Number"
//             className="border rounded-xl p-3"
//           />

//         </div>

//       </div>

//       {/* VIGILANCE */}

//       <div className="mb-8">

//         <h3 className="text-lg font-semibold text-slate-700 mb-4">
//           Vigilance Clearance
//         </h3>

//         <div
//           className="
//           grid
//           md:grid-cols-2
//           gap-4
//           bg-slate-50
//           p-5
//           rounded-2xl
//           "
//         >

//           <select
//             className="border rounded-xl p-3"
//           >
//             <option>Clear</option>
//             <option>Pending</option>
//             <option>Under Investigation</option>
//           </select>

//           <input
//             placeholder="Vigilance Authority"
//             className="border rounded-xl p-3"
//           />

//           <input
//             type="date"
//             className="border rounded-xl p-3"
//           />

//           <input
//             placeholder="Clearance Reference Number"
//             className="border rounded-xl p-3"
//           />

//         </div>

//       </div>

//       {/* INTEGRITY CERTIFICATE */}

//       <div className="mb-8">

//         <h3 className="text-lg font-semibold text-slate-700 mb-4">
//           Integrity Certificate
//         </h3>

//         <div
//           className="
//           grid
//           md:grid-cols-2
//           gap-4
//           bg-slate-50
//           p-5
//           rounded-2xl
//           "
//         >

//           <select
//             className="border rounded-xl p-3"
//           >
//             <option>Certified</option>
//             <option>Not Certified</option>
//             <option>Pending</option>
//           </select>

//           <input
//             placeholder="Issued By"
//             className="border rounded-xl p-3"
//           />

//           <input
//             type="date"
//             className="border rounded-xl p-3"
//           />

//           <input
//             placeholder="Certificate Number"
//             className="border rounded-xl p-3"
//           />

//         </div>

//       </div>

//       {/* SERVICE RULES */}

//       <div className="mb-8">

//         <h3 className="text-lg font-semibold text-slate-700 mb-4">
//           Service Rules & Conduct
//         </h3>

//         <div
//           className="
//           grid
//           md:grid-cols-2
//           gap-4
//           "
//         >

//           <input
//             placeholder="Applicable Service Rules"
//             className="border rounded-xl p-3"
//           />

//           <select
//             className="border rounded-xl p-3"
//           >
//             <option>Compliant</option>
//             <option>Non-Compliant</option>
//             <option>Under Review</option>
//           </select>

//         </div>

//       </div>

//       {/* DISCIPLINARY ACTION */}

//       <div className="mb-8">

//         <h3 className="text-lg font-semibold text-slate-700 mb-4">
//           Disciplinary Actions
//         </h3>

//         <textarea
//           rows={4}
//           placeholder="Warnings, suspensions, penalties, misconduct details..."
//           className="
//           w-full
//           border
//           rounded-xl
//           p-4
//           "
//         />

//       </div>

//       {/* PENDING INQUIRIES */}

//       <div className="mb-8">

//         <h3 className="text-lg font-semibold text-slate-700 mb-4">
//           Pending Departmental Inquiries
//         </h3>

//         <textarea
//           rows={4}
//           placeholder="Any ongoing inquiry or departmental proceedings..."
//           className="
//           w-full
//           border
//           rounded-xl
//           p-4
//           "
//         />

//       </div>

//       {/* COURT CASES */}

//       <div className="mb-8">

//         <h3 className="text-lg font-semibold text-slate-700 mb-4">
//           Court / Legal Cases
//         </h3>

//         <textarea
//           rows={4}
//           placeholder="Court case details, case number, remarks..."
//           className="
//           w-full
//           border
//           rounded-xl
//           p-4
//           "
//         />

//       </div>

//       {/* REMARKS */}

//       <div>

//         <h3 className="text-lg font-semibold text-slate-700 mb-4">
//           Additional Compliance Remarks
//         </h3>

//         <textarea
//           rows={5}
//           placeholder="Additional notes regarding compliance and legal matters..."
//           className="
//           w-full
//           border
//           rounded-xl
//           p-4
//           "
//         />

//       </div>

//     </>
//   );
// }

// function DocumentsStep() {
//   return (
//     <>
//       <h2 className="text-2xl font-bold mb-6">
//         Documents & Official Credentials
//       </h2>

//       {/* DOCUMENT UPLOADS */}

//       <div className="mb-10">

//         <h3 className="text-lg font-semibold text-slate-700 mb-4">
//           Employee Documents
//         </h3>

//         <div
//           className="
//           grid
//           md:grid-cols-2
//           gap-5
//           "
//         >

//           <DocumentUploadField
//             label="Employee Photograph"
//           />

//           <DocumentUploadField
//             label="Aadhaar Card"
//           />

//           <DocumentUploadField
//             label="PAN Card"
//           />

//           <DocumentUploadField
//             label="Joining Letter"
//           />

//           <DocumentUploadField
//             label="Service Book"
//           />

//           <DocumentUploadField
//             label="Educational Certificates"
//           />

//           <DocumentUploadField
//             label="Promotion Orders"
//           />

//           <DocumentUploadField
//             label="Transfer Orders"
//           />

//           <DocumentUploadField
//             label="Training Certificates"
//           />

//           <DocumentUploadField
//             label="Identity Card Copy"
//           />

//         </div>

//       </div>

//       {/* OFFICIAL CREDENTIALS */}

//       <div className="mb-10">

//         <h3 className="text-lg font-semibold text-slate-700 mb-4">
//           Official Credentials
//         </h3>

//         <div
//           className="
//           grid
//           md:grid-cols-2
//           gap-4
//           "
//         >

//           <input
//             placeholder="Official Email ID"
//             className="border rounded-xl p-3"
//           />

//           <input
//             placeholder="HRMS Login ID"
//             className="border rounded-xl p-3"
//           />

//           <input
//             placeholder="eOffice Login ID"
//             className="border rounded-xl p-3"
//           />

//           <input
//             placeholder="Employee Identity Card Number"
//             className="border rounded-xl p-3"
//           />

//           <input
//             placeholder="Digital Signature Number"
//             className="border rounded-xl p-3"
//           />

//           <input
//             placeholder="Biometric Employee Code"
//             className="border rounded-xl p-3"
//           />

//         </div>

//       </div>

//       {/* SYSTEM ACCESS */}

//       <div className="mb-10">

//         <h3 className="text-lg font-semibold text-slate-700 mb-4">
//           System Access
//         </h3>

//         <div
//           className="
//           grid
//           md:grid-cols-3
//           gap-4
//           "
//         >

//           <label
//             className="
//             flex
//             items-center
//             gap-3
//             bg-slate-50
//             p-4
//             rounded-xl
//             "
//           >
//             <input type="checkbox" />
//             HRMS Access
//           </label>

//           <label
//             className="
//             flex
//             items-center
//             gap-3
//             bg-slate-50
//             p-4
//             rounded-xl
//             "
//           >
//             <input type="checkbox" />
//             Payroll Access
//           </label>

//           <label
//             className="
//             flex
//             items-center
//             gap-3
//             bg-slate-50
//             p-4
//             rounded-xl
//             "
//           >
//             <input type="checkbox" />
//             eOffice Access
//           </label>

//           <label
//             className="
//             flex
//             items-center
//             gap-3
//             bg-slate-50
//             p-4
//             rounded-xl
//             "
//           >
//             <input type="checkbox" />
//             Admin Access
//           </label>

//           <label
//             className="
//             flex
//             items-center
//             gap-3
//             bg-slate-50
//             p-4
//             rounded-xl
//             "
//           >
//             <input type="checkbox" />
//             Attendance System
//           </label>

//           <label
//             className="
//             flex
//             items-center
//             gap-3
//             bg-slate-50
//             p-4
//             rounded-xl
//             "
//           >
//             <input type="checkbox" />
//             Leave Management
//           </label>

//         </div>

//       </div>

//       {/* REMARKS */}

//       <div>

//         <h3 className="text-lg font-semibold text-slate-700 mb-4">
//           Additional Notes
//         </h3>

//         <textarea
//           rows={5}
//           placeholder="Any additional remarks regarding documents or credentials..."
//           className="
//           w-full
//           border
//           rounded-xl
//           p-4
//           "
//         />

//       </div>

//     </>
//   );
// }











import { useState } from "react";

import PersonalDetailsStep from "./steps/PersonalDetailsStep";
import EmploymentDetailsStep from "./steps/EmploymentDetailsStep";
import OrganizationDetailsStep from "./steps/OrganizationDetailsStep";
import LocationDetailsStep from "./steps/LocationDetailsStep";
import AddressDetailsStep from "./steps/AddressDetailsStep";
import BankDetailsStep from "./steps/BankDetailsStep";
import FamilyDetailsStep from "./steps/FamilyDetailsStep";
import DocumentsStep from "./steps/DocumentsStep";
export interface EmployeeFormData {
  employeeCode: string;

  title: string;

  firstName: string;
  lastName: string;

  gender: string;

  dateOfBirth: string;

  email: string;
  mobileNumber: string;

  dateOfJoining: string;

  employmentType: string;

  position: string;

  educationLevelId: string;

  priorExperience: number;

  civilServiceCardId: string;
  socialSecurityNumber: string;

  ministryId: string;
  departmentId: string;
  division: string;

  countryKey: string;
  provinceKey: string;
  districtKey: string;

  houseNo: string;
  street: string;
  area: string;
  provinceOfResidence: string;
  pinCode: string;
  country: string;

  branchId: string;

  accountNumber: string;

  hasSpouse: boolean;

  noOfEligibleChildren: number;

  photograph?: File | null;
  nationalId?: File | null;
  educationCertificate?: File | null;
}

const steps = [
  "Personal",
  "Employment",
  "Organization",
  "Location",
  "Address",
  "Bank",
  "Family",
  "Documents",
];

export default function EmployeeWizardPage() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] =
    useState<EmployeeFormData>({
      employeeCode: "",

      title: "MR",

      firstName: "",
      lastName: "",

      gender: "MALE",

      dateOfBirth: "",

      email: "",
      mobileNumber: "",

      dateOfJoining: "",

      employmentType: "PERMANENT",

      position: "",

      educationLevelId: "",

      priorExperience: 0,

      civilServiceCardId: "",
      socialSecurityNumber: "",

      ministryId: "",
      departmentId: "",
      division: "",

      countryKey: "",
      provinceKey: "",
      districtKey: "",

      houseNo: "",
      street: "",
      area: "",
      provinceOfResidence: "",
      pinCode: "",
      country: "",

      branchId: "",

      accountNumber: "",

      hasSpouse: false,

      noOfEligibleChildren: 0,

      photograph: null,
      nationalId: null,
      educationCertificate: null,
    });

  const updateField = (
    field: keyof EmployeeFormData,
    value: any
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const nextStep = () => {
    if (step < steps.length) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const submitEmployee = async () => {
    try {
      const payload = {
        employeeCode: formData.employeeCode,

        title: formData.title,

        firstName: formData.firstName,
        lastName: formData.lastName,

        gender: formData.gender,

        dateOfBirth: formData.dateOfBirth,

        email: formData.email,
        mobileNumber: formData.mobileNumber,

        dateOfJoining: formData.dateOfJoining,

        employmentType: formData.employmentType,

        position: formData.position,

        educationLevelId:
          formData.educationLevelId,

        priorExperience:
          Number(formData.priorExperience),

        civilServiceCardId:
          formData.civilServiceCardId,

        socialSecurityNumber:
          formData.socialSecurityNumber,

        ministryId: formData.ministryId,

        departmentId:
          formData.departmentId,

        division: formData.division,

        countryKey:
          formData.countryKey,

        provinceKey:
          formData.provinceKey,

        districtKey:
          formData.districtKey,

        address: {
          houseNo: formData.houseNo,
          street: formData.street,
          area: formData.area,

          provinceOfResidence:
            formData.provinceOfResidence,

          pinCode: formData.pinCode,

          country: formData.country,
        },

        branchId: formData.branchId,

        accountNumber:
          formData.accountNumber,

        hasSpouse:
          formData.hasSpouse,

        noOfEligibleChildren:
          Number(
            formData.noOfEligibleChildren
          ),
      };

      console.log(payload);

      alert(
        "Employee payload ready. Connect API here."
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="space-y-6">

      <div className="bg-white rounded-3xl shadow-lg p-6">
        <h1 className="text-3xl font-bold">
          Employee Registration
        </h1>

        <p className="text-slate-500 mt-2">
          Complete employee onboarding.
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-lg p-6">
        <div className="flex flex-wrap gap-3">

          {steps.map((item, index) => (
            <div
              key={item}
              className={`
              px-4
              py-2
              rounded-xl
              text-sm
              font-semibold

              ${
                step === index + 1
                  ? "bg-indigo-600 text-white"
                  : "bg-slate-100 text-slate-600"
              }
              `}
            >
              {index + 1}. {item}
            </div>
          ))}

        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-lg p-8">

  {step === 1 && (
    <PersonalDetailsStep
      formData={formData}
      updateField={updateField}
    />
  )}

  {step === 2 && (
    <EmploymentDetailsStep
      formData={formData}
      updateField={updateField}
    />
  )}

  {step === 3 && (
    <OrganizationDetailsStep
      formData={formData}
      updateField={updateField}
    />
  )}

  {/* LOCATION */}

  {step === 4 && (
    <LocationDetailsStep
      formData={formData}
      updateField={updateField}
    />
  )}

  {/* ADDRESS */}

  {step === 5 && (
    <AddressDetailsStep
      formData={formData}
      updateField={updateField}
    />
  )}

  {/* BANK */}

  {step === 6 && (
    <BankDetailsStep
      formData={formData}
      updateField={updateField}
    />
  )}

  {/* FAMILY */}

  {step === 7 && (
    <FamilyDetailsStep
      formData={formData}
      updateField={updateField}
    />
  )}

  {/* DOCUMENTS */}

  {step === 8 && (
    <DocumentsStep
      formData={formData}
      updateField={updateField}
    />
  )}

</div>
      <div className="flex justify-between">

        <button
          onClick={prevStep}
          disabled={step === 1}
          className="
          px-6
          py-3
          rounded-xl
          bg-slate-200
          disabled:opacity-50
          "
        >
          Previous
        </button>

        {step < steps.length ? (
          <button
            onClick={nextStep}
            className="
            px-6
            py-3
            rounded-xl
            bg-indigo-600
            text-white
            "
          >
            Next
          </button>
        ) : (
          <button
            onClick={submitEmployee}
            className="
            px-6
            py-3
            rounded-xl
            bg-green-600
            text-white
            "
          >
            Save Employee
          </button>
        )}

      </div>

    </div>
  );
}