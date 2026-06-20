import { EmployeeRequestDto } from "../../../types/employeeApi";

interface Props {
  formData: EmployeeRequestDto;

  updateField: (
    field: keyof EmployeeRequestDto,
    value: any
  ) => void;
}

export default function GovernmentDetailsStep({
  formData,
  updateField,
}: Props) {
  return (
    <div>

      <h2 className="text-2xl font-bold mb-6">
        Government Details
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        <div>
          <label className="block mb-2">
            Civil Service Card ID
          </label>

          <input
            value={formData.civilServiceCardId}
            onChange={(e) =>
              updateField(
                "civilServiceCardId",
                e.target.value
              )
            }
            className="border rounded-xl p-3 w-full"
          />
        </div>

        <div>
          <label className="block mb-2">
            Social Security Number
          </label>

          <input
            value={formData.socialSecurityNumber}
            onChange={(e) =>
              updateField(
                "socialSecurityNumber",
                e.target.value
              )
            }
            className="border rounded-xl p-3 w-full"
          />
        </div>

      </div>

    </div>
  );
}