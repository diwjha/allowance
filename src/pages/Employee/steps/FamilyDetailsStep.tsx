// import { EmployeeFormData } from "../EmployeeWizardPage";

// interface Props {
//   formData: EmployeeFormData;
//   updateField: (
//     field: keyof EmployeeFormData,
//     value: any
//   ) => void;
// }

// export default function FamilyDetailsStep({
//   formData,
//   updateField,
// }: Props) {
//   return (
//     <>
//       <h2 className="text-2xl font-bold mb-6">
//         Family Details
//       </h2>

//       <div className="space-y-5">

//         <label className="flex items-center gap-3">

//           <input
//             type="checkbox"
//             checked={formData.hasSpouse}
//             onChange={(e) =>
//               updateField(
//                 "hasSpouse",
//                 e.target.checked
//               )
//             }
//           />

//           Has Spouse

//         </label>

//         <input
//           type="number"
//           value={
//             formData.noOfEligibleChildren
//           }
//           onChange={(e) =>
//             updateField(
//               "noOfEligibleChildren",
//               Number(e.target.value)
//             )
//           }
//           placeholder="No Of Eligible Children"
//           className="border rounded-xl p-3 w-full"
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

export default function FamilyDetailsStep({
  formData,
  updateField,
}: Props) {
  return (
    <>
      <h2 className="h4 fw-bold mb-4">
        Family Details
      </h2>

      <div className="mb-3">

        {/* SPOUSE */}

        <div className="mb-4">
          <div className="form-check">
            <input
              type="checkbox"
              id="hasSpouse"
              checked={formData.hasSpouse}
              onChange={(e) =>
                updateField(
                  "hasSpouse",
                  e.target.checked
                )
              }
              className="form-check-input"
            />

            <label
              htmlFor="hasSpouse"
              className="form-check-label fw-medium"
            >
              Has Spouse
            </label>
          </div>
        </div>

        {/* CHILDREN */}

        <div>
          <label className="form-label fw-medium">
            Number Of Eligible Children
          </label>

          <input
            type="number"
            min={0}
            max={3}
            value={
              formData.noOfEligibleChildren
            }
            onChange={(e) =>
              updateField(
                "noOfEligibleChildren",
                Number(e.target.value)
              )
            }
            placeholder="0 - 3"
            className="form-control form-control-sm"
          />

          <p className="small text-muted mt-2">
            Maximum 3 children allowed.
          </p>
        </div>

      </div>
    </>
  );
}