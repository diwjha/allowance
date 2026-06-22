

// import { EmployeeFormData } from "../EmployeeWizardPage";

// interface Props {
//   formData: EmployeeFormData;
//   updateField: (
//     field: keyof EmployeeFormData,
//     value: any
//   ) => void;
// }

// export default function BankDetailsStep({
//   formData,
//   updateField,
// }: Props) {
//   return (
//     <>
//       <h2 className="text-2xl font-bold mb-6">
//         Bank Details
//       </h2>

//       <div className="grid md:grid-cols-2 gap-5">

//         <div>
//           <label className="block mb-2 font-medium">
//             Account Number
//           </label>

//           <input
//             type="text"
//             value={formData.accountNumber}
//             onChange={(e) =>
//               updateField(
//                 "accountNumber",
//                 e.target.value
//               )
//             }
//             placeholder="Enter Account Number"
//             className="
//               border
//               rounded-xl
//               p-3
//               w-full
//             "
//           />
//         </div>

//         <div>
//           <label className="block mb-2 font-medium">
//             Selected Branch
//           </label>

//           <input
//             disabled
//             value={
//               formData.branchId || "No Branch Selected"
//             }
//             className="
//               border
//               rounded-xl
//               p-3
//               w-full
//               bg-slate-100
//               text-slate-500
//             "
//           />
//         </div>

//       </div>
//     </>
//   );
// }






import { useEffect, useState } from "react";
import { EmployeeFormData } from "../EmployeeWizardPage";
import {
  getBanks,
  getBankBranches,
} from "../../../services/masterService";

interface Props {
  formData: EmployeeFormData;
  updateField: (
    field: keyof EmployeeFormData,
    value: any
  ) => void;
}

interface Bank {
  id: string;
  bankName: string;
}

interface Branch {
  id: string;
  branchName: string;
  branchCode: string;
  bankId: string;
}

export default function BankDetailsStep({
  formData,
  updateField,
}: Props) {
  const [banks, setBanks] = useState<Bank[]>([]);
  const [branches, setBranches] = useState<
    Branch[]
  >([]);

  const [loadingBanks, setLoadingBanks] =
    useState(false);

  const [
    loadingBranches,
    setLoadingBranches,
  ] = useState(false);

  // ======================
  // LOAD BANKS
  // ======================

  useEffect(() => {
    const loadBanks = async () => {
      try {
        setLoadingBanks(true);

        const data = await getBanks();

        setBanks(data || []);
      } catch (error) {
        console.error(
          "Failed to load banks",
          error
        );
      } finally {
        setLoadingBanks(false);
      }
    };

    loadBanks();
  }, []);

  // ======================
  // LOAD BRANCHES
  // ======================

  useEffect(() => {
    const loadBranches = async () => {
      try {
        setLoadingBranches(true);

        const data =
          await getBankBranches();

        setBranches(data || []);
      } catch (error) {
        console.error(
          "Failed to load branches",
          error
        );
      } finally {
        setLoadingBranches(false);
      }
    };

    loadBranches();
  }, []);

  const filteredBranches =
    branches.filter(
      (branch) =>
        branch.bankId === formData.bankId
    );

  return (
    <>
      <h2 className="text-2xl font-bold mb-6">
        Bank Details
      </h2>

      <div className="grid md:grid-cols-2 gap-5">

        {/* BANK */}

        <div>
          <label className="block mb-2 font-medium">
            Bank
          </label>

          <select
            value={formData.bankId || ""}
            onChange={(e) => {
              updateField(
                "bankId",
                e.target.value
              );

              updateField(
                "branchId",
                ""
              );
            }}
            className="
            border
            rounded-xl
            p-3
            w-full
            "
          >
            <option value="">
              {loadingBanks
                ? "Loading Banks..."
                : "Select Bank"}
            </option>

            {banks.map((bank) => (
              <option
                key={bank.id}
                value={bank.id}
              >
                {bank.bankName}
              </option>
            ))}
          </select>
        </div>

        {/* BRANCH */}

        <div>
          <label className="block mb-2 font-medium">
            Branch
          </label>

          <select
            value={formData.branchId}
            onChange={(e) =>
              updateField(
                "branchId",
                e.target.value
              )
            }
            disabled={!formData.bankId}
            className="
            border
            rounded-xl
            p-3
            w-full
            "
          >
            <option value="">
              {loadingBranches
                ? "Loading Branches..."
                : "Select Branch"}
            </option>

            {filteredBranches.map(
              (branch) => (
                <option
                  key={branch.id}
                  value={branch.id}
                >
                  {branch.branchName} (
                  {branch.branchCode})
                </option>
              )
            )}
          </select>
        </div>

        {/* ACCOUNT NUMBER */}

        <div className="md:col-span-2">
          <label className="block mb-2 font-medium">
            Account Number
          </label>

          <input
            type="text"
            value={
              formData.accountNumber
            }
            onChange={(e) =>
              updateField(
                "accountNumber",
                e.target.value
              )
            }
            placeholder="Enter Account Number"
            className="
            border
            rounded-xl
            p-3
            w-full
            "
          />
        </div>

      </div>
    </>
  );
}