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

      <h4 className="fw-bold mb-4">
        Education & Experience
      </h4>

      <div className="row">

        <div className="col-md-6 mb-3">
          <label className="form-label">
            Education Level ID
          </label>

          <input
            className="form-control form-control-sm"
            value={formData.educationLevelId}
            onChange={(e) =>
              updateField(
                "educationLevelId",
                e.target.value
              )
            }
            placeholder="BACHELOR"
          />
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label">
            Prior Experience (Years)
          </label>

          <input
            type="number"
            className="form-control form-control-sm"
            value={formData.priorExperience}
            onChange={(e) =>
              updateField(
                "priorExperience",
                Number(e.target.value)
              )
            }
          />
        </div>

      </div>

    </div>
  );
}