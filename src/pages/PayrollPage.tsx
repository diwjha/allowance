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


<div className="space-y-8">





{/* Header */}


<div className="flex justify-between items-center flex-wrap gap-4">


<div>


<h1 className="text-3xl font-bold text-slate-800">

Payroll Configuration

</h1>


<p className="text-slate-500 mt-1">

Manage salary structure and employee allowance setup

</p>


</div>



<div className="bg-green-100 px-5 py-3 rounded-xl">


<p className="text-sm text-green-600">

Allowance Rules

</p>


<h2 className="text-2xl font-bold text-green-700">

{allowances.length}

</h2>


</div>



</div>









{/* Summary Cards */}



<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">



<div className="bg-white border rounded-2xl shadow-sm p-6">


<p className="text-slate-500">

Fixed Salary

</p>


<h2 className="text-3xl font-bold text-indigo-600 mt-3">


₹ {fixedSalary.toLocaleString("en-IN")}


</h2>


<p className="text-xs text-slate-400 mt-2">

Basic yearly salary

</p>


</div>







<div className="bg-white border rounded-2xl shadow-sm p-6">


<p className="text-slate-500">

Total Allowance

</p>


<h2 className="text-3xl font-bold text-green-600 mt-3">

{totalAllowancePercentage}%

</h2>


<p className="text-sm text-green-600 mt-2">

₹ {totalAllowanceAmount.toLocaleString("en-IN")}

</p>



</div>







<div className="bg-white border rounded-2xl shadow-sm p-6">


<p className="text-slate-500">

Gross Salary

</p>


<h2 className="text-3xl font-bold text-blue-600 mt-3">


₹ {grossSalary.toLocaleString("en-IN")}


</h2>


<span className="text-xs text-slate-400">

Salary after allowances

</span>


</div>



</div>









{/* Fixed Salary */}



<div className="bg-white rounded-2xl border shadow-sm p-6">


<h2 className="text-xl font-semibold mb-5">

Fixed Salary Setup

</h2>


<label className="text-sm text-slate-500">

Annual Fixed Salary

</label>


<div className="flex mt-2">


<span className="bg-slate-100 border px-5 flex items-center rounded-l-lg">

₹

</span>




<input


type="number"


value={fixedSalary}


onChange={(e)=>

setFixedSalary(
Number(e.target.value)
)

}


className="
border
p-3
w-full
rounded-r-lg
outline-none
focus:ring-2
focus:ring-indigo-500
"


placeholder="Enter salary"

/>



</div>


</div>









{/* Allowances Section */}



<div className="bg-white border rounded-2xl shadow-sm p-6">


<div className="flex justify-between items-center flex-wrap gap-4 mb-6">



<div>


<h2 className="text-2xl font-semibold">

Allowances

</h2>


<p className="text-sm text-slate-500">

Configure employee benefits and additions

</p>


</div>





<button


onClick={addAllowance}


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

+ Add Allowance


</button>



</div>







<div className="space-y-5">



{

allowances.length===0


?


<div className="text-center py-10 text-slate-400">

No allowances added

</div>


:


allowances.map(
(allowance,index)=>(


<AllowanceCard

key={allowance.id}

allowance={allowance}

index={index}

updateAllowance={
updateAllowance
}

removeAllowance={
removeAllowance
}

canDelete={
allowances.length>1
}

/>


)

)


}



</div>



</div>









{/* Preview */}




<div className="bg-white border rounded-2xl shadow-sm p-6">


<h2 className="text-2xl font-semibold mb-6">

Salary Structure Preview

</h2>




<div className="space-y-4">





<div className="flex justify-between border-b pb-4">

<span>

Fixed Salary

</span>


<span className="font-semibold">

₹ {fixedSalary.toLocaleString("en-IN")}

</span>


</div>






{

allowances.map(item=>(


<div

key={item.id}

className="flex justify-between"

>


<span>

{item.name || "Allowance"}

<span className="text-xs text-slate-400 ml-2">

({item.percentage}%)

</span>


</span>



<span className="text-green-600">


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








<div className="border-t pt-5 bg-green-50 rounded-xl p-4 flex justify-between text-xl font-bold">


<span>

Gross Salary

</span>


<span className="text-green-600">

₹ {grossSalary.toLocaleString("en-IN")}

</span>


</div>





</div>


</div>







</div>


);


}