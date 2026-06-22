import { useState } from "react";
import AllowanceCard from "../components/AllowanceCard";
import { Allowance } from "../types/payroll";

export default function PayrollPage() {


  const [fixedSalary,setFixedSalary] =
    useState<number>(1200000);


  const [allowances,setAllowances] =
    useState<Allowance[]>([
      {
        id:1,
        name:"HRA",
        percentage:40
      },
      {
        id:2,
        name:"Transport Allowance",
        percentage:10
      },
      {
        id:3,
        name:"Medical Allowance",
        percentage:5
      },
      {
        id:4,
        name:"Special Allowance",
        percentage:15
      }
    ]);



  const addAllowance = ():void=>{

    setAllowances(prev=>[
      ...prev,
      {
        id:Date.now(),
        name:"",
        percentage:0
      }
    ]);

  };



  const removeAllowance = (
    id:number
  ):void=>{


    setAllowances(prev=>
      prev.filter(
        item=>item.id!==id
      )
    );

  };



  const updateAllowance = (
    id:number,
    field:keyof Allowance,
    value:string|number
  ):void=>{


    setAllowances(prev=>

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




  const totalAllowancePercentage =
    allowances.reduce(
      (sum,item)=>
        sum + item.percentage,
      0
    );



  const totalAllowanceAmount =
    (
      fixedSalary *
      totalAllowancePercentage
    ) / 100;



  const grossSalary =
    fixedSalary +
    totalAllowanceAmount;





return (
<div className="mb-5">
{/* Header */}
<div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-5">


<div>
<h1 className="h2 fw-bold text-dark mb-2">
Payroll Configuration
</h1>
<p className="text-muted mb-0">
Manage salary structure and employee allowance setup
</p>
</div>



<div className="bg-light p-3 rounded border">
<p className="small text-muted mb-2">
Allowance Rules
</p>
<h2 className="h3 fw-bold text-success mb-0">
{allowances.length}
</h2>
</div>



</div>









{/* Summary Cards */}



<div className="row mb-5 g-3">



<div className="col-lg-4">
<div className="card border-0 shadow-sm">
<div className="card-body">
<p className="text-muted small mb-2">Fixed Salary</p>
<h2 className="h3 fw-bold text-primary mb-2">
₹ {fixedSalary.toLocaleString("en-IN")}
</h2>
<p className="small text-muted mb-0">Basic yearly salary</p>
</div>
</div>
</div>







<div className="col-lg-4">
<div className="card border-0 shadow-sm">
<div className="card-body">
<p className="text-muted small mb-2">Total Allowance</p>
<h2 className="h3 fw-bold text-success mb-2">
{totalAllowancePercentage}%
</h2>
<p className="small text-success mb-0">
₹ {totalAllowanceAmount.toLocaleString("en-IN")}
</p>
</div>
</div>
</div>







<div className="col-lg-4">
<div className="card border-0 shadow-sm">
<div className="card-body">
<p className="text-muted small mb-2">Gross Salary</p>
<h2 className="h3 fw-bold text-info mb-2">
₹ {grossSalary.toLocaleString("en-IN")}
</h2>
<span className="small text-muted">Salary after allowances</span>
</div>
</div>
</div>



</div>









{/* Fixed Salary */}
<div className="card border-0 shadow-sm mb-5">
<div className="card-body">
<h5 className="card-title fw-bold mb-4">
Fixed Salary Setup
</h5>
<label className="form-label small text-muted">
Annual Fixed Salary
</label>
<div className="input-group">
<span className="input-group-text bg-light">
₹
</span>
<input
type="number"
value={fixedSalary}
onChange={(e)=>
setFixedSalary(Number(e.target.value))
}
className="form-control"
placeholder="Enter salary"
/>
</div>
</div>
</div>









{/* Allowances Section */}
<div className="card border-0 shadow-sm mb-5">
<div className="card-body">
<div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">
<div>
<h5 className="card-title fw-bold">
Allowances
</h5>
<p className="small text-muted mb-0">
Configure employee benefits and additions
</p>
</div>
<button
onClick={addAllowance}
className="btn btn-primary btn-sm"
>
+ Add Allowance
</button>
</div>

<div className="d-flex flex-column gap-3">
{
allowances.length===0
?
<div className="text-center text-muted py-4">
No allowances added
</div>
:
allowances.map(
(allowance,index)=>(
<AllowanceCard
key={allowance.id}
allowance={allowance}
index={index}
updateAllowance={updateAllowance}
removeAllowance={removeAllowance}
canDelete={allowances.length>1}
/>
)
)
}
</div>
</div>
</div>









{/* Preview */}




<div className="card border-0 shadow-sm">
<div className="card-body">
<h5 className="card-title fw-bold mb-4">
Salary Structure Preview
</h5>




<div className="border-bottom pb-3 mb-3">





<div className="d-flex justify-content-between mb-3">
<span className="text-muted">Fixed Salary</span>
<span className="fw-bold">
₹ {fixedSalary.toLocaleString("en-IN")}
</span>
</div>






{
allowances.map(item=>(
<div
key={item.id}
className="d-flex justify-content-between mb-2"
>
<span className="small">
{item.name || "Allowance"}
<span className="text-muted ms-2">
({item.percentage}%)
</span>
</span>
<span className="text-success small">
₹
{
(
fixedSalary *
item.percentage /
100
).toLocaleString("en-IN")
}
</span>
</div>
))
}









</div>

<div className="bg-light rounded p-3 d-flex justify-content-between">
<span className="fw-bold">Gross Salary</span>
<span className="text-success fw-bold">
₹ {grossSalary.toLocaleString("en-IN")}
</span>
</div>





</div>


</div>







</div>


);


}