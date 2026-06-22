
import { Dispatch, SetStateAction } from "react";
import { PageType } from "../types/navigation";

type SidebarProps = {
  activePage: PageType;
  setActivePage: Dispatch<SetStateAction<PageType>>;
};

const menuItems: {
  label: string;
  value: PageType;
  icon: string;
}[] = [
  {
    label: "Dashboard",
    value: "dashboard",
    icon: "📊",
  },
  {
  label: "Employees",
  value: "employee-master",
  icon: "👨‍💼"
},
  // {
  //   label: "Countries",
  //   value: "country-master",
  //   icon: "🌍",
  // },
  {
    label: "Allowances",
    value: "allowance-master",
    icon: "💰",
  },
  {
    label: "Deductions",
    value: "deduction-master",
    icon: "➖",
  },
  {
    label: "Tax Slabs",
    value: "slabs",
    icon: "📑",
  },
  {
    label: "Payroll",
    value: "payroll",
    icon: "💵",
  },
  // {
  //   label: "Reports",
  //   value: "deductions",
  //   icon: "📈",
  // },
];

export default function Sidebar({ activePage, setActivePage }: SidebarProps) {
  return (
    <aside
      className="position-fixed top-0 start-0 vh-100 border-end shadow-lg d-flex flex-column"
      style={{
        width: "250px",
        backgroundColor: "#fff",
        borderColor: "#dee2e6",
        zIndex: 40,
      }}
    >
      {/* Logo Section */}
      <div
        className="p-4 text-white flex-shrink-0"
        style={{ backgroundColor: "#0d3b66" }}
      >
        <h5 className="mb-2 fw-bold">Payroll Admin</h5>
        <small className="text-white-50">
          Global Payroll Management
        </small>
      </div>

      {/* Navigation */}
      <div className="flex-grow-1 overflow-auto px-3 py-4">
        <p className="small text-muted fw-bold mb-3">
          NAVIGATION
        </p>

        <nav className="d-flex flex-column gap-2">
          {menuItems.map((item) => {
            const active = activePage === item.value;

            return (
              <button
                key={item.value}
                onClick={() => setActivePage(item.value)}
                className={`btn btn-sm text-start fw-medium ${
                  active
                    ? "btn-primary text-white"
                    : "btn-light text-dark"
                }`}
                style={
                  active
                    ? { backgroundColor: "#0d3b66", borderColor: "#0d3b66" }
                    : {}
                }
              >
                <span className="me-2">{item.icon}</span>
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Footer */}
      <div
        className="p-3 border-top"
        style={{ borderColor: "#dee2e6" }}
      >
        <div className="p-3 rounded" style={{ backgroundColor: "#f8f9fa" }}>
          <p className="small fw-bold mb-1">
            Payroll System
          </p>

          <small className="text-muted">
            Version 1.0
          </small>
        </div>
      </div>
    </aside>
  );
}
