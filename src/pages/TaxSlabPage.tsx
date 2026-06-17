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
    setSlabs([
      ...slabs,
      {
        id: Date.now(),
        rate: 0,
        start: 0,
        end: 0,
      },
    ]);
  };

  const removeSlab = (
    id: number
  ): void => {
    setSlabs(
      slabs.filter(
        (slab) => slab.id !== id
      )
    );
  };

  const updateSlab = (
    id: number,
    field: keyof TaxSlab,
    value: number
  ): void => {
    setSlabs(
      slabs.map((slab) =>
        slab.id === id
          ? {
              ...slab,
              [field]: value,
            }
          : slab
      )
    );
  };

  const totalSlabs = slabs.length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Tax Slab Management
          </h1>

          <p className="text-slate-500 mt-1">
            Configure tax slabs and rates
            for payroll calculations.
          </p>
        </div>

        <button
          onClick={addSlab}
          className="bg-indigo-600 hover:bg-indigo-700 transition text-white px-5 py-3 rounded-lg font-medium"
        >
          + Add Slab
        </button>
      </div>

      {/* Summary Card */}
      <div className="bg-white rounded-xl shadow p-6">
        <p className="text-slate-500 text-sm">
          Total Tax Slabs
        </p>

        <h2 className="text-4xl font-bold text-indigo-600 mt-2">
          {totalSlabs}
        </h2>
      </div>

      {/* Tax Slabs */}
      <div className="space-y-4">
        {slabs.map((slab, index) => (
          <TaxSlabCard
            key={slab.id}
            slab={slab}
            index={index}
            updateSlab={updateSlab}
            removeSlab={removeSlab}
            canDelete={slabs.length > 1}
          />
        ))}
      </div>

      {/* Tax Slab Preview */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-semibold mb-5">
          Tax Slab Preview
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b bg-slate-50">
                <th className="text-left p-3">
                  Slab
                </th>

                <th className="text-left p-3">
                  Start Amount
                </th>

                <th className="text-left p-3">
                  End Amount
                </th>

                <th className="text-left p-3">
                  Tax Rate
                </th>
              </tr>
            </thead>

            <tbody>
              {slabs.map((slab, index) => (
                <tr
                  key={slab.id}
                  className="border-b"
                >
                  <td className="p-3">
                    Slab {index + 1}
                  </td>

                  <td className="p-3">
                    ₹{" "}
                    {slab.start.toLocaleString(
                      "en-IN"
                    )}
                  </td>

                  <td className="p-3">
                    ₹{" "}
                    {slab.end.toLocaleString(
                      "en-IN"
                    )}
                  </td>

                  <td className="p-3 font-semibold text-indigo-600">
                    {slab.rate}%
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