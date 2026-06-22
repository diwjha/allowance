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
      <h2 className="h4 fw-bold mb-4">
        Bank Details
      </h2>

      <div className="row">

        <div className="col-md-6 mb-3">
          <label className="form-label fw-medium">
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
            className="form-control form-control-sm"
          />
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label fw-medium">
            Selected Branch
          </label>

          <input
            disabled
            value={
              formData.branchId || "No Branch Selected"
            }
            className="form-control form-control-sm"
            style={{backgroundColor: "#f8f9fa"}}
          />
        </div>

      </div>
    </>
  );
}