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

      <h2 className="text-2xl font-bold mb-6">
        Contact Information
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        <div>
          <label className="block mb-2">
            Email
          </label>

          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              updateField(
                "email",
                e.target.value
              )
            }
            className="border rounded-xl p-3 w-full"
          />
        </div>

        <div>
          <label className="block mb-2">
            Mobile Number
          </label>

          <input
            value={formData.mobileNumber}
            onChange={(e) =>
              updateField(
                "mobileNumber",
                e.target.value
              )
            }
            className="border rounded-xl p-3 w-full"
          />
        </div>

      </div>

      <div className="mt-8">

        <h3 className="font-semibold text-lg mb-4">
          Address Information
        </h3>

        <div className="grid md:grid-cols-2 gap-4">

          <input
            placeholder="House Number"
            value={formData.address.houseNo}
            onChange={(e) =>
              updateAddressField(
                "houseNo",
                e.target.value
              )
            }
            className="border rounded-xl p-3"
          />

          <input
            placeholder="Street"
            value={formData.address.street}
            onChange={(e) =>
              updateAddressField(
                "street",
                e.target.value
              )
            }
            className="border rounded-xl p-3"
          />

          <input
            placeholder="Area"
            value={formData.address.area}
            onChange={(e) =>
              updateAddressField(
                "area",
                e.target.value
              )
            }
            className="border rounded-xl p-3"
          />

          <input
            placeholder="Province Of Residence"
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
            className="border rounded-xl p-3"
          />

          <input
            placeholder="Pin Code"
            value={formData.address.pinCode}
            onChange={(e) =>
              updateAddressField(
                "pinCode",
                e.target.value
              )
            }
            className="border rounded-xl p-3"
          />

          <input
            placeholder="Country"
            value={formData.address.country}
            onChange={(e) =>
              updateAddressField(
                "country",
                e.target.value
              )
            }
            className="border rounded-xl p-3"
          />

        </div>

      </div>

    </div>
  );
}