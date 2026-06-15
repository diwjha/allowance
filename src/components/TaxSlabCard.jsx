export default function TaxSlabCard({
  slab,
  index,
  updateSlab,
  removeSlab,
  canDelete,
}) {
  return (
    <div className="bg-white shadow rounded-xl p-5">

      <h2 className="font-semibold text-lg mb-5">
        Tax Slab {index + 1}
      </h2>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">

        <div>
          <label className="block mb-2 text-sm">
            Tax Rate
          </label>

          <div className="flex">
            <span className="border bg-gray-100 px-4 py-3">
              %
            </span>

            <input
              type="number"
              value={slab.rate}
              onChange={(e) =>
                updateSlab(
                  slab.id,
                  "rate",
                  e.target.value
                )
              }
              className="border w-full p-3"
            />
          </div>
        </div>

        <div>
          <label className="block mb-2 text-sm">
            Start Amount
          </label>

          <div className="flex">
            <span className="border bg-gray-100 px-4 py-3">
              ₹
            </span>

            <input
              type="number"
              value={slab.start}
              onChange={(e) =>
                updateSlab(
                  slab.id,
                  "start",
                  e.target.value
                )
              }
              className="border w-full p-3"
            />
          </div>
        </div>

        <div>
          <label className="block mb-2 text-sm">
            End Amount
          </label>

          <div className="flex">
            <span className="border bg-gray-100 px-4 py-3">
              ₹
            </span>

            <input
              type="number"
              value={slab.end}
              onChange={(e) =>
                updateSlab(
                  slab.id,
                  "end",
                  e.target.value
                )
              }
              className="border w-full p-3"
            />
          </div>
        </div>

      </div>

      {canDelete && (
        <button
          onClick={() => removeSlab(slab.id)}
          className="mt-5 bg-red-500 text-white px-4 py-2 rounded-lg"
        >
          Remove
        </button>
      )}
    </div>
  );
}