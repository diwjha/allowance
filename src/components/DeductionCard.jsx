export default function DeductionCard({
  deduction,
  index,
  updateDeduction,
  removeDeduction,
  canDelete,
}) {
  return (
    <div className="bg-white shadow p-5 rounded-xl">

      <div className="grid md:grid-cols-2 gap-4">

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
          className="border p-3 rounded-lg"
        />

        <div className="flex">
          <span className="border bg-gray-100 px-4 py-3">
            %
          </span>

          <input
            type="number"
            value={deduction.percentage}
            onChange={(e) =>
              updateDeduction(
                deduction.id,
                "percentage",
                e.target.value
              )
            }
            className="border w-full p-3"
          />
        </div>

      </div>

    </div>
  );
}