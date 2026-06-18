import { useMemo, useState } from "react";
import Modal from "../components/Modal";
import Toggle from "../components/Toggle";
import { AllowanceMaster } from "../types/master";

const defaultForm: AllowanceMaster = {
  id: 0,
  name: "",
  code: "",
  countryCode: "IN",
  valueType: "PERCENTAGE",
  defaultValue: 0,
  minValue: 0,
  maxValue: 0,
  taxable: true,
  active: true,
};

export default function AllowanceMasterPage() {

  const [showModal,setShowModal] =
    useState(false);

  const [editingId,setEditingId] =
    useState<number|null>(null);

  const [search,setSearch] =
    useState("");

  const [countryFilter,setCountryFilter] =
    useState("ALL");

  const [statusFilter,setStatusFilter] =
    useState("ALL");


  const [allowances,setAllowances] =
    useState<AllowanceMaster[]>([
      {
        id:1,
        name:"House Rent Allowance",
        code:"HRA",
        countryCode:"IN",
        valueType:"PERCENTAGE",
        defaultValue:40,
        minValue:0,
        maxValue:50,
        taxable:true,
        active:true
      },
      {
        id:2,
        name:"Transport Allowance",
        code:"TA",
        countryCode:"IN",
        valueType:"FIXED_AMOUNT",
        defaultValue:5000,
        minValue:0,
        maxValue:10000,
        taxable:false,
        active:true
      }
    ]);


  const [form,setForm] =
    useState<AllowanceMaster>(defaultForm);



  const filteredData = useMemo(()=>{

    return allowances.filter(item=>{

      const searchMatch =
        item.name.toLowerCase()
        .includes(search.toLowerCase())
        ||
        item.code.toLowerCase()
        .includes(search.toLowerCase());


      const countryMatch =
        countryFilter==="ALL"
        ||
        item.countryCode===countryFilter;


      const statusMatch =
        statusFilter==="ALL"
        ||
        (statusFilter==="ACTIVE"
        ? item.active
        : !item.active);


      return (
        searchMatch &&
        countryMatch &&
        statusMatch
      );

    });

  },[
    allowances,
    search,
    countryFilter,
    statusFilter
  ]);




  const resetForm=()=>{

    setForm(defaultForm);
    setEditingId(null);

  };



  const openCreateModal=()=>{

    resetForm();
    setShowModal(true);

  };



  const openEditModal=
  (item:AllowanceMaster)=>{

    setForm(item);
    setEditingId(item.id);
    setShowModal(true);

  };




  const saveAllowance=()=>{


    if(
      !form.name.trim()
      ||
      !form.code.trim()
    ){

      alert(
        "Name and Code required"
      );

      return;

    }



    if(editingId){

      setAllowances(prev=>

        prev.map(item=>

          item.id===editingId
          ? form
          : item

        )

      );


    }
    else{


      setAllowances(prev=>[
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





  const deleteAllowance=(id:number)=>{


    if(
      window.confirm(
        "Delete Allowance?"
      )
    ){

      setAllowances(prev=>

        prev.filter(
          item=>item.id!==id
        )

      );

    }


  };






return (

<div className="space-y-8">


{/* HEADER */}

<div className="
bg-linear-to-r
from-indigo-600
via-purple-600
to-pink-500
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
Allowance Master
</h1>


<p className="
text-indigo-100
mt-2
">
Manage payroll allowance configuration globally
</p>


</div>



<button

onClick={openCreateModal}

className="
bg-white
text-indigo-600
px-6
py-3
rounded-xl
font-semibold
shadow
hover:scale-105
transition
"

>

+ Add Allowance

</button>


</div>






{/* FILTER */}

<div className="
bg-white
rounded-2xl
shadow-lg
p-6
">


<div className="
grid
lg:grid-cols-3
gap-5
">


<input

placeholder="Search allowance..."

value={search}

onChange={(e)=>
setSearch(e.target.value)
}

className="
border
rounded-xl
p-3
focus:ring-2
focus:ring-indigo-400
outline-none
"

/>



<select

value={countryFilter}

onChange={(e)=>
setCountryFilter(e.target.value)
}

className="
border
rounded-xl
p-3
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

</select>




<select

value={statusFilter}

onChange={(e)=>
setStatusFilter(e.target.value)
}

className="
border
rounded-xl
p-3
"

>

<option value="ALL">
All Status
</option>

<option value="ACTIVE">
Active
</option>

<option value="INACTIVE">
Inactive
</option>

</select>


</div>

</div>







{/* TABLE */}


<div className="
bg-white
rounded-3xl
shadow-xl
overflow-hidden
">


<table className="w-full">


<thead
className="
bg-linear-to-r
from-indigo-100
to-purple-100
"
>

<tr>


{
[
"Name",
"Code",
"Country",
"Type",
"Default",
"Taxable",
"Status",
"Actions"

].map(head=>(

<th
key={head}
className="
p-5
text-left
text-slate-700
"
>

{head}

</th>


))

}


</tr>

</thead>





<tbody>


{
filteredData.map(item=>(


<tr

key={item.id}

className="
border-t
hover:bg-slate-50
transition
"

>


<td className="p-5 font-medium">
{item.name}
</td>


<td className="p-5">
<span className="
bg-indigo-100
text-indigo-700
px-3
py-1
rounded-full
text-sm
">

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

checked={item.taxable}

onChange={()=>{

setAllowances(prev=>

prev.map(a=>

a.id===item.id

?

{
...a,
taxable:
!a.taxable
}

:a

)

)

}}

/>


</td>



<td className="p-5">


<span

className={`

px-3
py-1
rounded-full
text-sm

${
item.active

?

"bg-green-100 text-green-700"

:

"bg-red-100 text-red-700"

}

`}

>

{
item.active
?
"Active"
:
"Inactive"
}


</span>


</td>





<td className="p-5 flex gap-3">


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

onClick={()=>deleteAllowance(item.id)}

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
"Edit Allowance"
:
"Create Allowance"
}

isOpen={showModal}

onClose={()=>
setShowModal(false)
}

>


<div className="
grid
md:grid-cols-2
gap-5
">



{
[
"name",
"code",
"defaultValue",
"minValue",
"maxValue"

].map(field=>(


<input

key={field}

type={
field.includes("Value")
?
"number"
:
"text"
}

placeholder={field}

value={
(form as any)[field]
}

onChange={(e)=>

setForm({

...form,

[field]:

field.includes("Value")
?
Number(e.target.value)
:
e.target.value

})

}

className="
border
rounded-xl
p-3
"

/>


))

}





<select

className="
border
rounded-xl
p-3
"

value={form.valueType}

onChange={(e)=>

setForm({

...form,

valueType:
e.target.value as any

})

}

>

<option value="PERCENTAGE">
Percentage
</option>

<option value="FIXED_AMOUNT">
Fixed Amount
</option>

<option value="UNIT">
Unit
</option>


</select>



</div>





<button

onClick={saveAllowance}

className="
mt-6
bg-linear-to-r
from-indigo-600
to-purple-600
text-white
px-6
py-3
rounded-xl
shadow
"

>

Save Allowance

</button>



</Modal>



</div>

);

}