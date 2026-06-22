// import { EmployeeFormData } from "../EmployeeWizardPage";

// interface Props {
//   formData: EmployeeFormData;
//   updateField: (
//     field: keyof EmployeeFormData,
//     value: any
//   ) => void;
// }

// export default function PersonalDetailsStep({
//   formData,
//   updateField,
// }: Props) {
//   return (
//     <>
//       <h2 className="text-2xl font-bold mb-6">
//         Personal Details
//       </h2>

//       <div className="grid md:grid-cols-3 gap-4">

//         {/* TITLE */}

//         <div>
//           <label className="block mb-2 font-medium">
//             Title
//           </label>

//           <select
//             value={formData.title}
//             onChange={(e) =>
//               updateField("title", e.target.value)
//             }
//             className="border rounded-xl p-3 w-full"
//           >
//             <option value="MR">Mr</option>
//             <option value="MS">Ms</option>
//             <option value="MRS">Mrs</option>
//             <option value="DR">Dr</option>
//             <option value="PROF">Prof</option>
//           </select>
//         </div>

//         {/* FIRST NAME */}

//         <div>
//           <label className="block mb-2 font-medium">
//             First Name
//           </label>

//           <input
//             value={formData.firstName}
//             onChange={(e) =>
//               updateField(
//                 "firstName",
//                 e.target.value
//               )
//             }
//             placeholder="First Name"
//             className="border rounded-xl p-3 w-full"
//           />
//         </div>

//         {/* LAST NAME */}

//         <div>
//           <label className="block mb-2 font-medium">
//             Last Name
//           </label>

//           <input
//             value={formData.lastName}
//             onChange={(e) =>
//               updateField(
//                 "lastName",
//                 e.target.value
//               )
//             }
//             placeholder="Last Name"
//             className="border rounded-xl p-3 w-full"
//           />
//         </div>

//         {/* GENDER */}

//         <div>
//           <label className="block mb-2 font-medium">
//             Gender
//           </label>

//           <select
//             value={formData.gender}
//             onChange={(e) =>
//               updateField(
//                 "gender",
//                 e.target.value
//               )
//             }
//             className="border rounded-xl p-3 w-full"
//           >
//             <option value="MALE">
//               Male
//             </option>

//             <option value="FEMALE">
//               Female
//             </option>
//           </select>
//         </div>

//         {/* DOB */}

//         <div>
//           <label className="block mb-2 font-medium">
//             Date Of Birth
//           </label>

//           <input
//             type="date"
//             value={formData.dateOfBirth}
//             onChange={(e) =>
//               updateField(
//                 "dateOfBirth",
//                 e.target.value
//               )
//             }
//             className="border rounded-xl p-3 w-full"
//           />
//         </div>

//         {/* EMAIL */}

//         <div>
//           <label className="block mb-2 font-medium">
//             Email
//           </label>

//           <input
//             type="email"
//             value={formData.email}
//             onChange={(e) =>
//               updateField(
//                 "email",
//                 e.target.value
//               )
//             }
//             placeholder="Email"
//             className="border rounded-xl p-3 w-full"
//           />
//         </div>

//         {/* MOBILE */}

//         <div>
//           <label className="block mb-2 font-medium">
//             Mobile Number
//           </label>

//           <input
//             value={formData.mobileNumber}
//             onChange={(e) =>
//               updateField(
//                 "mobileNumber",
//                 e.target.value
//               )
//             }
//             placeholder="Mobile Number"
//             className="border rounded-xl p-3 w-full"
//           />
//         </div>

//         {/* SOCIAL SECURITY */}

//         <div>
//           <label className="block mb-2 font-medium">
//             Social Security Number
//           </label>

//           <input
//             value={
//               formData.socialSecurityNumber
//             }
//             onChange={(e) =>
//               updateField(
//                 "socialSecurityNumber",
//                 e.target.value
//               )
//             }
//             placeholder="Social Security Number"
//             className="border rounded-xl p-3 w-full"
//           />
//         </div>

//         {/* CIVIL SERVICE CARD */}

//         <div>
//           <label className="block mb-2 font-medium">
//             Civil Service Card ID
//           </label>

//           <input
//             value={
//               formData.civilServiceCardId
//             }
//             onChange={(e) =>
//               updateField(
//                 "civilServiceCardId",
//                 e.target.value
//               )
//             }
//             placeholder="Civil Service Card ID"
//             className="border rounded-xl p-3 w-full"
//           />
//         </div>

//       </div>

//       {/* PHOTO */}

//       <div className="mt-8">

//         <label className="block mb-3 font-semibold">
//           Employee Photograph
//         </label>

//         <input
//           type="file"
//           accept="image/*"
//           onChange={(e) =>
//             updateField(
//               "photograph",
//               e.target.files?.[0] || null
//             )
//           }
//           className="
//           border
//           rounded-xl
//           p-3
//           w-full
//           "
//         />

