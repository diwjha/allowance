import { Deduction } from "../types/payroll";

type DeductionCardProps = {
  deduction: Deduction;
  index: number;
  updateDeduction: (
    id: number,
    field: keyof Deduction,
    value: string | number
  ) => void;
  removeDeduction: (id: number) => void;
  canDelete: boolean;
};

export default function DeductionCard({
  deduction,
  index,
  updateDeduction,
  removeDeduction,
  canDelete,
}: DeductionCardProps) {
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
      <div className="bg-linear-to-r from-rose-500 via-pink-500 to-purple-500 px-6 py-4">

        <h2 className="text-white font-bold text-lg">
          Deduction {index + 1}
        </h2>

        <p className="text-pink-100 text-sm">
          Configure employee deduction percentage
        </p>

      </div>

      {/* Content */}
      <div className="p-6">

        <div className="grid md:grid-cols-2 gap-5">

          {/* Deduction Name */}
          <div>
            <label className="block mb-2 text-sm font-medium text-slate-700">
              📝 Deduction Name
            </label>

            <input
              type="text"
              value={deduction.name}
              placeholder={`Deduction ${index + 1}`}
              onChange={(e) =>
                updateDeduction(
                  deduction.id,
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
                focus:ring-pink-400
                focus:border-pink-400
                transition
              "
            />
          </div>

          {/* Percentage */}
          <div>
            <label className="block mb-2 text-sm font-medium text-slate-700">
              📊 Deduction Percentage
            </label>

            <div
              className="
                flex
                rounded-xl
                overflow-hidden
                border
                border-slate-300
                focus-within:ring-2
                focus-within:ring-pink-400
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
                value={deduction.percentage}
                onChange={(e) =>
                  updateDeduction(
                    deduction.id,
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
                removeDeduction(deduction.id)
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
              🗑 Remove Deduction
            </button>

          </div>
        )}

      </div>
    </div>
  );
}