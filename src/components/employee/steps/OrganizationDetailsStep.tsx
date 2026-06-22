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

      <h4 className="fw-bold mb-4">
        Organization Details
      </h4>

      <div className="row">

        <div className="col-md-6 mb-3">
          <label className="form-label">
            Ministry ID
          </label>

          <input
            className="form-control form-control-sm"
            value={formData.ministryId}
            onChange={(e) =>
              updateField(
                "ministryId",
                e.target.value
              )
            }
          />
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label">
            Department ID
          </label>

          <input
            className="form-control form-control-sm"
            value={formData.departmentId}
            onChange={(e) =>
              updateField(
                "departmentId",
                e.target.value
              )
            }
          />
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label">
            Division
          </label>

          <input
            className="form-control form-control-sm"
            value={formData.division}
            onChange={(e) =>
              updateField(
                "division",
                e.target.value
              )
            }
          />
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label">
            Country Key
          </label>

          <input
            className="form-control form-control-sm"
            value={formData.countryKey}
            onChange={(e) =>
              updateField(
                "countryKey",
                e.target.value
              )
            }
          />
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label">
            Province Key
          </label>

          <input
            className="form-control form-control-sm"
            value={formData.provinceKey}
            onChange={(e) =>
              updateField(
                "provinceKey",
                e.target.value
              )
            }
          />
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label">
            District Key
          </label>

          <input
            className="form-control form-control-sm"
            value={formData.districtKey}
            onChange={(e) =>
              updateField(
                "districtKey",
                e.target.value
              )
            }
          />
        </div>

      </div>

    </div>
  );
}