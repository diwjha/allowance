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
      <h2 className="h4 fw-bold mb-4">
        Documents
      </h2>

      <div className="row">

        {/* Photograph */}

        <div className="col-md-6 mb-3">
          <label className="form-label fw-medium">
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
            <p className="text-success mt-2 small">
              {formData.photograph.name}
            </p>
          )}
        </div>

        {/* National ID */}

        <div className="col-md-6 mb-3">
          <label className="form-label fw-medium">
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
            className="form-control form-control-sm"
          />

          {formData.nationalId && (
            <p className="text-success mt-2 small">
              {formData.nationalId.name}
            </p>
          )}
        </div>

        {/* Education Certificate */}

        <div className="col-md-6 mb-3">
          <label className="form-label fw-medium">
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
            className="form-control form-control-sm"
          />

          {formData.educationCertificate && (
            <p className="text-success mt-2 small">
              {formData.educationCertificate.name}
            </p>
          )}
        </div>

      </div>
    </>
  );
}