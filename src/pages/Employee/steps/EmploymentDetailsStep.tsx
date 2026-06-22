// import { EmployeeFormData } from "../EmployeeWizardPage";

// interface Props {
//   formData: EmployeeFormData;
//   updateField: (
//     field: keyof EmployeeFormData,
//     value: any
//   ) => void;
// }

// export default function EmploymentDetailsStep({
//   formData,
//   updateField,
// }: Props) {
//   return (
//     <>
//       <h2 className="text-2xl font-bold mb-6">
//         Employment Details
//       </h2>

//       <div className="grid md:grid-cols-2 gap-5">

//         <div>
//           <label className="block mb-2 font-medium">
//             Employee Code
//           </label>

//           <input
//             value={formData.employeeCode}
//             onChange={(e) =>
//               updateField(
//                 "employeeCode",
//                 e.target.value
//               )
//             }
//             className="border rounded-xl p-3 w-full"
//             placeholder="EMP001"
//           />
//         </div>

//         <div>
//           <label className="block mb-2 font-medium">
//             Position
//           </label>

//           <input
//             value={formData.position}
//             onChange={(e) =>
//               updateField(
//                 "position",
//                 e.target.value
//               )
//             }
//             className="border rounded-xl p-3 w-full"
//             placeholder="Software Engineer"
//           />
//         </div>

//         <div>
//           <label className="block mb-2 font-medium">
//             Date Of Joining
//           </label>

//           <input
//             type="date"
//             value={formData.dateOfJoining}
//             onChange={(e) =>
//               updateField(
//                 "dateOfJoining",
//                 e.target.value
//               )
//             }
//             className="border rounded-xl p-3 w-full"
//           />
//         </div>

//         <div>
//           <label className="block mb-2 font-medium">
//             Employment Type
//           </label>

//           <select
//             value={formData.employmentType}
//             onChange={(e) =>
//               updateField(
//                 "employmentType",
//                 e.target.value
//               )
//             }
//             className="border rounded-xl p-3 w-full"
//           >
//             <option value="PERMANENT">
//               Permanent
//             </option>

//             <option value="PROBATIONARY">
//               Probationary
//             </option>

//             <option value="CONTRACT">
//               Contract
//             </option>

//             <option value="INTERN">
//               Intern
//             </option>
//           </select>
//         </div>

//         <div>
//           <label className="block mb-2 font-medium">
//             Education Level ID
//           </label>

//           <input
//             value={formData.educationLevelId}
//             onChange={(e) =>
//               updateField(
//                 "educationLevelId",
//                 e.target.value
//               )
//             }
//             placeholder="Bachelor / Master"
//             className="border rounded-xl p-3 w-full"
//           />
//         </div>

//         <div>
//           <label className="block mb-2 font-medium">
//             Prior Experience (Years)
//           </label>

//           <input
//             type="number"
//             value={formData.priorExperience}
//             onChange={(e) =>
//               updateField(
//                 "priorExperience",
//                 Number(e.target.value)
//               )
//             }
//             className="border rounded-xl p-3 w-full"
//           />
//         </div>

//       </div>
//     </>
//   );
// }


import { useEffect, useState } from "react";
import { EmployeeFormData } from "../EmployeeWizardPage";
import { getEducationLevels } from "../../../services/masterService";

interface Props {
  formData: EmployeeFormData;
  updateField: (
    field: keyof EmployeeFormData,
    value: any
  ) => void;
}

interface EducationLevel {
  id: string;
  name: string;
}

export default function EmploymentDetailsStep({
  formData,
  updateField,
}: Props) {
  const [educationLevels, setEducationLevels] =
    useState<EducationLevel[]>([]);

  useEffect(() => {
    loadEducationLevels();
  }, []);

  const loadEducationLevels = async () => {
    try {
      const data =
        await getEducationLevels();

      setEducationLevels(data);
    } catch (error) {
      console.error(
        "Failed to load education levels",
        error
      );
    }
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-6">
        Employment Details
      </h2>

      <div className="grid md:grid-cols-2 gap-5">

        <div>
          <label className="block mb-2 font-medium">
            Employee Code
          </label>

          <input
            value={formData.employeeCode}
            onChange={(e) =>
              updateField(
                "employeeCode",
                e.target.value
              )
            }
            className="border rounded-xl p-3 w-full"
            placeholder="LAO00005"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Position
          </label>

          <input
            value={formData.position}
            onChange={(e) =>
              updateField(
                "position",
                e.target.value
              )
            }
            className="border rounded-xl p-3 w-full"
            placeholder="Senior Officer"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Date Of Joining
          </label>

          <input
            type="date"
            value={formData.dateOfJoining}
            onChange={(e) =>
              updateField(
                "dateOfJoining",
                e.target.value
              )
            }
            className="border rounded-xl p-3 w-full"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Employment Type
          </label>

          <select
            value={formData.employmentType}
            onChange={(e) =>
              updateField(
                "employmentType",
                e.target.value
              )
            }
            className="border rounded-xl p-3 w-full"
          >
            <option value="PERMANENT">
              Permanent
            </option>

            <option value="PROBATIONARY">
              Probationary
            </option>

            <option value="CONTRACT">
              Contract
            </option>

            <option value="INTERN">
              Intern
            </option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Education Level
          </label>

          <select
            value={
              formData.educationLevelId
            }
            onChange={(e) =>
              updateField(
                "educationLevelId",
                e.target.value
              )
            }
            className="border rounded-xl p-3 w-full"
          >
            <option value="">
              Select Education Level
            </option>

            {educationLevels.map(
              (education) => (
                <option
                  key={education.id}
                  value={education.id}
                >
                  {education.name}
                </option>
              )
            )}
          </select>
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Prior Experience (Years)
          </label>

          <input
            type="number"
            value={
              formData.priorExperience
            }
            onChange={(e) =>
              updateField(
                "priorExperience",
                Number(e.target.value)
              )
            }
            className="border rounded-xl p-3 w-full"
          />
        </div>

      </div>
    </>
  );
}