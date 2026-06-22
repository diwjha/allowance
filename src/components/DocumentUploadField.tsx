type DocumentUploadFieldProps = {
  label: string;
};

export default function DocumentUploadField({
  label,
}: DocumentUploadFieldProps) {
  return (
    <div
      className="p-4 rounded border border-dashed"
      style={{
        borderColor: "#dee2e6",
        backgroundColor: "#f8f9fa",
      }}
    >
      <label className="form-label small fw-bold d-block mb-2">
        {label}
      </label>

      <input
        type="file"
        className="form-control form-control-sm"
      />
    </div>
  );
}