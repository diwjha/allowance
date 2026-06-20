import { EmployeeRequestDto } from "../../../types/employeeApi";

interface Props {
  formData: EmployeeRequestDto;
  updateField: (
    field: keyof EmployeeRequestDto,
    value: any
  ) => void;
}

export default function EducationExperienceStep({
  formData,
  updateField,
}: Props) {
  return (
    <div>

      <h2 className="text-2xl font-bold mb-6">
        Education & Experience
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        <div>
          <label className="block mb-2">
            Education Level ID
          </label>

          <input
            value={formData.educationLevelId}
            onChange={(e) =>
              updateField(
                "educationLevelId",
                e.target.value
              )
            }
            className="border rounded-xl p-3 w-full"
            placeholder="BACHELOR"
          />
        </div>

        <div>
          <label className="block mb-2">
            Prior Experience (Years)
          </label>

          <input
            type="number"
            value={formData.priorExperience}
            onChange={(e) =>
              updateField(
                "priorExperience",
                Number(e.target.value)
              )
            }
            className="border rounded-xl p-3 w-full"
          />
        </div>

      </div>

    </div>
  );
}