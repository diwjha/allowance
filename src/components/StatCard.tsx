type StatCardProps = {
  title: string;
  value: number | string;
  icon: string;
};

export default function StatCard({ title, value, icon }: StatCardProps) {
  return (
    <div className="card border shadow-sm h-100">
      <div className="card-body d-flex align-items-center justify-content-between">
        {/* Text Section */}
        <div className="flex-grow-1">
          <p className="text-muted small fw-medium text-truncate" title={title}>
            {title}
          </p>

          <h3 className="mt-2 fw-bold" style={{ fontSize: "2rem" }}>
            {value}
          </h3>
        </div>

        {/* Icon */}
        <div
          className="text-white fw-bold d-flex align-items-center justify-content-center"
          style={{
            height: "3.5rem",
            width: "3.5rem",
            borderRadius: "8px",
            backgroundColor: "#0d3b66",
            fontSize: "1.5rem",
          }}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}
