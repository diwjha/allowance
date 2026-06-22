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
      <h2 className="text-2xl font-bold mb-6">
        Address Details
      </h2>

      <div className="grid md:grid-cols-2 gap-5">

        <div>
          <label className="block mb-2 font-medium">
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
            className="border rounded-xl p-3 w-full"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
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
            className="border rounded-xl p-3 w-full"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
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
            className="border rounded-xl p-3 w-full"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
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
            className="border rounded-xl p-3 w-full"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
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
            className="border rounded-xl p-3 w-full"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
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
            className="border rounded-xl p-3 w-full"
          />
        </div>

      </div>
    </>
  );
}