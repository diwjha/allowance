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
    <div className="card border mb-4 shadow-sm">
      {/* Header */}
      <div
        className="card-header text-white fw-bold"
        style={{ backgroundColor: "#0d3b66" }}
      >
        💰 Allowance {index + 1}
      </div>

      {/* Content */}
      <div className="card-body">
        <div className="row">
          {/* Allowance Name */}
          <div className="col-md-6 mb-3">
            <label className="form-label small fw-medium">
              Allowance Name
            </label>

            <input
              type="text"
              className="form-control form-control-sm"
              value={allowance.name}
              placeholder={`Allowance ${index + 1}`}
              onChange={(e) =>
                updateAllowance(
                  allowance.id,
                  "name",
                  e.target.value
                )
              }
            />
          </div>

          {/* Percentage */}
          <div className="col-md-6 mb-3">
            <label className="form-label small fw-medium">
              Allowance Percentage
            </label>

            <div className="input-group input-group-sm">
              <input
                type="number"
                className="form-control"
                value={allowance.percentage}
                onChange={(e) =>
                  updateAllowance(
                    allowance.id,
                    "percentage",
                    Number(e.target.value)
                  )
                }
              />
              <span className="input-group-text">%</span>
            </div>
          </div>
        </div>

        {/* Delete Button */}
        {canDelete && (
          <div className="mt-3 text-end">
            <button
              onClick={() =>
                removeAllowance(
                  allowance.id
                )
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