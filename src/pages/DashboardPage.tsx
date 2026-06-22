export default function DashboardPage() {
  const stats = [
    {
      title: "Countries",
      value: "3",
      icon: "🌍",
      bg: "bg-indigo-50",
      color: "text-indigo-600",
    },
    {
      title: "Allowances",
      value: "8",
      icon: "💰",
      bg: "bg-green-50",
      color: "text-green-600",
    },
    {
      title: "Deductions",
      value: "6",
      icon: "📉",
      bg: "bg-red-50",
      color: "text-red-600",
    },
    {
      title: "Tax Slabs",
      value: "12",
      icon: "📑",
      bg: "bg-blue-50",
      color: "text-blue-600",
    },
  ];

  const progress = [
    ["Payroll Configuration", 85],
    ["Tax Setup", 70],
    ["Country Compliance", 92],
  ];

  const activity = [
    ["🌍", "Country Added", "India payroll enabled"],
    ["💰", "Allowance Updated", "HRA revised"],
    ["📉", "Deduction Modified", "PF percentage changed"],
  ];

  return (
    <div className="container-fluid">
      {/* HERO */}

      <section
        className="card border-0 shadow-lg mb-5"
        style={{ backgroundColor: "#0d3b66" }}
      >
        <div className="card-body text-white">
          <h1 className="display-4 fw-bold mb-3">
            Payroll Dashboard
          </h1>

          <p className="lead mb-4 max-width-600">
            Manage payroll structure, salary rules, allowances, deductions and tax
            compliance from one centralized platform.
          </p>

          <div className="d-flex flex-wrap gap-3">
            {["🌍 Global Payroll", "⚡ Automation", "📊 Analytics"].map(
              (item) => (
                <div
                  key={item}
                  className="px-4 py-2 rounded"
                  style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                >
                  <span className="small">{item}</span>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* STATS */}

      <section className="mb-5">
        <div className="row g-4">
          {stats.map((item) => (
            <div key={item.title} className="col-lg-3 col-md-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <p className="text-muted small mb-2">
                        {item.title}
                      </p>
                      <h2 className="h3 fw-bold mb-0">
                        {item.value}
                      </h2>
                    </div>
                    <div
                      className="rounded-2 p-3 text-center"
                      style={{ backgroundColor: "#f8f9fa", fontSize: "1.75rem" }}
                    >
                      {item.icon}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MAIN */}

      <section className="row g-4 mb-5">
        {/* Progress */}

        <div className="col-lg-8">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h5 className="card-title fw-bold mb-0">
                  Payroll Progress
                </h5>
                <span className="badge bg-success">
                  Active
                </span>
              </div>

              {progress.map((item) => (
                <div key={item[0]} className="mb-4">
                  <div className="d-flex justify-content-between mb-2 small">
                    <span className="fw-bold">{item[0]}</span>
                    <span>{item[1]}%</span>
                  </div>
                  <div className="progress" style={{ height: "0.75rem" }}>
                    <div
                      className="progress-bar"
                      style={{
                        width: `${item[1]}%`,
                        backgroundColor: "#0d3b66"
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Activity */}

        <div className="col-lg-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h5 className="card-title fw-bold mb-4">
                Recent Activity
              </h5>

              <div className="vstack gap-3">
                {activity.map((item) => (
                  <div
                    key={item[1]}
                    className="d-flex gap-3"
                  >
                    <div
                      className="rounded-2 p-2 text-center flex-shrink-0"
                      style={{ backgroundColor: "#f8f9fa", minWidth: "45px" }}
                    >
                      <span style={{ fontSize: "1.25rem" }}>{item[0]}</span>
                    </div>

                    <div>
                      <h6 className="fw-bold mb-1">
                        {item[1]}
                      </h6>
                      <p className="small text-muted mb-0">
                        {item[2]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK MANAGEMENT */}

      <section>
        <h5 className="fw-bold mb-4">
          Quick Management
        </h5>

        <div className="row g-4">
          {[
            ["🌍", "Countries", "Manage payroll locations"],
            ["💰", "Allowances", "Configure benefits"],
            ["📉", "Deductions", "Manage compliance"],
          ].map((item) => (
            <div key={item[1]} className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <div style={{ fontSize: "2rem" }} className="mb-3">{item[0]}</div>
                  <h6 className="fw-bold">
                    {item[1]}
                  </h6>
                  <p className="small text-muted mt-2 mb-3">
                    {item[2]}
                  </p>
                  <button className="btn btn-link btn-sm p-0 text-decoration-none">
                    Manage →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
