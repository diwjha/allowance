import { TaxSlab } from "../types/payroll";

type TaxSlabCardProps = {
  slab: TaxSlab;
  index: number;
  updateSlab: (
    id: number,
    field: keyof TaxSlab,
    value: number
  ) => void;
  removeSlab: (id: number) => void;
  canDelete: boolean;
};

export default function TaxSlabCard({
  slab,
  index,
  updateSlab,
  removeSlab,
  canDelete,
}: TaxSlabCardProps) {
  return (
    <div
      className="
        bg-white
        rounded-3xl
        shadow-lg
        border
        border-slate-200
        overflow-hidden
        hover:shadow-xl
        transition-all
        duration-300
      "
    >
      {/* Header */}
      <div className="bg-linear-to-r from-indigo-600 via-purple-600 to-pink-500 px-6 py-4">

        <h2 className="text-white font-bold text-lg">
          Tax Slab {index + 1}
        </h2>

        <p className="text-indigo-100 text-sm">
          Configure tax range and rate
        </p>

      </div>

      {/* Content */}
      <div className="p-6">

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">

          {/* Tax Rate */}
          <div>
            <label className="block mb-2 text-sm font-medium text-slate-700">
              📊 Tax Rate
            </label>

            <div className="flex rounded-xl overflow-hidden border border-slate-300 focus-within:ring-2 focus-within:ring-indigo-400">

              <span
                className="
                  bg-slate-100
                  px-4
                  flex
                  items-center
                  font-semibold
                  text-slate-600
                "
              >
                %
              </span>

              <input
                type="number"
                value={slab.rate}
                onChange={(e) =>
                  updateSlab(
                    slab.id,
                    "rate",
                    Number(e.target.value)
                  )
                }
                className="
                  w-full
                  p-3
                  outline-none
                  bg-white
                "
              />
            </div>
          </div>

          {/* Start Amount */}
          <div>
            <label className="block mb-2 text-sm font-medium text-slate-700">
              💰 Start Amount
            </label>

            <div className="flex rounded-xl overflow-hidden border border-slate-300 focus-within:ring-2 focus-within:ring-indigo-400">

              <span
                className="
                  bg-slate-100
                  px-4
                  flex
                  items-center
                  font-semibold
                  text-slate-600
                "
              >
                ₹
              </span>

              <input
                type="number"
                value={slab.start}
                onChange={(e) =>
                  updateSlab(
                    slab.id,
                    "start",
                    Number(e.target.value)
                  )
                }
                className="
                  w-full
                  p-3
                  outline-none
                  bg-white
                "
              />
            </div>
          </div>

          {/* End Amount */}
          <div>
            <label className="block mb-2 text-sm font-medium text-slate-700">
              🏁 End Amount
            </label>

            <div className="flex rounded-xl overflow-hidden border border-slate-300 focus-within:ring-2 focus-within:ring-indigo-400">

              <span
                className="
                  bg-slate-100
                  px-4
                  flex
                  items-center
                  font-semibold
                  text-slate-600
                "
              >
                ₹
              </span>

              <input
                type="number"
                value={slab.end}
                onChange={(e) =>
                  updateSlab(
                    slab.id,
                    "end",
                    Number(e.target.value)
                  )
                }
                className="
                  w-full
                  p-3
                  outline-none
                  bg-white
                "
              />
            </div>
          </div>

        </div>

        {/* Delete Button */}
        {canDelete && (
          <div className="mt-6 flex justify-end">

            <button
              onClick={() =>
                removeSlab(slab.id)
              }
              className="
                px-5
                py-2.5
                rounded-xl
                bg-red-500
                hover:bg-red-600
                text-white
                font-medium
                transition-all
                duration-200
                shadow-md
              "
            >
              🗑 Remove Slab
            </button>

          </div>
        )}

      </div>
    </div>
  );
}