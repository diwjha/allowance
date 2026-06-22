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

      <h4 className="fw-bold mb-4">
        Family Information
      </h4>

      <div className="row">

        <div className="col-12 mb-3">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="hasSpouse"
              checked={formData.hasSpouse}
              onChange={(e) =>
                updateField(
                  "hasSpouse",
                  e.target.checked
                )
              }
            />

            <label
              className="form-check-label fw-medium"
              htmlFor="hasSpouse"
            >
              Employee Has Spouse
            </label>
          </div>
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label fw-medium">
            Number Of Eligible Children
          </label>

          <input
            type="number"
            min={0}
            className="form-control form-control-sm"
            value={formData.noOfEligibleChildren}
            onChange={(e) =>
              updateField(
                "noOfEligibleChildren",
                Number(e.target.value)
              )
            }
          />
        </div>

      </div>

    </div>
  );
}