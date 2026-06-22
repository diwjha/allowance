import { EmployeeRequestDto } from "../../../types/employeeApi";

interface Props {
  formData: EmployeeRequestDto;

  updateField: (
    field: keyof EmployeeRequestDto,
    value: any
  ) => void;

  updateAddressField: (
    field: keyof EmployeeRequestDto["address"],
    value: string
  ) => void;
}

export default function ContactInformationStep({
  formData,
  updateField,
  updateAddressField,
}: Props) {
  return (
    <div>

      <h4 className="fw-bold mb-4">
        Contact Information
      </h4>

      <div className="row mb-4">

        <div className="col-md-6 mb-3">
          <label className="form-label">
            Email
          </label>

          <input
            type="email"
            className="form-control form-control-sm"
            value={formData.email}
            onChange={(e) =>
              updateField(
                "email",
                e.target.value
              )
            }
          />
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label">
            Mobile Number
          </label>

          <input
            className="form-control form-control-sm"
            value={formData.mobileNumber}
            onChange={(e) =>
              updateField(
                "mobileNumber",
                e.target.value
              )
            }
          />
        </div>

      </div>

      <div className="mt-4">

        <h5 className="fw-semibold mb-3">
          Address Information
        </h5>

        <div className="row">

          <div className="col-md-6 mb-3">
            <input
              placeholder="House Number"
              className="form-control form-control-sm"
              value={formData.address.houseNo}
              onChange={(e) =>
                updateAddressField(
                  "houseNo",
                  e.target.value
                )
              }
            />
          </div>

          <div className="col-md-6 mb-3">
            <input
              placeholder="Street"
              className="form-control form-control-sm"
              value={formData.address.street}
              onChange={(e) =>
                updateAddressField(
                  "street",
                  e.target.value
                )
              }
            />
          </div>

          <div className="col-md-6 mb-3">
            <input
              placeholder="Area"
              className="form-control form-control-sm"
              value={formData.address.area}
              onChange={(e) =>
                updateAddressField(
                  "area",
                  e.target.value
                )
              }
            />
          </div>

          <div className="col-md-6 mb-3">
            <input
              placeholder="Province Of Residence"
              className="form-control form-control-sm"
              value={
                formData.address
                  .provinceOfResidence
              }
              onChange={(e) =>
                updateAddressField(
                  "provinceOfResidence",
                  e.target.value
                )
              }
            />
          </div>

          <div className="col-md-6 mb-3">
            <input
              placeholder="Pin Code"
              className="form-control form-control-sm"
              value={formData.address.pinCode}
              onChange={(e) =>
                updateAddressField(
                  "pinCode",
                  e.target.value
                )
              }
            />
          </div>

          <div className="col-md-6 mb-3">
            <input
              placeholder="Country"
              className="form-control form-control-sm"
              value={formData.address.country}
              onChange={(e) =>
                updateAddressField(
                  "country",
                  e.target.value
                )
              }
            />
          </div>

        </div>

      </div>

    </div>
  );
}