//         {formData.photograph && (
//           <p className="text-green-600 mt-2">
//             Selected:
//             {" "}
//             {formData.photograph.name}
//           </p>
//         )}

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

export default function PersonalDetailsStep({
  formData,
  updateField,
}: Props) {
  return (
    <>
      <h2 className="h4 fw-bold mb-4">
        Personal Details
      </h2>

      <div className="row">

        {/* EMPLOYEE CODE */}

        <div className="col-md-4 mb-3">
          <label className="form-label fw-medium">
            Employee Code
          </label>

          <input
            value={formData.employeeCode}
            onChange={(e) =>
              updateField(
                "employeeCode",
                e.target.value
              )
            }
            placeholder="LAO00005"
            className="form-control form-control-sm"
          />
        </div>

        {/* TITLE */}

        <div className="col-md-4 mb-3">
          <label className="form-label fw-medium">
            Title
          </label>

          <select
            value={formData.title}
            onChange={(e) =>
              updateField("title", e.target.value)
            }
            className="form-select form-select-sm"
          >
            <option value="MR">Mr</option>
            <option value="MS">Ms</option>
            <option value="MRS">Mrs</option>
            <option value="DR">Dr</option>
            <option value="PROF">Prof</option>
          </select>
        </div>

        {/* FIRST NAME */}

        <div className="col-md-4 mb-3">
          <label className="form-label fw-medium">
            First Name
          </label>

          <input
            value={formData.firstName}
            onChange={(e) =>
              updateField(
                "firstName",
                e.target.value
              )
            }
            placeholder="First Name"
            className="form-control form-control-sm"
          />
        </div>

        {/* LAST NAME */}

        <div className="col-md-4 mb-3">
          <label className="form-label fw-medium">
            Last Name
          </label>

          <input
            value={formData.lastName}
            onChange={(e) =>
              updateField(
                "lastName",
                e.target.value
              )
            }
            placeholder="Last Name"
            className="form-control form-control-sm"
          />
        </div>

        {/* GENDER */}

        <div className="col-md-4 mb-3">
          <label className="form-label fw-medium">
            Gender
          </label>

          <select
            value={formData.gender}
            onChange={(e) =>
              updateField(
                "gender",
                e.target.value
              )
            }
            className="form-select form-select-sm"
          >
            <option value="MALE">
              Male
            </option>

            <option value="FEMALE">
              Female
            </option>
          </select>
        </div>

        {/* DOB */}

        <div className="col-md-4 mb-3">
          <label className="form-label fw-medium">
            Date Of Birth
          </label>

          <input
            type="date"
            value={formData.dateOfBirth}
            onChange={(e) =>
              updateField(
                "dateOfBirth",
                e.target.value
              )
            }
            className="form-control form-control-sm"
          />
        </div>

        {/* EMAIL */}

        <div className="col-md-6 mb-3">
          <label className="form-label fw-medium">
            Email
          </label>

          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              updateField(
                "email",
                e.target.value
              )
            }
            placeholder="Email"
            className="form-control form-control-sm"
          />
        </div>

        {/* MOBILE */}

        <div className="col-md-6 mb-3">
          <label className="form-label fw-medium">
            Mobile Number
          </label>

          <input
            value={formData.mobileNumber}
            onChange={(e) =>
              updateField(
                "mobileNumber",
                e.target.value
              )
            }
            placeholder="Mobile Number"
            className="form-control form-control-sm"
          />
        </div>

        {/* SOCIAL SECURITY */}

        <div className="col-md-6 mb-3">
          <label className="form-label fw-medium">
            Social Security Number
          </label>

          <input
            value={
              formData.socialSecurityNumber
            }
            onChange={(e) =>
              updateField(
                "socialSecurityNumber",
                e.target.value
              )
            }
            placeholder="Social Security Number"
            className="form-control form-control-sm"
          />
        </div>

        {/* CIVIL SERVICE CARD */}

        <div className="col-md-6 mb-3">
          <label className="form-label fw-medium">
            Civil Service Card ID
          </label>

          <input
            value={
              formData.civilServiceCardId
            }
            onChange={(e) =>
              updateField(
                "civilServiceCardId",
                e.target.value
              )
            }
            placeholder="Civil Service Card ID"
            className="form-control form-control-sm"
          />
        </div>

      </div>

      {/* PHOTO */}

      <div className="mt-4">

        <label className="form-label fw-bold">
          Employee Photograph
        </label>

        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            updateField(
              "photograph",
              e.target.files?.[0] || null
            )
          }
          className="form-control form-control-sm"
        />

        {formData.photograph && (
          <p className="text-success small mt-2">
            Selected:{" "}
            {formData.photograph.name}
          </p>
        )}

      </div>
    </>
  );
}