import { EmployeeFormData } from "../EmployeeWizardPage";

interface Props {
  formData: EmployeeFormData;
  updateField: (
    field: keyof EmployeeFormData,
    value: any
  ) => void;
}

export default function LocationDetailsStep({
  formData,
  updateField,
}: Props) {
  return (
    <>
      <h2 className="text-2xl font-bold mb-6">
        Location Details
      </h2>

      <div className="grid md:grid-cols-3 gap-4">

        <input
          placeholder="Country Key"
          value={formData.countryKey}
          onChange={(e) =>
            updateField(
              "countryKey",
              e.target.value
            )
          }
          className="border rounded-xl p-3"
        />

        <input
          placeholder="Province Key"
          value={formData.provinceKey}
          onChange={(e) =>
            updateField(
              "provinceKey",
              e.target.value
            )
          }
          className="border rounded-xl p-3"
        />

        <input
          placeholder="District Key"
          value={formData.districtKey}
          onChange={(e) =>
            updateField(
              "districtKey",
              e.target.value
            )
          }
          className="border rounded-xl p-3"
        />

      </div>
    </>
  );
}