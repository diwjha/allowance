import { useState } from "react";
import DeductionCard from "../components/DeductionCard";
import { Deduction } from "../types/payroll";

export default function DeductionPage() {
  const [annualSalary, setAnnualSalary] =
    useState<number>(1200000);

  const [deductions, setDeductions] =
    useState<Deduction[]>([
      {
        id: 1,
        name: "Provident Fund (PF)",
        percentage: 12,
      },
      {
        id: 2,
        name: "Professional Tax",
        percentage: 2,
      },
      {
        id: 3,
        name: "Health Insurance",
        percentage: 3,
      },
      {
        id: 4,
        name: "Labour Welfare Fund",
        percentage: 1,
      },
    ]);

  const addDeduction = (): void => {
    setDeductions([
      ...deductions,
      {
        id: Date.now(),
        name: "",
        percentage: 0,
      },
    ]);
  };

  const removeDeduction = (
    id: number
  ): void => {
    setDeductions(
      deductions.filter(
        (deduction) =>
          deduction.id !== id
      )
    );
  };

  const updateDeduction = (
    id: number,
    field: keyof Deduction,
    value: string | number
  ): void => {
    setDeductions(
      deductions.map((deduction) =>
        deduction.id === id
          ? {
              ...deduction,
              [field]: value,
            }
          : deduction
      )
    );
  };

  const totalDeductionPercentage =
    deductions.reduce(
      (sum, item) =>
        sum + item.percentage,
      0
    );

  const totalDeductionAmount =
    (annualSalary *
      totalDeductionPercentage) /
    100;

  const netSalary =
    annualSalary - totalDeductionAmount;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Deduction Management
        </h1>

        <p className="text-slate-500 mt-1">
          Configure employee deductions and
          statutory contributions.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-slate-500 text-sm">
            Annual Salary
          </p>

          <h2 className="text-3xl font-bold mt-2 text-indigo-600">
            ₹{" "}
            {annualSalary.toLocaleString(
              "en-IN"
            )}
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-slate-500 text-sm">
            Total Deductions
          </p>

          <h2 className="text-3xl font-bold mt-2 text-red-600">
            {totalDeductionPercentage}%
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            ₹{" "}
            {totalDeductionAmount.toLocaleString(
              "en-IN"
            )}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-slate-500 text-sm">
            Net Salary
          </p>

          <h2 className="text-3xl font-bold mt-2 text-green-600">
            ₹{" "}
            {netSalary.toLocaleString(
              "en-IN"
            )}
          </h2>
        </div>
      </div>

      {/* Salary Input */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">
          Salary For Calculation
        </h2>

        <div className="flex">
          <span className="border border-r-0 bg-slate-100 px-4 py-3 rounded-l-lg">
            ₹
          </span>

          <input
            type="number"
            value={annualSalary}
            onChange={(e) =>
              setAnnualSalary(
                Number(e.target.value)
              )
            }
            className="border rounded-r-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter Annual Salary"
          />
        </div>
      </div>

      {/* Deductions Section */}
      <div className="bg-white rounded-xl shadow p-6">
        <div className="flex justify-between items-center mb-6 flex-wrap gap-3">
          <div>
            <h2 className="text-2xl font-semibold">
              Deductions
            </h2>

            <p className="text-slate-500 text-sm">
              Configure employee deductions
            </p>
          </div>

          <button
            onClick={addDeduction}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-lg transition"
          >
            + Add Deduction
          </button>
        </div>

        <div className="space-y-4">
          {deductions.map(
            (deduction, index) => (
              <DeductionCard
                key={deduction.id}
                deduction={deduction}
                index={index}
                updateDeduction={
                  updateDeduction
                }
                removeDeduction={
                  removeDeduction
                }
                canDelete={
                  deductions.length > 1
                }
              />
            )
          )}
        </div>
      </div>

      {/* Deduction Preview */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-semibold mb-5">
          Deduction Preview
        </h2>

        <div className="space-y-3">
          <div className="flex justify-between border-b pb-3">
            <span>Annual Salary</span>

            <span>
              ₹{" "}
              {annualSalary.toLocaleString(
                "en-IN"
              )}
            </span>
          </div>

          {deductions.map((item) => (
            <div
              key={item.id}
              className="flex justify-between"
            >
              <span>
                {item.name ||
                  "Deduction"}
              </span>

              <span className="text-red-600">
                ₹{" "}
                {(
                  (annualSalary *
                    item.percentage) /
                  100
                ).toLocaleString("en-IN")}
              </span>
            </div>
          ))}

          <div className="border-t pt-4 flex justify-between font-bold text-lg">
            <span>Total Deduction</span>

            <span className="text-red-600">
              ₹{" "}
              {totalDeductionAmount.toLocaleString(
                "en-IN"
              )}
            </span>
          </div>

          <div className="flex justify-between font-bold text-xl">
            <span>Net Salary</span>

            <span className="text-green-600">
              ₹{" "}
              {netSalary.toLocaleString(
                "en-IN"
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}