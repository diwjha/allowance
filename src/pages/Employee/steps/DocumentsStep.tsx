// import DocumentUploadField from "../../../components/DocumentUploadField";

// export default function DocumentsStep() {
//   return (
//     <>
//       <h2 className="text-2xl font-bold mb-6">
//         Documents
//       </h2>

//       <div className="grid md:grid-cols-2 gap-5">

//         <DocumentUploadField
//           label="Employee Photograph"
//         />

//         <DocumentUploadField
//           label="Civil Service Card"
//         />

//         <DocumentUploadField
//           label="National ID"
//         />

//         <DocumentUploadField
//           label="Education Certificate"
//         />

//         <DocumentUploadField
//           label="Joining Letter"
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

export default function DocumentsStep({
  formData,
  updateField,
}: Props) {
  return (
    <>
      <h2 className="text-2xl font-bold mb-6">
        Documents
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        {/* Photograph */}

        <div>
          <label className="block mb-2 font-medium">
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
            className="border rounded-xl p-3 w-full"
          />

          {formData.photograph && (
            <p className="text-green-600 mt-2">
              {formData.photograph.name}
            </p>
          )}
        </div>

        {/* National ID */}

        <div>
          <label className="block mb-2 font-medium">
            National ID
          </label>

          <input
            type="file"
            onChange={(e) =>
              updateField(
                "nationalId",
                e.target.files?.[0] || null
              )
            }
            className="border rounded-xl p-3 w-full"
          />

          {formData.nationalId && (
            <p className="text-green-600 mt-2">
              {formData.nationalId.name}
            </p>
          )}
        </div>

        {/* Education Certificate */}

        <div>
          <label className="block mb-2 font-medium">
            Education Certificate
          </label>

          <input
            type="file"
            onChange={(e) =>
              updateField(
                "educationCertificate",
                e.target.files?.[0] || null
              )
            }
            className="border rounded-xl p-3 w-full"
          />

          {formData.educationCertificate && (
            <p className="text-green-600 mt-2">
              {formData.educationCertificate.name}
            </p>
          )}
        </div>

      </div>
    </>
  );
}