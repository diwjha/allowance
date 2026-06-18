import { useMemo, useState } from "react";
import Modal from "../components/Modal";
import Toggle from "../components/Toggle";
import { DeductionMaster } from "../types/master";

const defaultForm: DeductionMaster = {
  id: 0,
  name: "",
  code: "",
  countryCode: "IN",
  valueType: "PERCENTAGE",
  defaultValue: 0,
  minValue: 0,
  maxValue: 0,
  mandatory: true,
  active: true,
};

export default function DeductionMasterPage() {

  const [showModal,setShowModal] = useState(false);

  const [editingId,setEditingId] =
    useState<number | null>(null);

  const [search,setSearch] = useState("");

  const [countryFilter,setCountryFilter] =
    useState("ALL");


  const [deductions,setDeductions] =
  useState<DeductionMaster[]>([
    {
      id:1,
      name:"Provident Fund",
      code:"PF",
      countryCode:"IN",
      valueType:"PERCENTAGE",
      defaultValue:12,
      minValue:0,
      maxValue:12,
      mandatory:true,
      active:true
    },
    {
      id:2,
      name:"Professional Tax",
      code:"PT",
      countryCode:"IN",
      valueType:"FIXED_AMOUNT",
      defaultValue:200,
      minValue:0,
      maxValue:500,
      mandatory:true,
      active:true
    },
    {
      id:3,
      name:"Social Security",
      code:"SS",
      countryCode:"US",
      valueType:"PERCENTAGE",
      defaultValue:6,
      minValue:0,
      maxValue:10,
      mandatory:true,
      active:true
    }
  ]);


  const [form,setForm] =
    useState<DeductionMaster>(defaultForm);



  const filteredData = useMemo(()=>{

    return deductions.filter(item=>{

      const searchMatch =
      item.name.toLowerCase()
      .includes(search.toLowerCase()) ||

      item.code.toLowerCase()
      .includes(search.toLowerCase());


      const countryMatch =
      countryFilter==="ALL"
      ? true
      : item.countryCode===countryFilter;


      return searchMatch && countryMatch;

    });


  },[
    deductions,
    search,
    countryFilter
  ]);



  const resetForm=()=>{
    setForm(defaultForm);
    setEditingId(null);
  };


  const openCreateModal=()=>{
    resetForm();
    setShowModal(true);
  };


  const openEditModal=(item:DeductionMaster)=>{
    setForm({...item});
    setEditingId(item.id);
    setShowModal(true);
  };



  const saveDeduction=()=>{

    if(
      !form.name.trim() ||
      !form.code.trim()
    ){
      alert("Name and Code are required");
      return;
    }



    if(editingId!==null){

      setDeductions(prev=>
        prev.map(item=>
          item.id===editingId
          ? form
          : item
        )
      );

    }
    else{

      setDeductions(prev=>[
        ...prev,
        {
          ...form,
          id:Date.now()
        }
      ]);

    }


    setShowModal(false);
    resetForm();

  };




  const deleteDeduction=(id:number)=>{

    if(
      !window.confirm(
        "Delete this deduction?"
      )
    )
    return;


    setDeductions(prev=>
      prev.filter(item=>item.id!==id)
    );

  };





return (

<div className="space-y-8">


{/* PAGE HEADER */}

<div
className="
bg-linear-to-r
from-indigo-600
via-purple-600
to-blue-600
rounded-3xl
p-8
text-white
shadow-xl
flex
justify-between
items-center
flex-wrap
gap-5
">

<div>

<h1 className="text-4xl font-bold">
Deduction Master
</h1>

<p className="mt-2 text-indigo-100">
Configure payroll deductions globally
</p>

</div>


<button
onClick={openCreateModal}
className="
bg-white
text-indigo-700
px-6
py-3
rounded-xl
font-semibold
shadow
hover:scale-105
transition
">

+ Add Deduction

</button>


</div>





{/* STATS */}

<div className="grid md:grid-cols-3 gap-6">


<div
className="
bg-white
rounded-2xl
shadow-lg
p-6
border
hover:shadow-xl
transition
">

<p className="text-slate-500">
Total Deductions
</p>

<h2 className="text-4xl font-bold text-indigo-600 mt-2">
{deductions.length}
</h2>

</div>




<div
className="
bg-white
rounded-2xl
shadow-lg
p-6
border
">

<p className="text-slate-500">
Active Deductions
</p>

<h2 className="text-4xl font-bold text-green-600 mt-2">

{
deductions.filter(
d=>d.active
).length
}

</h2>

</div>





<div
className="
bg-white
rounded-2xl
shadow-lg
p-6
border
">

<p className="text-slate-500">
Mandatory
</p>


<h2 className="text-4xl font-bold text-orange-500 mt-2">

{
deductions.filter(
d=>d.mandatory
).length
}

</h2>


</div>



</div>






{/* FILTER */}

<div
className="
bg-white
rounded-2xl
shadow-lg
p-6
border
">

<div className="grid md:grid-cols-2 gap-5">


<input

placeholder="Search deduction..."

value={search}

onChange={
e=>setSearch(e.target.value)
}

className="
border
rounded-xl
px-4
py-3
outline-none
focus:ring-2
focus:ring-indigo-500
"
/>





<select

value={countryFilter}

onChange={
e=>setCountryFilter(e.target.value)
}

className="
border
rounded-xl
px-4
py-3
"

>


<option value="ALL">
All Countries
</option>

<option value="IN">
India
</option>

<option value="US">
USA
</option>

<option value="GB">
UK
</option>


</select>


</div>

</div>







{/* TABLE */}


<div
className="
bg-white
rounded-3xl
shadow-xl
border
overflow-x-auto
">


<table className="w-full">


<thead
className="
bg-slate-100
text-slate-600
">

<tr>

<th className="p-5 text-left">
Name
</th>

<th className="p-5 text-left">
Code
</th>

<th className="p-5 text-left">
Country
</th>

<th className="p-5 text-left">
Type
</th>

<th className="p-5 text-left">
Default
</th>

<th className="p-5">
Mandatory
</th>

<th className="p-5">
Active
</th>

<th className="p-5">
Actions
</th>


</tr>

</thead>





<tbody>


{
filteredData.map(item=>(


<tr
key={item.id}
className="
border-t
hover:bg-indigo-50
transition
">


<td className="p-5 font-semibold">
{item.name}
</td>


<td className="p-5">

<span
className="
px-3
py-1
rounded-full
bg-indigo-100
text-indigo-700
"
>

{item.code}

</span>

</td>


<td className="p-5">
{item.countryCode}
</td>


<td className="p-5">
{item.valueType}
</td>


<td className="p-5 font-semibold">
{item.defaultValue}
</td>



<td className="p-5">
<Toggle
checked={item.mandatory}
onChange={()=>

setDeductions(prev=>
prev.map(d=>
d.id===item.id
?
{
...d,
mandatory:!d.mandatory
}
:d
)
)

}
/>
</td>




<td className="p-5">

<Toggle

checked={item.active}

onChange={()=>


setDeductions(prev=>
prev.map(d=>

d.id===item.id

?

{
...d,
active:!d.active
}

:d

)

)


}

/>

</td>





<td className="p-5 flex gap-2">


<button

onClick={()=>openEditModal(item)}

className="
bg-blue-500
text-white
px-4
py-2
rounded-lg
hover:bg-blue-600
"

>

Edit

</button>




<button

onClick={()=>deleteDeduction(item.id)}

className="
bg-red-500
text-white
px-4
py-2
rounded-lg
hover:bg-red-600
"

>

Delete

</button>



</td>


</tr>


))
}



</tbody>


</table>


</div>






{/* MODAL */}

<Modal

title={
editingId
?
"Edit Deduction"
:
"Create Deduction"
}

isOpen={showModal}

onClose={()=>{
setShowModal(false);
resetForm();
}}

>



<div className="grid md:grid-cols-2 gap-5">


{
[
"name",
"code"
].map(field=>(

<input

key={field}

value={(form as any)[field]}

placeholder={field}

className="
border
rounded-xl
p-3
"

onChange={e=>

setForm({

...form,

[field]:

field==="code"
?
e.target.value.toUpperCase()
:
e.target.value

})

}

/>

))
}



<select

value={form.countryCode}

className="border rounded-xl p-3"

onChange={e=>

setForm({
...form,
countryCode:e.target.value
})

}

>

<option value="IN">
India
</option>

<option value="US">
USA
</option>


</select>





<select

value={form.valueType}

className="border rounded-xl p-3"

onChange={e=>

setForm({

...form,

valueType:
e.target.value as DeductionMaster["valueType"]

})

}

>


<option value="PERCENTAGE">
Percentage
</option>

<option value="FIXED_AMOUNT">
Fixed Amount
</option>


</select>



{
[
"defaultValue",
"minValue",
"maxValue"

].map(field=>(


<input

key={field}

type="number"

value={(form as any)[field]}

placeholder={field}

className="
border
rounded-xl
p-3
"

onChange={e=>

setForm({

...form,

[field]:

Number(e.target.value)

})

}

/>


))
}





<div className="flex justify-between items-center border rounded-xl p-4">

Mandatory

<Toggle

checked={form.mandatory}

onChange={()=>

setForm({
...form,
mandatory:!form.mandatory
})

}

/>

</div>



<div className="flex justify-between items-center border rounded-xl p-4">

Active

<Toggle

checked={form.active}

onChange={()=>

setForm({
...form,
active:!form.active
})

}

/>

</div>


</div>




<button

onClick={saveDeduction}

className="
mt-6
bg-linear-to-r
from-indigo-600
to-purple-600
text-white
px-6
py-3
rounded-xl
font-semibold
"

>

Save Deduction

</button>


</Modal>


</div>

);

}