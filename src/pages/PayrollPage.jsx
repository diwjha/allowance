import { useState } from "react";
import AllowanceCard from "../components/AllowanceCard";

export default function PayrollPage() {
  const [fixedSalary, setFixedSalary] = useState(1200000);

  const [allowances, setAllowances] = useState([
    {
      id: 1,
      name: "HRA",
      percentage: 40,
    },
    {
      id: 2,
      name: "Transport Allowance",
      percentage: 10,
    },
    {
      id: 3,
      name: "Medical Allowance",
      percentage: 5,
    },
    {
      id: 4,
      name: "Special Allowance",
      percentage: 15,
    },
  ]);

  const addAllowance = () => {
    setAllowances([
      ...allowances,
      {
        id: Date.now(),
        name: "",
        percentage: "",
      },
    ]);
  };

  const removeAllowance = (id) => {
    setAllowances(
      allowances.filter((a) => a.id !== id)
    );
  };

  const updateAllowance = (id, field, value) => {
    setAllowances(
      allowances.map((a) =>
        a.id === id
          ? { ...a, [field]: value }
          : a
      )
    );
  };

  const totalAllowancePercentage = allowances.reduce(
    (sum, item) =>
      sum + (Number(item.percentage) || 0),
    0
  );

  const totalAllowanceAmount =
    (fixedSalary * totalAllowancePercentage) / 100;

  const grossSalary =
    Number(fixedSalary) + totalAllowanceAmount;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Payroll Configuration
        </h1>

        <p className="text-slate-500 mt-1">
          Configure salary structure and
          allowance distribution.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-slate-500 text-sm">
            Fixed Salary
          </p>

          <h2 className="text-3xl font-bold mt-2 text-indigo-600">
            ₹ {Number(fixedSalary).toLocaleString("en-IN")}
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-slate-500 text-sm">
            Total Allowance
          </p>

          <h2 className="text-3xl font-bold mt-2 text-green-600">
            {totalAllowancePercentage}%
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            ₹{" "}
            {totalAllowanceAmount.toLocaleString(
              "en-IN"
            )}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-slate-500 text-sm">
            Gross Salary
          </p>

          <h2 className="text-3xl font-bold mt-2 text-blue-600">
            ₹{" "}
            {grossSalary.toLocaleString("en-IN")}
          </h2>
        </div>
      </div>

      {/* Fixed Salary Card */}
      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">
          Fixed Salary
        </h2>

        <div className="flex">
          <span className="border border-r-0 bg-slate-100 px-4 py-3 rounded-l-lg">
            ₹
          </span>

          <input
            type="number"
            value={fixedSalary}
            onChange={(e) =>
              setFixedSalary(Number(e.target.value))
            }
            className="border rounded-r-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter Fixed Salary"
          />
        </div>
      </div>

      {/* Allowances */}
      <div className="bg-white rounded-xl shadow p-6">
        <div className="flex justify-between items-center mb-6 flex-wrap gap-3">
          <div>
            <h2 className="text-2xl font-semibold">
              Allowances
            </h2>

            <p className="text-slate-500 text-sm">
              Add salary allowances offered by
              company
            </p>
          </div>

          <button
            onClick={addAllowance}
            className="bg-indigo-600 hover:bg-indigo-700 transition text-white px-5 py-3 rounded-lg font-medium"
          >
            + Add Allowance
          </button>
        </div>

        <div className="space-y-4">
          {allowances.map((allowance, index) => (
            <AllowanceCard
              key={allowance.id}
              allowance={allowance}
              index={index}
              updateAllowance={updateAllowance}
              removeAllowance={removeAllowance}
              canDelete={allowances.length > 1}
            />
          ))}
        </div>
      </div>

      {/* Salary Structure Preview */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-semibold mb-5">
          Salary Structure Preview
        </h2>

        <div className="space-y-3">
          <div className="flex justify-between border-b pb-3">
            <span>Fixed Salary</span>
            <span>
              ₹{" "}
              {Number(fixedSalary).toLocaleString(
                "en-IN"
              )}
            </span>
          </div>

          {allowances.map((item) => (
            <div
              key={item.id}
              className="flex justify-between"
            >
              <span>{item.name || "Allowance"}</span>

              <span>
                ₹{" "}
                {(
                  (fixedSalary *
                    (Number(item.percentage) || 0)) /
                  100
                ).toLocaleString("en-IN")}
              </span>
            </div>
          ))}

          <div className="border-t pt-4 flex justify-between font-bold text-lg">
            <span>Gross Salary</span>

            <span className="text-green-600">
              ₹{" "}
              {grossSalary.toLocaleString(
                "en-IN"
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}