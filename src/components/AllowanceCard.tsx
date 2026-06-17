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
    <div className="bg-white p-5 rounded-xl shadow">
      <div className="grid md:grid-cols-2 gap-4">
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
          className="border p-3 rounded-lg"
        />

        <div className="flex">
          <span className="border bg-gray-100 px-4 py-3">
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
            className="border w-full p-3"
          />
        </div>
      </div>

      {canDelete && (
        <button
          onClick={() =>
            removeAllowance(allowance.id)
          }
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg"
        >
          Remove
        </button>
      )}
    </div>
  );
}