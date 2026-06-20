
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
  {
    label: "Reports",
    value: "deductions",
    icon: "📈",
  },
];

export default function Sidebar({ activePage, setActivePage }: SidebarProps) {
  return (
    <aside
      className="
      fixed
      top-0
      left-0
      w-72
      h-screen
      bg-white
      border-r
      border-slate-200
      shadow-lg
      flex
      flex-col
      z-40
      "
    >
      {/* Logo Section */}

      <div
        className="
        shrink-0
        bg-linear-to-r
        from-indigo-600
        via-purple-600
        to-pink-500
        p-6
        "
      >
        <h1
          className="
          text-2xl
          font-bold
          text-white
          "
        >
          Payroll Admin
        </h1>

        <p
          className="
          text-indigo-100
          text-sm
          mt-2
          "
        >
          Global Payroll Management
        </p>
      </div>

      {/* Navigation */}

      <div
        className="
        flex-1
        overflow-y-auto
        px-4
        py-6
        "
      >
        <p
          className="
          text-xs
          uppercase
          tracking-widest
          text-slate-400
          font-semibold
          mb-5
          px-2
          "
        >
          Navigation
        </p>

        <nav className="space-y-3">
          {menuItems.map((item) => {
            const active = activePage === item.value;

            return (
              <button
                key={item.value}
                onClick={() => setActivePage(item.value)}
                className={`
                  relative
                  w-full
                  flex
                  items-center
                  gap-4
                  px-4
                  py-3
                  rounded-2xl
                  transition-all
                  duration-300
                  group

                  ${
                    active
                      ? `
                      bg-linear-to-r
                      from-indigo-600
                      to-purple-600
                      text-white
                      shadow-lg
                      `
                      : `
                      text-slate-700
                      hover:bg-slate-100
                      `
                  }
                `}
              >
                {active && (
                  <span
                    className="
                    absolute
                    left-0
                    top-3
                    bottom-3
                    w-1
                    rounded-r-full
                    bg-white
                    "
                  />
                )}

                <span
                  className={`
                    w-11
                    h-11
                    flex
                    items-center
                    justify-center
                    rounded-xl
                    text-xl
                    shrink-0
                    transition-all

                    ${
                      active
                        ? "bg-white/20"
                        : "bg-slate-100 group-hover:bg-white"
                    }
                  `}
                >
                  {item.icon}
                </span>

                <span
                  className="
                  text-sm
                  font-semibold
                  truncate
                  "
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Footer */}

      <div
        className="
        p-5
        border-t
        border-slate-100
        bg-white
        "
      >
        <div
          className="
          rounded-2xl
          bg-slate-50
          p-4
          "
        >
          <p
            className="
            text-sm
            font-semibold
            text-slate-700
            "
          >
            Payroll System
          </p>

          <p
            className="
            text-xs
            text-slate-500
            mt-1
            "
          >
            Version 1.0
          </p>
        </div>
      </div>
    </aside>
  );
}
