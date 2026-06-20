import DocumentUploadField from "../../../components/DocumentUploadField";

export default function DocumentsStep() {
  return (
    <>
      <h2 className="text-2xl font-bold mb-6">
        Documents
      </h2>

      <div className="grid md:grid-cols-2 gap-5">

        <DocumentUploadField
          label="Employee Photograph"
        />

        <DocumentUploadField
          label="Civil Service Card"
        />

        <DocumentUploadField
          label="National ID"
        />

        <DocumentUploadField
          label="Education Certificate"
        />

        <DocumentUploadField
          label="Joining Letter"
        />

      </div>
    </>
  );
}