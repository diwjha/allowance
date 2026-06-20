import { EmployeeRequestDto } from "../../../types/employeeApi";

interface Props {
  formData: EmployeeRequestDto;

  updateField: (
    field: keyof EmployeeRequestDto,
    value: any
  ) => void;
}

export default function FamilyInformationStep({
  formData,
  updateField,
}: Props) {
  return (
    <div>

      <h2 className="text-2xl font-bold mb-6">
        Family Information
      </h2>

      <div className="space-y-6">

        <div
          className="
          border
          rounded-2xl
          p-5
          "
        >
          <label className="flex items-center gap-4">

            <input
              type="checkbox"
              checked={formData.hasSpouse}
              onChange={(e) =>
                updateField(
                  "hasSpouse",
                  e.target.checked
                )
              }
              className="h-5 w-5"
            />

            <span className="font-medium">
              Employee Has Spouse
            </span>

          </label>
        </div>

        <div>

          <label className="block mb-2 font-medium">
            Number Of Eligible Children
          </label>

          <input
            type="number"
            min={0}
            value={formData.noOfEligibleChildren}
            onChange={(e) =>
              updateField(
                "noOfEligibleChildren",
                Number(e.target.value)
              )
            }
            className="
            border
            rounded-xl
            p-3
            w-full
            "
          />

        </div>

      </div>

    </div>
  );
}