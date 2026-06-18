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
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/90 border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        <div className="py-4">

          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">

            <div className="flex items-center gap-4">

              <div className="h-14 w-14 rounded-2xl bg-linear-to-r from-indigo-600 via-purple-600 to-blue-600 flex items-center justify-center text-white text-2xl shadow-lg">
                💼
              </div>

              <div>
                <h1 className="text-2xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Payroll Admin
                </h1>

                <p className="text-slate-500 text-sm">
                  Global Payroll Management System
                </p>
              </div>

            </div>

            <div className="flex items-center gap-3">

              <div className="hidden md:flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-xl">
                <span>🔔</span>
                <span className="text-sm text-slate-600">
                  Notifications
                </span>
              </div>

              <div className="h-11 w-11 rounded-full bg-linear-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold shadow-md">
                A
              </div>

            </div>

          </div>

          {/* Navigation */}
          <div className="mt-6 flex flex-wrap gap-3">

            {menuItems.map((item) => (
              <button
                key={item.value}
                onClick={() =>
                  setActivePage(item.value)
                }
                className={`
                  flex items-center gap-2
                  px-5 py-3
                  rounded-xl
                  text-sm
                  font-medium
                  transition-all
                  duration-300
                  ${
                    activePage === item.value
                      ? "bg-linear-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:scale-105"
                  }
                `}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}

          </div>

        </div>

      </div>
    </nav>
  );
}