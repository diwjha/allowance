import { useState } from "react";
import Navbar from "./components/Navbar";
import TaxSlabPage from "./pages/TaxSlabPage";
import PayrollPage from "./pages/PayrollPage";
import DeductionPage from "./pages/DeductionPage";

function App() {
  const [activePage, setActivePage] = useState("slabs");

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <div className="max-w-7xl mx-auto p-6">
        {activePage === "slabs" && <TaxSlabPage />}
        {activePage === "payroll" && <PayrollPage />}
        {activePage === "deductions" && <DeductionPage />}
      </div>
    </div>
  );
}

export default App;