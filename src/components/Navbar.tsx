import { Dispatch, SetStateAction } from "react";
import { PageType } from "../types/navigation";

type NavbarProps = {
  activePage: PageType;
  setActivePage: Dispatch<
    SetStateAction<PageType>
  >;
};

export default function Navbar({
  activePage,
  setActivePage,
}: NavbarProps) {
  return (
    <nav className="bg-indigo-600 shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12 py-4">
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setActivePage("slabs")}
            className={`px-5 py-2 rounded-lg font-medium transition-all duration-200 ${
              activePage === "slabs"
                ? "bg-white text-indigo-600 shadow-md"
                : "text-white hover:bg-indigo-500"
            }`}
          >
            Tax Slabs
          </button>

          <button
            onClick={() => setActivePage("payroll")}
            className={`px-5 py-2 rounded-lg font-medium transition-all duration-200 ${
              activePage === "payroll"
                ? "bg-white text-indigo-600 shadow-md"
                : "text-white hover:bg-indigo-500"
            }`}
          >
            Payroll
          </button>

          <button
            onClick={() => setActivePage("deductions")}
            className={`px-5 py-2 rounded-lg font-medium transition-all duration-200 ${
              activePage === "deductions"
                ? "bg-white text-indigo-600 shadow-md"
                : "text-white hover:bg-indigo-500"
            }`}
          >
            Deductions
          </button>
        </div>
      </div>
    </nav>
  );
}