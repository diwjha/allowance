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

      <h4 className="fw-bold mb-4">
        Employment Information
      </h4>

      <div className="row">

        <div className="col-md-6 mb-3">
          <label className="form-label">
            Date Of Joining
          </label>

          <input
            type="date"
            className="form-control form-control-sm"
            value={formData.dateOfJoining}
            onChange={(e) =>
              updateField(
                "dateOfJoining",
                e.target.value
              )
            }
          />
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label">
            Employment Type
          </label>

          <select
            className="form-select form-select-sm"
            value={formData.employmentType}
            onChange={(e) =>
              updateField(
                "employmentType",
                e.target.value
              )
            }
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

        <div className="col-md-6 mb-3">
          <label className="form-label">
            Position
          </label>

          <input
            className="form-control form-control-sm"
            value={formData.position}
            onChange={(e) =>
              updateField(
                "position",
                e.target.value
              )
            }
            placeholder="Software Engineer"
          />
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label">
            Branch Id
          </label>

          <input
            className="form-control form-control-sm"
            value={formData.branchId}
            onChange={(e) =>
              updateField(
                "branchId",
                e.target.value
              )
            }
          />
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label">
            Account Number
          </label>

          <input
            className="form-control form-control-sm"
            value={formData.accountNumber}
            onChange={(e) =>
              updateField(
                "accountNumber",
                e.target.value
              )
            }
          />
        </div>

      </div>

    </div>
  );
}