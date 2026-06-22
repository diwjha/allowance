import { useState } from "react";
import DeductionCard from "../components/DeductionCard";
import { Deduction } from "../types/payroll";

export default function DeductionPage() {
  const [annualSalary, setAnnualSalary] =
    useState<number>(1200000);

  const [deductions, setDeductions] =
    useState<Deduction[]>([
      {
        id: 1,
        name: "Provident Fund (PF)",
        percentage: 12,
      },
      {
        id: 2,
        name: "Professional Tax",
        percentage: 2,
      },
      {
        id: 3,
        name: "Health Insurance",
        percentage: 3,
      },
      {
        id: 4,
        name: "Labour Welfare Fund",
        percentage: 1,
      },
    ]);


  const addDeduction = (): void => {
    setDeductions((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: "",
        percentage: 0,
      },
    ]);
  };


  const removeDeduction = (
    id:number
  ):void => {

    setDeductions((prev)=>
      prev.filter(
        item=>item.id!==id
      )
    );

  };


  const updateDeduction = (
    id:number,
    field:keyof Deduction,
    value:string|number
  ):void=>{

    setDeductions((prev)=>
      prev.map(item=>
        item.id===id
        ?
        {
          ...item,
          [field]:value
        }
        :
        item
      )
    );

  };


  const totalDeductionPercentage =
    deductions.reduce(
      (sum,item)=>
        sum + item.percentage,
      0
    );


  const totalDeductionAmount =
    (annualSalary *
      totalDeductionPercentage) /
    100;


  const netSalary =
    annualSalary -
    totalDeductionAmount;



  return (
    <div className="container-fluid">


      {/* Header */}

      <div className="d-flex justify-content-between align-items-start flex-wrap gap-3 mb-5">
        <div>
          <h1 className="display-5 fw-bold mb-2">
            Deduction Management
          </h1>
          <p className="text-muted">
            Manage employee deductions and statutory payroll rules
          </p>
        </div>

        <div className="card border-0 shadow-sm" style={{ backgroundColor: "#f8f9fa" }}>
          <div className="card-body py-2 px-3">
            <p className="text-muted small mb-1">Total Rules</p>
            <h5 className="fw-bold mb-0" style={{ color: "#0d3b66" }}>{deductions.length}</h5>
          </div>
        </div>
      </div>





      {/* Summary Cards */}

      <div className="row g-4 mb-5">


        <div className="col-lg-4 col-md-6">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <p className="text-muted small mb-2">Annual Salary</p>
              <h5 className="fw-bold mb-2" style={{ color: "#0d3b66", fontSize: "1.5rem" }}>
                ₹ {annualSalary.toLocaleString("en-IN")}
              </h5>
              <span className="text-muted small">Yearly CTC calculation</span>
            </div>
          </div>
        </div>





        <div className="col-lg-4 col-md-6">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <p className="text-muted small mb-2">Total Deduction</p>
              <h5 className="fw-bold mb-2 text-danger" style={{ fontSize: "1.5rem" }}>{totalDeductionPercentage}%</h5>
              <p className="small text-danger mb-0">₹ {totalDeductionAmount.toLocaleString("en-IN")}</p>
            </div>
          </div>
        </div>





        <div className="col-lg-4 col-md-6">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <p className="text-muted small mb-2">Net Salary</p>
              <h5 className="fw-bold mb-2 text-success" style={{ fontSize: "1.5rem" }}>
                ₹ {netSalary.toLocaleString("en-IN")}
              </h5>
              <span className="text-muted small">After deductions</span>
            </div>
          </div>
        </div>
      </div>







      {/* Salary Section */}

      <div className="card border-0 shadow-sm mb-5">
        <div className="card-body">
          <h5 className="card-title fw-bold mb-4">
            Salary Calculation
          </h5>

          <label className="form-label small text-muted">
            Annual Salary Amount
          </label>

          <div className="input-group">
            <span className="input-group-text bg-light">₹</span>
            <input
              type="number"
              value={annualSalary}
              onChange={(e) => setAnnualSalary(Number(e.target.value))}
              className="form-control"
            />
          </div>
        </div>
      </div>







      {/* Deduction Rules */}

      <div className="card border-0 shadow-sm mb-5">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">
            <div>
              <h5 className="card-title fw-bold mb-1">
                Deduction Rules
              </h5>
              <p className="text-muted small mb-0">
                Configure percentage based deductions
              </p>
            </div>

            <button
              onClick={addDeduction}
              className="btn btn-primary btn-sm"
            >
              + Add Deduction
            </button>
          </div>
          <div className="vstack gap-3">
            {deductions.length === 0 ? (
              <div className="text-center py-5 text-muted">
                No deductions configured
              </div>
            ) : (
              deductions.map((deduction, index) => (
                <DeductionCard
                  key={deduction.id}
                  deduction={deduction}
                  index={index}
                  updateDeduction={updateDeduction}
                  removeDeduction={removeDeduction}
                  canDelete={deductions.length > 1}
                />
              ))
            )}
          </div>
        </div>
      </div>









      {/* Preview */}

      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <h5 className="card-title fw-bold mb-4">
            Payroll Preview
          </h5>          <div className="vstack gap-2">
            <div className="d-flex justify-content-between pb-2 border-bottom">
              <span>Annual Salary</span>
              <span className="fw-bold">
                ₹ {annualSalary.toLocaleString("en-IN")}
              </span>
            </div>
            {deductions.map((item) => (
              <div key={item.id} className="d-flex justify-content-between align-items-center">
                <span>
                  {item.name || "Unnamed Deduction"}
                  <span className="text-muted small ms-2">
                    ({item.percentage}%)
                  </span>
                </span>
                <span className="text-danger fw-bold">
                  ₹{(annualSalary * item.percentage / 100).toLocaleString("en-IN")}
                </span>
              </div>
            ))}

            <div className="d-flex justify-content-between pb-2 border-top pt-2">
              <span className="fw-bold">Total Deduction</span>
              <span className="text-danger fw-bold">
                ₹ {totalDeductionAmount.toLocaleString("en-IN")}
              </span>
            </div>
            <div className="d-flex justify-content-between p-3 rounded" style={{ backgroundColor: "#d4edda" }}>
              <span className="fw-bold">Net Salary</span>
              <span className="text-success fw-bold">
                ₹ {netSalary.toLocaleString("en-IN")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}