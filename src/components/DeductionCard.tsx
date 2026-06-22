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
    <div className="card border mb-4 shadow-sm">
      {/* Header */}
      <div
        className="card-header text-white fw-bold"
        style={{ backgroundColor: "#0d3b66" }}
      >
        📝 Deduction {index + 1}
      </div>

      {/* Content */}
      <div className="card-body">
        <div className="row">
          {/* Deduction Name */}
          <div className="col-md-6 mb-3">
            <label className="form-label small fw-medium">
              Deduction Name
            </label>

            <input
              type="text"
              className="form-control form-control-sm"
              value={deduction.name}
              placeholder={`Deduction ${index + 1}`}
              onChange={(e) =>
                updateDeduction(
                  deduction.id,
                  "name",
                  e.target.value
                )
              }
            />
          </div>

          {/* Percentage */}
          <div className="col-md-6 mb-3">
            <label className="form-label small fw-medium">
              Deduction Percentage
            </label>

            <div className="input-group input-group-sm">
              <input
                type="number"
                className="form-control"
                value={deduction.percentage}
                onChange={(e) =>
                  updateDeduction(
                    deduction.id,
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
                removeDeduction(deduction.id)
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