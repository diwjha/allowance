// import { EmployeeFormData } from "../EmployeeWizardPage";

// interface Props {
//   formData: EmployeeFormData;
//   updateField: (
//     field: keyof EmployeeFormData,
//     value: any
//   ) => void;
// }

// export default function AddressDetailsStep({
//   formData,
//   updateField,
// }: Props) {
//   return (
//     <>
//       <h2 className="text-2xl font-bold mb-6">
//         Address Details
//       </h2>

//       <div className="grid md:grid-cols-2 gap-4">

//         <input
//           placeholder="House Number"
//           value={formData.houseNo}
//           onChange={(e) =>
//             updateField(
//               "houseNo",
//               e.target.value
//             )
//           }
//           className="border rounded-xl p-3"
//         />

//         <input
//           placeholder="Street"
//           value={formData.street}
//           onChange={(e) =>
//             updateField(
//               "street",
//               e.target.value
//             )
//           }
//           className="border rounded-xl p-3"
//         />

//         <input
//           placeholder="Area"
//           value={formData.area}
//           onChange={(e) =>
//             updateField(
//               "area",
//               e.target.value
//             )
//           }
//           className="border rounded-xl p-3"
//         />

//         <input
//           placeholder="Province Of Residence"
//           value={formData.provinceOfResidence}
//           onChange={(e) =>
//             updateField(
//               "provinceOfResidence",
//               e.target.value
//             )
//           }
//           className="border rounded-xl p-3"
//         />

//         <input
//           placeholder="Pin Code"
//           value={formData.pinCode}
//           onChange={(e) =>
//             updateField(
//               "pinCode",
//               e.target.value
//             )
//           }
//           className="border rounded-xl p-3"
//         />

//         <input
//           placeholder="Country"
//           value={formData.country}
//           onChange={(e) =>
//             updateField(
//               "country",
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

export default function AddressDetailsStep({
  formData,
  updateField,
}: Props) {
  return (
    <>
      <h2 className="h4 fw-bold mb-4">
        Address Details
      </h2>

      <div className="row">

        <div className="col-md-6 mb-3">
          <label className="form-label fw-medium">
            House Number
          </label>

          <input
            value={formData.houseNo}
            onChange={(e) =>
              updateField(
                "houseNo",
                e.target.value
              )
            }
            placeholder="House Number"
            className="form-control form-control-sm"
          />
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label fw-medium">
            Street
          </label>

          <input
            value={formData.street}
            onChange={(e) =>
              updateField(
                "street",
                e.target.value
              )
            }
            placeholder="Street"
            className="form-control form-control-sm"
          />
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label fw-medium">
            Area
          </label>

          <input
            value={formData.area}
            onChange={(e) =>
              updateField(
                "area",
                e.target.value
              )
            }
            placeholder="Area"
            className="form-control form-control-sm"
          />
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label fw-medium">
            Province Of Residence
          </label>

          <input
            value={formData.provinceOfResidence}
            onChange={(e) =>
              updateField(
                "provinceOfResidence",
                e.target.value
              )
            }
            placeholder="Province Of Residence"
            className="form-control form-control-sm"
          />
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label fw-medium">
            Pin Code
          </label>

          <input
            value={formData.pinCode}
            onChange={(e) =>
              updateField(
                "pinCode",
                e.target.value
              )
            }
            placeholder="Pin Code"
            className="form-control form-control-sm"
          />
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label fw-medium">
            Country
          </label>

          <input
            value={formData.country}
            onChange={(e) =>
              updateField(
                "country",
                e.target.value
              )
            }
            placeholder="Country"
            className="form-control form-control-sm"
          />
        </div>

      </div>
    </>
  );
}