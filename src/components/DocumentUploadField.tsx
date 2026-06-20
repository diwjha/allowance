type DocumentUploadFieldProps = {
  label: string;
};

export default function DocumentUploadField({
  label,
}: DocumentUploadFieldProps) {
  return (
    <div
      className="
      border
      border-dashed
      border-slate-300
      rounded-2xl
      p-5
      bg-slate-50
      "
    >
      <label
        className="
        block
        text-sm
        font-semibold
        text-slate-700
        mb-3
        "
      >
        {label}
      </label>

      <input
        type="file"
        className="
        w-full
        border
        rounded-xl
        p-3
        bg-white
        "
      />
    </div>
  );
}