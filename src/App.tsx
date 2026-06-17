import { useState } from "react";
import Navbar from "./components/Navbar";
import TaxSlabPage from "./pages/TaxSlabPage";
import PayrollPage from "./pages/PayrollPage";
import DeductionPage from "./pages/DeductionPage";
import { PageType } from "./types/navigation";

function App() {
  const [activePage, setActivePage] =
    useState<PageType>("slabs");

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <main className="max-w-7xl mx-auto p-6">
        {activePage === "slabs" && (
          <TaxSlabPage />
        )}

        {activePage === "payroll" && (
          <PayrollPage />
        )}

        {activePage === "deductions" && (
          <DeductionPage />
        )}
      </main>
    </div>
  );
}

export default App;