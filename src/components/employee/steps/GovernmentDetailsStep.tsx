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

      <h4 className="fw-bold mb-4">
        Government Details
      </h4>

      <div className="row">

        <div className="col-md-6 mb-3">
          <label className="form-label">
            Civil Service Card ID
          </label>

          <input
            className="form-control form-control-sm"
            value={formData.civilServiceCardId}
            onChange={(e) =>
              updateField(
                "civilServiceCardId",
                e.target.value
              )
            }
          />
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label">
            Social Security Number
          </label>

          <input
            className="form-control form-control-sm"
            value={formData.socialSecurityNumber}
            onChange={(e) =>
              updateField(
                "socialSecurityNumber",
                e.target.value
              )
            }
          />
        </div>

      </div>

    </div>
  );
}