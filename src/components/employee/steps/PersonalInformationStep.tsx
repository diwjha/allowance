import { EmployeeRequestDto } from "../../../types/employeeApi";

interface Props {
  formData: EmployeeRequestDto;
  updateField: (
    field: keyof EmployeeRequestDto,
    value: any
  ) => void;
}

export default function PersonalInformationStep({
  formData,
  updateField,
}: Props) {
  return (
    <div>

      <h2 className="text-2xl font-bold mb-6">
        Personal Information
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        <div>
          <label className="block mb-2 font-medium">
            Employee Code
          </label>

          <input
            value={formData.employeeCode}
            onChange={(e) =>
              updateField(
                "employeeCode",
                e.target.value
              )
            }
            className="border rounded-xl p-3 w-full"
            placeholder="EMP001"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Title
          </label>

          <select
            value={formData.title}
            onChange={(e) =>
              updateField(
                "title",
                e.target.value
              )
            }
            className="border rounded-xl p-3 w-full"
          >
            <option value="MR">MR</option>
            <option value="MS">MS</option>
            <option value="MRS">MRS</option>
            <option value="DR">DR</option>
            <option value="PROF">PROF</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-medium">
            First Name
          </label>

          <input
            value={formData.firstName}
            onChange={(e) =>
              updateField(
                "firstName",
                e.target.value
              )
            }
            className="border rounded-xl p-3 w-full"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Last Name
          </label>

          <input
            value={formData.lastName}
            onChange={(e) =>
              updateField(
                "lastName",
                e.target.value
              )
            }
            className="border rounded-xl p-3 w-full"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Gender
          </label>

          <select
            value={formData.gender}
            onChange={(e) =>
              updateField(
                "gender",
                e.target.value
              )
            }
            className="border rounded-xl p-3 w-full"
          >
            <option value="MALE">
              Male
            </option>

            <option value="FEMALE">
              Female
            </option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Date Of Birth
          </label>

          <input
            type="date"
            value={formData.dateOfBirth}
            onChange={(e) =>
              updateField(
                "dateOfBirth",
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