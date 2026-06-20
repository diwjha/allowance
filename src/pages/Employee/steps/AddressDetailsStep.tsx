import { EmployeeFormData } from "../EmployeeWizardPage";

interface Props {
  formData: EmployeeFormData;
  updateField: (
    field: keyof EmployeeFormData,
    value: any
  ) => void;
}

export default function AddressDetailsStep({
  formData,
  updateField,
}: Props) {
  return (
    <>
      <h2 className="text-2xl font-bold mb-6">
        Address Details
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        <input
          placeholder="House Number"
          value={formData.houseNo}
          onChange={(e) =>
            updateField(
              "houseNo",
              e.target.value
            )
          }
          className="border rounded-xl p-3"
        />

        <input
          placeholder="Street"
          value={formData.street}
          onChange={(e) =>
            updateField(
              "street",
              e.target.value
            )
          }
          className="border rounded-xl p-3"
        />

        <input
          placeholder="Area"
          value={formData.area}
          onChange={(e) =>
            updateField(
              "area",
              e.target.value
            )
          }
          className="border rounded-xl p-3"
        />

        <input
          placeholder="Province Of Residence"
          value={formData.provinceOfResidence}
          onChange={(e) =>
            updateField(
              "provinceOfResidence",
              e.target.value
            )
          }
          className="border rounded-xl p-3"
        />

        <input
          placeholder="Pin Code"
          value={formData.pinCode}
          onChange={(e) =>
            updateField(
              "pinCode",
              e.target.value
            )
          }
          className="border rounded-xl p-3"
        />

        <input
          placeholder="Country"
          value={formData.country}
          onChange={(e) =>
            updateField(
              "country",
              e.target.value
            )
          }
          className="border rounded-xl p-3"
        />

      </div>
    </>
  );
}