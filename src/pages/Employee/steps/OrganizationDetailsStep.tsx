// import { EmployeeFormData } from "../EmployeeWizardPage";

// interface Props {
//   formData: EmployeeFormData;
//   updateField: (
//     field: keyof EmployeeFormData,
//     value: any
//   ) => void;
// }

// export default function OrganizationDetailsStep({
//   formData,
//   updateField,
// }: Props) {
//   return (
//     <>
//       <h2 className="text-2xl font-bold mb-6">
//         Organization Details
//       </h2>

//       <div className="grid md:grid-cols-2 gap-5">

//         <div>
//           <label className="block mb-2 font-medium">
//             Ministry ID
//           </label>

//           <input
//             value={formData.ministryId}
//             onChange={(e) =>
//               updateField(
//                 "ministryId",
//                 e.target.value
//               )
//             }
//             className="border rounded-xl p-3 w-full"
//             placeholder="Ministry ID"
//           />
//         </div>

//         <div>
//           <label className="block mb-2 font-medium">
//             Department ID
//           </label>

//           <input
//             value={formData.departmentId}
//             onChange={(e) =>
//               updateField(
//                 "departmentId",
//                 e.target.value
//               )
//             }
//             className="border rounded-xl p-3 w-full"
//             placeholder="Department ID"
//           />
//         </div>

//         <div>
//           <label className="block mb-2 font-medium">
//             Division
//           </label>

//           <input
//             value={formData.division}
//             onChange={(e) =>
//               updateField(
//                 "division",
//                 e.target.value
//               )
//             }
//             className="border rounded-xl p-3 w-full"
//             placeholder="Division"
//           />
//         </div>

//         <div>
//           <label className="block mb-2 font-medium">
//             Branch ID
//           </label>

//           <input
//             value={formData.branchId}
//             onChange={(e) =>
//               updateField(
//                 "branchId",
//                 e.target.value
//               )
//             }
//             className="border rounded-xl p-3 w-full"
//             placeholder="Branch ID"
//           />
//         </div>

//       </div>
//     </>
//   );
// }




import { useEffect, useState } from "react";
import { EmployeeFormData } from "../EmployeeWizardPage";

import {
  getMinistries,
  getDepartments,
  getBankBranches,
} from "../../../services/masterService";

interface Props {
  formData: EmployeeFormData;
  updateField: (
    field: keyof EmployeeFormData,
    value: any
  ) => void;
}

interface Ministry {
  ministryKey: string;
  name: string;
}

interface Department {
  departmentKey: string;
  name: string;
}

interface Branch {
  id: string;
  branchName: string;
  branchCode: string;
}

export default function OrganizationDetailsStep({
  formData,
  updateField,
}: Props) {
  const [ministries, setMinistries] =
    useState<Ministry[]>([]);

  const [departments, setDepartments] =
    useState<Department[]>([]);

  const [branches, setBranches] =
    useState<Branch[]>([]);

  useEffect(() => {
    loadMasters();
  }, []);

  const loadMasters = async () => {
    try {
      const [
        ministriesData,
        departmentsData,
        branchesData,
      ] = await Promise.all([
        getMinistries(),
        getDepartments(),
        getBankBranches(),
      ]);

      setMinistries(ministriesData);
      setDepartments(departmentsData);
      setBranches(branchesData);
    } catch (error) {
      console.error(
        "Failed to load organization masters",
        error
      );
    }
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-6">
        Organization Details
      </h2>

      <div className="grid md:grid-cols-2 gap-5">

        {/* MINISTRY */}

        <div>
          <label className="block mb-2 font-medium">
            Ministry
          </label>

          <select
            value={formData.ministryId}
            onChange={(e) =>
              updateField(
                "ministryId",
                e.target.value
              )
            }
            className="border rounded-xl p-3 w-full"
          >
            <option value="">
              Select Ministry
            </option>

            {ministries.map(
              (ministry) => (
                <option
                  key={
                    ministry.ministryKey
                  }
                  value={
                    ministry.ministryKey
                  }
                >
                  {ministry.name}
                </option>
              )
            )}
          </select>
        </div>

        {/* DEPARTMENT */}

        <div>
          <label className="block mb-2 font-medium">
            Department
          </label>

          <select
            value={formData.departmentId}
            onChange={(e) =>
              updateField(
                "departmentId",
                e.target.value
              )
            }
            className="border rounded-xl p-3 w-full"
          >
            <option value="">
              Select Department
            </option>

            {departments.map(
              (department) => (
                <option
                  key={
                    department.departmentKey
                  }
                  value={
                    department.departmentKey
                  }
                >
                  {department.name}
                </option>
              )
            )}
          </select>
        </div>

        {/* DIVISION */}

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

        {/* BANK BRANCH */}

        <div>
          <label className="block mb-2 font-medium">
            Bank Branch
          </label>

          <select
            value={formData.branchId}
            onChange={(e) =>
              updateField(
                "branchId",
                e.target.value
              )
            }
            className="border rounded-xl p-3 w-full"
          >
            <option value="">
              Select Branch
            </option>

            {branches.map(
              (branch) => (
                <option
                  key={branch.id}
                  value={branch.id}
                >
                  {branch.branchName}
                  {" - "}
                  {branch.branchCode}
                </option>
              )
            )}
          </select>
        </div>

      </div>
    </>
  );
}