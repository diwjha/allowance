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

      <h4 className="fw-bold mb-4">
        Personal Information
      </h4>

      <div className="row">

        <div className="col-md-6 mb-3">
          <label className="form-label fw-medium">
            Employee Code
          </label>

          <input
            className="form-control form-control-sm"
            value={formData.employeeCode}
            onChange={(e) =>
              updateField(
                "employeeCode",
                e.target.value
              )
            }
            placeholder="EMP001"
          />
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label fw-medium">
            Title
          </label>

          <select
            className="form-select form-select-sm"
            value={formData.title}
            onChange={(e) =>
              updateField(
                "title",
                e.target.value
              )
            }
          >
            <option value="MR">MR</option>
            <option value="MS">MS</option>
            <option value="MRS">MRS</option>
            <option value="DR">DR</option>
            <option value="PROF">PROF</option>
          </select>
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label fw-medium">
            First Name
          </label>

          <input
            className="form-control form-control-sm"
            value={formData.firstName}
            onChange={(e) =>
              updateField(
                "firstName",
                e.target.value
              )
            }
          />
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label fw-medium">
            Last Name
          </label>

          <input
            className="form-control form-control-sm"
            value={formData.lastName}
            onChange={(e) =>
              updateField(
                "lastName",
                e.target.value
              )
            }
          />
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label fw-medium">
            Gender
          </label>

          <select
            className="form-select form-select-sm"
            value={formData.gender}
            onChange={(e) =>
              updateField(
                "gender",
                e.target.value
              )
            }
          >
            <option value="MALE">
              Male
            </option>

            <option value="FEMALE">
              Female
            </option>
          </select>
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label fw-medium">
            Date Of Birth
          </label>

          <input
            type="date"
            className="form-control form-control-sm"
            value={formData.dateOfBirth}
            onChange={(e) =>
              updateField(
                "dateOfBirth",
                e.target.value
              )
            }
          />
        </div>

      </div>

    </div>
  );
}