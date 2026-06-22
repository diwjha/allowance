import { Dispatch, SetStateAction } from "react";
import { PageType } from "../types/navigation";

type NavbarProps = {
  activePage: PageType;
  setActivePage: Dispatch<
    SetStateAction<PageType>
  >;
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
    label: "Countries",
    value: "country-master",
    icon: "🌍",
  },
  {
    label: "Allowances",
    value: "allowance-master",
    icon: "💰",
  },
  {
    label: "Deductions",
    value: "deduction-master",
    icon: "🧾",
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
  {
    label: "Reports",
    value: "deductions",
    icon: "📈",
  },
];

export default function Navbar({
  activePage,
  setActivePage,
}: NavbarProps) {
  return (
    <nav className="navbar sticky-top bg-white shadow-sm border-bottom" style={{ borderBottomColor: "#dee2e6" }}>
      <div className="container-fluid px-3">

        {/* Header */}
        <div className="d-flex align-items-center gap-3 mb-3">
          <div
            className="d-flex align-items-center justify-content-center text-white fw-bold rounded"
            style={{
              height: "3rem",
              width: "3rem",
              backgroundColor: "#0d3b66",
              fontSize: "1.5rem",
            }}
          >
            💼
          </div>

          <div>
            <h5 className="mb-0 fw-bold" style={{ color: "#0d3b66" }}>
              Payroll Admin
            </h5>

            <small className="text-muted">
              Global Payroll Management System
            </small>
          </div>
        </div>

        {/* Navigation */}
        <div className="d-flex flex-wrap gap-2">
          {menuItems.map((item) => (
            <button
              key={item.value}
              onClick={() =>
                setActivePage(item.value)
              }
              className={`btn btn-sm fw-medium ${
                activePage === item.value
                  ? "btn-primary"
                  : "btn-outline-secondary"
              }`}
              style={
                activePage === item.value
                  ? { backgroundColor: "#0d3b66", borderColor: "#0d3b66" }
                  : {}
              }
            >
              <span>{item.icon}</span>
              <span className="ms-2">{item.label}</span>
            </button>
          ))}
        </div>

      </div>
    </nav>
  );
}