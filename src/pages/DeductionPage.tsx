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

<div className="space-y-8">


{/* Header */}

<div className="flex justify-between items-center flex-wrap gap-4">

<div>

<h1 className="text-3xl font-bold text-slate-800">
Deduction Management
</h1>

<p className="text-slate-500 mt-1">
Manage employee deductions and statutory payroll rules
</p>

</div>


<div className="bg-indigo-100 px-5 py-3 rounded-xl">

<p className="text-sm text-indigo-600">
Total Rules
</p>

<h2 className="text-2xl font-bold text-indigo-700">
{deductions.length}
</h2>

</div>

</div>





{/* Summary Cards */}


<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">


<div className="bg-white border rounded-2xl shadow-sm p-6">

<p className="text-slate-500">
Annual Salary
</p>


<h2 className="text-3xl font-bold text-indigo-600 mt-3">

₹ {annualSalary.toLocaleString("en-IN")}

</h2>


<span className="text-xs text-slate-400">
Yearly CTC calculation
</span>

</div>





<div className="bg-white border rounded-2xl shadow-sm p-6">


<p className="text-slate-500">
Total Deduction
</p>


<h2 className="text-3xl font-bold text-red-600 mt-3">

{totalDeductionPercentage}%

</h2>


<p className="text-sm text-red-500 mt-2">

₹ {totalDeductionAmount.toLocaleString("en-IN")}

</p>


</div>





<div className="bg-white border rounded-2xl shadow-sm p-6">


<p className="text-slate-500">
Net Salary
</p>


<h2 className="text-3xl font-bold text-green-600 mt-3">

₹ {netSalary.toLocaleString("en-IN")}

</h2>


<span className="text-xs text-slate-400">
After deductions
</span>


</div>



</div>







{/* Salary Section */}


<div className="bg-white rounded-2xl shadow-sm border p-6">


<h2 className="text-xl font-semibold mb-5">
Salary Calculation
</h2>



<label className="text-sm text-slate-500">
Annual Salary Amount
</label>


<div className="flex mt-2">


<span className="bg-slate-100 border px-5 flex items-center rounded-l-lg">
₹
</span>



<input

type="number"

value={annualSalary}

onChange={(e)=>
setAnnualSalary(
Number(e.target.value)
)
}

className="
border 
p-3
w-full
rounded-r-lg
focus:ring-2
focus:ring-indigo-500
outline-none
"

/>



</div>


</div>







{/* Deduction Rules */}


<div className="bg-white rounded-2xl shadow-sm border p-6">


<div className="flex justify-between items-center flex-wrap gap-4 mb-6">


<div>

<h2 className="text-2xl font-semibold">
Deduction Rules
</h2>


<p className="text-sm text-slate-500">
Configure percentage based deductions
</p>


</div>




<button

onClick={addDeduction}

className="
bg-indigo-600
hover:bg-indigo-700
text-white
px-5
py-3
rounded-xl
shadow
transition
"

>

+ Add Deduction

</button>



</div>





<div className="space-y-5">


{
deductions.length===0

?

<div className="text-center py-10 text-slate-400">

No deductions configured

</div>


:


deductions.map(
(deduction,index)=>(


<DeductionCard

key={deduction.id}

deduction={deduction}

index={index}

updateDeduction={
updateDeduction
}

removeDeduction={
removeDeduction
}

canDelete={
deductions.length>1
}

/>


)

)


}



</div>


</div>









{/* Preview */}



<div className="bg-white rounded-2xl shadow-sm border p-6">


<h2 className="text-2xl font-semibold mb-6">
Payroll Preview
</h2>




<div className="space-y-4">



<div className="flex justify-between border-b pb-4">

<span>
Annual Salary
</span>


<span className="font-semibold">

₹ {annualSalary.toLocaleString("en-IN")}

</span>


</div>




{
deductions.map(item=>(


<div

key={item.id}

className="
flex
justify-between
items-center
"

>


<span>

{item.name || "Unnamed Deduction"}

<span className="text-xs text-slate-400 ml-2">
({item.percentage}%)
</span>


</span>




<span className="text-red-600 font-medium">

₹
{
(
annualSalary *
item.percentage
/
100
).toLocaleString("en-IN")
}


</span>



</div>


))

}






<div className="border-t pt-5 flex justify-between text-lg font-bold">


<span>
Total Deduction
</span>


<span className="text-red-600">

₹ {totalDeductionAmount.toLocaleString("en-IN")}

</span>


</div>





<div className="bg-green-50 rounded-xl p-4 flex justify-between text-xl font-bold">


<span>
Net Salary
</span>


<span className="text-green-600">

₹ {netSalary.toLocaleString("en-IN")}

</span>


</div>




</div>


</div>



</div>


  );
}