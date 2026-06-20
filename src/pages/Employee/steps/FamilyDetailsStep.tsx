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
      <h2 className="text-2xl font-bold mb-6">
        Family Details
      </h2>

      <div className="space-y-5">

        <label className="flex items-center gap-3">

          <input
            type="checkbox"
            checked={formData.hasSpouse}
            onChange={(e) =>
              updateField(
                "hasSpouse",
                e.target.checked
              )
            }
          />

          Has Spouse

        </label>

        <input
          type="number"
          value={
            formData.noOfEligibleChildren
          }
          onChange={(e) =>
            updateField(
              "noOfEligibleChildren",
              Number(e.target.value)
            )
          }
          placeholder="No Of Eligible Children"
          className="border rounded-xl p-3 w-full"
        />

      </div>
    </>
  );
}