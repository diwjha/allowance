// import { EmployeeFormData } from "../EmployeeWizardPage";

// interface Props {
//   formData: EmployeeFormData;
//   updateField: (
//     field: keyof EmployeeFormData,
//     value: any
//   ) => void;
// }

// export default function BankDetailsStep({
//   formData,
//   updateField,
// }: Props) {
//   return (
//     <>
//       <h2 className="text-2xl font-bold mb-6">
//         Bank Details
//       </h2>

//       <div className="grid md:grid-cols-2 gap-4">

//         <input
//           placeholder="Account Number"
//           value={formData.accountNumber}
//           onChange={(e) =>
//             updateField(
//               "accountNumber",
//               e.target.value
//             )
//           }
//           className="border rounded-xl p-3"
//         />

//       </div>
//     </>
//   );
// }


import { EmployeeFormData } from "../EmployeeWizardPage";

interface Props {
  formData: EmployeeFormData;
  updateField: (
    field: keyof EmployeeFormData,
    value: any
  ) => void;
}

export default function BankDetailsStep({
  formData,
  updateField,
}: Props) {
  return (
    <>
      <h2 className="text-2xl font-bold mb-6">
        Bank Details
      </h2>

      <div className="grid md:grid-cols-2 gap-5">

        <div>
          <label className="block mb-2 font-medium">
            Account Number
          </label>

          <input
            type="text"
            value={formData.accountNumber}
            onChange={(e) =>
              updateField(
                "accountNumber",
                e.target.value
              )
            }
            placeholder="Enter Account Number"
            className="
              border
              rounded-xl
              p-3
              w-full
            "
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Selected Branch
          </label>

          <input
            disabled
            value={
              formData.branchId || "No Branch Selected"
            }
            className="
              border
              rounded-xl
              p-3
              w-full
              bg-slate-100
              text-slate-500
            "
          />
        </div>

      </div>
    </>
  );
}