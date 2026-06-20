
import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import DashboardPage from "./pages/DashboardPage";
import EmployeeListPage from "./pages/Employee/EmployeeListPage";
import CountryMasterPage from "./pages/CountryMasterPage";
import AllowanceMasterPage from "./pages/AllowanceMasterPage";
import DeductionMasterPage from "./pages/DeductionMasterPage";
import TaxSlabPage from "./pages/TaxSlabPage";
import PayrollPage from "./pages/PayrollPage";
import DeductionPage from "./pages/DeductionPage";

import { PageType } from "./types/navigation";

function App() {
  const [activePage, setActivePage] =
    useState<PageType>("dashboard");

  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return <DashboardPage />;

      case "employee-master":
        return <EmployeeListPage />;

      case "country-master":
        return <CountryMasterPage />;

      case "allowance-master":
        return <AllowanceMasterPage />;

      case "deduction-master":
        return <DeductionMasterPage />;

      case "slabs":
        return <TaxSlabPage />;

      case "payroll":
        return <PayrollPage />;

      case "deductions":
        return <DeductionPage />;

      default:
        return <DashboardPage />;
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Fixed Sidebar */}

      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      {/* Main Content */}

      <div
        className="
        ml-[280px]
        min-h-screen
        flex
        flex-col
        "
      >
        {/* Header */}

        <Header />

        {/* Page Content */}

        <main
          className="
          flex-1
          p-6
          lg:p-8
          overflow-x-auto
          "
        >
          <div
            className="
            w-full
            max-w-[1600px]
            mx-auto
            "
          >
            {renderPage()}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;