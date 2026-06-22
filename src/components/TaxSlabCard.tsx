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
    <div className="card border mb-4 shadow-sm">
      {/* Header */}
      <div
        className="card-header text-white fw-bold"
        style={{ backgroundColor: "#0d3b66" }}
      >
        📊 Tax Slab {index + 1}
      </div>

      {/* Content */}
      <div className="card-body">
        <div className="row">
          {/* Tax Rate */}
          <div className="col-md-4 mb-3">
            <label className="form-label small fw-medium">
              Tax Rate
            </label>

            <div className="input-group input-group-sm">
              <input
                type="number"
                className="form-control"
                value={slab.rate}
                onChange={(e) =>
                  updateSlab(
                    slab.id,
                    "rate",
                    Number(e.target.value)
                  )
                }
              />
              <span className="input-group-text">%</span>
            </div>
          </div>

          {/* Start Amount */}
          <div className="col-md-4 mb-3">
            <label className="form-label small fw-medium">
              Start Amount
            </label>

            <div className="input-group input-group-sm">
              <span className="input-group-text">₹</span>
              <input
                type="number"
                className="form-control"
                value={slab.start}
                onChange={(e) =>
                  updateSlab(
                    slab.id,
                    "start",
                    Number(e.target.value)
                  )
                }
              />
            </div>
          </div>

          {/* End Amount */}
          <div className="col-md-4 mb-3">
            <label className="form-label small fw-medium">
              End Amount
            </label>

            <div className="input-group input-group-sm">
              <span className="input-group-text">₹</span>
              <input
                type="number"
                className="form-control"
                value={slab.end}
                onChange={(e) =>
                  updateSlab(
                    slab.id,
                    "end",
                    Number(e.target.value)
                  )
                }
              />
            </div>
          </div>
        </div>

        {/* Delete Button */}
        {canDelete && (
          <div className="mt-3 text-end">
            <button
              onClick={() =>
                removeSlab(slab.id)
              }
              className="btn btn-danger btn-sm"
            >
              🗑 Remove
            </button>
          </div>
        )}
      </div>
    </div>
  );
}