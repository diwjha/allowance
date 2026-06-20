import { EmployeeRequestDto } from "../../../types/employeeApi";

interface Props {
  formData: EmployeeRequestDto;

  updateField: (
    field: keyof EmployeeRequestDto,
    value: any
  ) => void;
}

export default function EmploymentInformationStep({
  formData,
  updateField,
}: Props) {
  return (
    <div>

      <h2 className="text-2xl font-bold mb-6">
        Employment Information
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        <div>
          <label className="block mb-2">
            Date Of Joining
          </label>

          <input
            type="date"
            value={formData.dateOfJoining}
            onChange={(e) =>
              updateField(
                "dateOfJoining",
                e.target.value
              )
            }
            className="border rounded-xl p-3 w-full"
          />
        </div>

        <div>
          <label className="block mb-2">
            Employment Type
          </label>

          <select
            value={formData.employmentType}
            onChange={(e) =>
              updateField(
                "employmentType",
                e.target.value
              )
            }
            className="border rounded-xl p-3 w-full"
          >
            <option value="PERMANENT">
              Permanent
            </option>

            <option value="PROBATIONARY">
              Probationary
            </option>

            <option value="INTERN">
              Intern
            </option>

            <option value="CONTRACT">
              Contract
            </option>
          </select>
        </div>

        <div>
          <label className="block mb-2">
            Position
          </label>

          <input
            value={formData.position}
            onChange={(e) =>
              updateField(
                "position",
                e.target.value
              )
            }
            className="border rounded-xl p-3 w-full"
            placeholder="Software Engineer"
          />
        </div>

        <div>
          <label className="block mb-2">
            Branch Id
          </label>

          <input
            value={formData.branchId}
            onChange={(e) =>
              updateField(
                "branchId",
                e.target.value
              )
            }
            className="border rounded-xl p-3 w-full"
          />
        </div>

        <div>
          <label className="block mb-2">
            Account Number
          </label>

          <input
            value={formData.accountNumber}
            onChange={(e) =>
              updateField(
                "accountNumber",
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