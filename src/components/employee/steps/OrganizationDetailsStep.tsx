import { EmployeeRequestDto } from "../../../types/employeeApi";

interface Props {
  formData: EmployeeRequestDto;
  updateField: (
    field: keyof EmployeeRequestDto,
    value: any
  ) => void;
}

export default function OrganizationDetailsStep({
  formData,
  updateField,
}: Props) {
  return (
    <div>

      <h2 className="text-2xl font-bold mb-6">
        Organization Details
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        <div>
          <label className="block mb-2">
            Ministry ID
          </label>

          <input
            value={formData.ministryId}
            onChange={(e) =>
              updateField(
                "ministryId",
                e.target.value
              )
            }
            className="border rounded-xl p-3 w-full"
          />
        </div>

        <div>
          <label className="block mb-2">
            Department ID
          </label>

          <input
            value={formData.departmentId}
            onChange={(e) =>
              updateField(
                "departmentId",
                e.target.value
              )
            }
            className="border rounded-xl p-3 w-full"
          />
        </div>

        <div>
          <label className="block mb-2">
            Division
          </label>

          <input
            value={formData.division}
            onChange={(e) =>
              updateField(
                "division",
                e.target.value
              )
            }
            className="border rounded-xl p-3 w-full"
          />
        </div>

        <div>
          <label className="block mb-2">
            Country Key
          </label>

          <input
            value={formData.countryKey}
            onChange={(e) =>
              updateField(
                "countryKey",
                e.target.value
              )
            }
            className="border rounded-xl p-3 w-full"
          />
        </div>

        <div>
          <label className="block mb-2">
            Province Key
          </label>

          <input
            value={formData.provinceKey}
            onChange={(e) =>
              updateField(
                "provinceKey",
                e.target.value
              )
            }
            className="border rounded-xl p-3 w-full"
          />
        </div>

        <div>
          <label className="block mb-2">
            District Key
          </label>

          <input
            value={formData.districtKey}
            onChange={(e) =>
              updateField(
                "districtKey",
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