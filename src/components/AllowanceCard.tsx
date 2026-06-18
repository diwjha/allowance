import { Allowance } from "../types/payroll";

type AllowanceCardProps = {
  allowance: Allowance;
  index: number;
  updateAllowance: (
    id: number,
    field: keyof Allowance,
    value: string | number
  ) => void;
  removeAllowance: (id: number) => void;
  canDelete: boolean;
};

export default function AllowanceCard({
  allowance,
  index,
  updateAllowance,
  removeAllowance,
  canDelete,
}: AllowanceCardProps) {
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
      <div className="bg-linear-to-r from-emerald-500 via-green-500 to-teal-500 px-6 py-4">

        <h2 className="text-white font-bold text-lg">
          Allowance {index + 1}
        </h2>

        <p className="text-emerald-100 text-sm">
          Configure employee allowance percentage
        </p>

      </div>

      {/* Content */}
      <div className="p-6">

        <div className="grid md:grid-cols-2 gap-5">

          {/* Allowance Name */}
          <div>

            <label className="block mb-2 text-sm font-medium text-slate-700">
              💰 Allowance Name
            </label>

            <input
              type="text"
              value={allowance.name}
              placeholder={`Allowance ${index + 1}`}
              onChange={(e) =>
                updateAllowance(
                  allowance.id,
                  "name",
                  e.target.value
                )
              }
              className="
                w-full
                p-3
                border
                border-slate-300
                rounded-xl
                outline-none
                focus:ring-2
                focus:ring-emerald-400
                focus:border-emerald-400
                transition
              "
            />

          </div>

          {/* Percentage */}
          <div>

            <label className="block mb-2 text-sm font-medium text-slate-700">
              📊 Allowance Percentage
            </label>

            <div
              className="
                flex
                rounded-xl
                overflow-hidden
                border
                border-slate-300
                focus-within:ring-2
                focus-within:ring-emerald-400
              "
            >

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
                value={allowance.percentage}
                onChange={(e) =>
                  updateAllowance(
                    allowance.id,
                    "percentage",
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
                removeAllowance(
                  allowance.id
                )
              }
              className="
                px-5
                py-2.5
                rounded-xl
                bg-red-500
                hover:bg-red-600
                text-white
                font-medium
                shadow-md
                transition-all
                duration-200
              "
            >
              🗑 Remove Allowance
            </button>

          </div>
        )}

      </div>
    </div>
  );
}