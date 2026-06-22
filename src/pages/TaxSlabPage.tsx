import { useState } from "react";
import TaxSlabCard from "../components/TaxSlabCard";
import { TaxSlab } from "../types/payroll";

export default function TaxSlabPage() {
  const [slabs, setSlabs] = useState<TaxSlab[]>([
    {
      id: 1,
      rate: 0,
      start: 0,
      end: 400000,
    },
    {
      id: 2,
      rate: 5,
      start: 400001,
      end: 800000,
    },
    {
      id: 3,
      rate: 10,
      start: 800001,
      end: 1200000,
    },
    {
      id: 4,
      rate: 15,
      start: 1200001,
      end: 1600000,
    },
    {
      id: 5,
      rate: 20,
      start: 1600001,
      end: 2000000,
    },
    {
      id: 6,
      rate: 30,
      start: 2000001,
      end: 99999999,
    },
  ]);

  const addSlab = (): void => {
    setSlabs((prev) => [
      ...prev,
      {
        id: Date.now(),
        rate: 0,
        start: 0,
        end: 0,
      },
    ]);
  };

  const removeSlab = (id: number): void => {
    setSlabs((prev) => prev.filter((item) => item.id !== id));
  };

  const updateSlab = (
    id: number,
    field: keyof TaxSlab,
    value: number,
  ): void => {
    setSlabs((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              [field]: value,
            }
          : item,
      ),
    );
  };

  return (
    <div className="space-y-8">
      {/* Header */}

      <div className="flex justify-between items-center flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Tax Slab Management
          </h1>

          <p className="text-slate-500 mt-1">
            Configure income tax slabs for payroll calculation
          </p>
        </div>

        <button
          onClick={addSlab}
          className="
bg-indigo-600
hover:bg-indigo-700
text-white
px-5
py-3
rounded-xl
shadow
transition
"
        >
          + Add Tax Slab
        </button>
      </div>

      {/* Summary Cards */}

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white border rounded-2xl shadow-sm p-6">
          <p className="text-slate-500">Total Tax Slabs</p>

          <h2 className="text-4xl font-bold text-indigo-600 mt-3">
            {slabs.length}
          </h2>

          <span className="text-xs text-slate-400">Configured tax ranges</span>
        </div>

        <div className="bg-white border rounded-2xl shadow-sm p-6">
          <p className="text-slate-500">Lowest Tax Rate</p>

          <h2 className="text-4xl font-bold text-green-600 mt-3">
            {Math.min(...slabs.map((item) => item.rate))}%
          </h2>
        </div>

        <div className="bg-white border rounded-2xl shadow-sm p-6">
          <p className="text-slate-500">Highest Tax Rate</p>

          <h2 className="text-4xl font-bold text-red-600 mt-3">
            {Math.max(...slabs.map((item) => item.rate))}%
          </h2>
        </div>
      </div>

      {/* Slab Configuration */}

      <div className="bg-white rounded-2xl border shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-semibold">Tax Slabs</h2>

            <p className="text-sm text-slate-500">
              Define income ranges and applicable tax percentage
            </p>
          </div>
        </div>

        <div className="space-y-5">
          {slabs.length === 0 ? (
            <div className="text-center py-10 text-slate-400">
              No tax slabs configured
            </div>
          ) : (
            slabs.map((slab, index) => (
              <TaxSlabCard
                key={slab.id}
                slab={slab}
                index={index}
                updateSlab={updateSlab}
                removeSlab={removeSlab}
                canDelete={slabs.length > 1}
              />
            ))
          )}
        </div>
      </div>

      {/* Preview Table */}

      <div className="bg-white rounded-2xl border shadow-sm p-6">
        <h2 className="text-2xl font-semibold mb-6">Tax Slab Preview</h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-100">
                <th className="p-4 text-left">Slab</th>

                <th className="p-4 text-left">Start Amount</th>

                <th className="p-4 text-left">End Amount</th>

                <th className="p-4 text-left">Tax Rate</th>
              </tr>
            </thead>

            <tbody>
              {slabs.map((slab, index) => (
                <tr
                  key={slab.id}
                  className="border-t hover:bg-slate-50 transition"
                >
                  <td className="p-4 font-medium">Slab {index + 1}</td>

                  <td className="p-4">
                    ₹ {slab.start.toLocaleString("en-IN")}
                  </td>

                  <td className="p-4">₹ {slab.end.toLocaleString("en-IN")}</td>

                  <td className="p-4">
                    <span
                      className="
bg-indigo-100
text-indigo-700
px-3
py-1
rounded-full
font-semibold
"
                    >
                      {slab.rate}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
