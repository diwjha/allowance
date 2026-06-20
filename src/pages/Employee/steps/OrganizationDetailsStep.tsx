import { EmployeeFormData } from "../EmployeeWizardPage";

interface Props {
  formData: EmployeeFormData;
  updateField: (
    field: keyof EmployeeFormData,
    value: any
  ) => void;
}

export default function OrganizationDetailsStep({
  formData,
  updateField,
}: Props) {
  return (
    <>
      <h2 className="text-2xl font-bold mb-6">
        Organization Details
      </h2>

      <div className="grid md:grid-cols-2 gap-5">

        <div>
          <label className="block mb-2 font-medium">
            Ministry ID
          </label>

          <input
            value={formData.ministryId}
            onChange={(e) =>
              updateField(
                "ministryId",
                e.target.value
              )
            }
            className="border rounded-xl p-3 w-full"
            placeholder="Ministry ID"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Department ID
          </label>

          <input
            value={formData.departmentId}
            onChange={(e) =>
              updateField(
                "departmentId",
                e.target.value
              )
            }
            className="border rounded-xl p-3 w-full"
            placeholder="Department ID"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Division
          </label>

          <input
            value={formData.division}
            onChange={(e) =>
              updateField(
                "division",
                e.target.value
              )
            }
            className="border rounded-xl p-3 w-full"
            placeholder="Division"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Branch ID
          </label>

          <input
            value={formData.branchId}
            onChange={(e) =>
              updateField(
                "branchId",
                e.target.value
              )
            }
            className="border rounded-xl p-3 w-full"
            placeholder="Branch ID"
          />
        </div>

      </div>
    </>
  );
}