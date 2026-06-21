import { useEffect, useMemo, useState } from "react";
import Modal from "../components/Modal";
import Toggle from "../components/Toggle";
import { DeductionMaster } from "../types/master";
import {
  fetchDeductions,
  createDeduction,
  updateDeduction,
  deleteDeduction as deleteDeductionApi,
} from "../services/deductionService";

const defaultForm: DeductionMaster = {
  id: "0",
  deductionName: "",
  deductionCode: "",
  deductionCountryCode: "IN",
  deductionValueType: "PERCENTAGE",
  deductionDefaultValue: 0,
  deductionMinValue: 0,
  deductionMaxValue: 0,
  taxableStatus: true,
  deductionStatus: true,
};

export default function DeductionMasterPage() {
  const [showModal, setShowModal] = useState(false);

  const [editingId, setEditingId] = useState<string | null>(null);

  const [search, setSearch] = useState("");

  const [countryFilter, setCountryFilter] = useState("ALL");

  const [deductions, setDeductions] = useState<DeductionMaster[]>([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);

  // Fetch deductions from API on component mount
  useEffect(() => {
    const loadDeductions = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchDeductions();
        setDeductions(data);
      } catch (err) {
        setError("Failed to load deductions");
        console.error("Error fetching deductions:", err);
      } finally {
        setLoading(false);
      }
    };

    loadDeductions();
  }, []);

  const [form, setForm] = useState<DeductionMaster>(defaultForm);

  const filteredData = useMemo(() => {
    return deductions.filter((item) => {
      const searchMatch =
        item.deductionName.toLowerCase().includes(search.toLowerCase()) ||
        item.deductionCode.toLowerCase().includes(search.toLowerCase());

      const countryMatch =
        countryFilter === "ALL" || item.deductionCountryCode === countryFilter;

      return searchMatch && countryMatch;
    });
  }, [deductions, search, countryFilter]);



  const resetForm = () => {
    setForm({ ...defaultForm });
    setEditingId(null);
  };

  const openCreateModal = () => {
    resetForm();
    setShowModal(true);
  };

  const openEditModal = (item: DeductionMaster) => {
    setForm(item);
    setEditingId(item.id);
    setShowModal(true);
  };

  const saveDeduction = async () => {
    if (!form.deductionName.trim() || !form.deductionCode.trim()) {
      alert("Name and Code required");
      return;
    }

    try {
      if (editingId !== null) {
        // Update existing deduction
        await updateDeduction(editingId, form);
        setDeductions((prev) =>
          prev.map((item) =>
            item.id === editingId ? { ...form, id: editingId } : item,
          ),
        );
      } else {
        // Create new deduction
        const newDeduction = await createDeduction(form);
        setDeductions((prev) => [...prev, newDeduction]);
      }

      setShowModal(false);
      resetForm();
    } catch (err) {
      console.error("Error saving deduction:", err);
      alert("Failed to save deduction");
    }
  };

  const deleteDeduction = async (id: string) => {
    if (window.confirm("Delete Deduction?")) {
      try {
        await deleteDeductionApi(id);
        setDeductions((prev) => prev.filter((item) => item.id !== id));
      } catch (err) {
        console.error("Error deleting deduction:", err);
        alert("Failed to delete deduction");
      }
    }
  };

  return (
    <div className="space-y-8">
      {/* HEADER */}

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
"
      >
        <div>
          <h1 className="text-4xl font-bold">Deduction Master</h1>

          <p
            className="
text-indigo-100
mt-2
"
          >
            Manage payroll deduction configuration globally
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
d=>d.deductionStatus
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

{/* 
<h2 className="text-4xl font-bold text-orange-500 mt-2">

{
deductions.filter(
d=>d.mandatory
).length
}

</h2> */}


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
{item.deductionName}
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

{item.deductionCode}

</span>

</td>


<td className="p-5">
{item.deductionCountryCode}
</td>


<td className="p-5">
{item.deductionValueType}
</td>


<td className="p-5 font-semibold">
{item.deductionDefaultValue}
</td>



{/* <td className="p-5">
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
</td> */}




<td className="p-5">

<Toggle

checked={item.deductionStatus}

onChange={()=>


setDeductions(prev=>
prev.map(d=>

d.id===item.id

?

{
...d,
deductionStatus:!d.deductionStatus
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

value={form.deductionCountryCode}

className="border rounded-xl p-3"

onChange={e=>

setForm({
...form,
deductionCountryCode:e.target.value
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

value={form.deductionValueType}

className="border rounded-xl p-3"

onChange={e=>

setForm({

...form,

deductionValueType:
e.target.value as DeductionMaster["deductionValueType"]

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

Active

<Toggle

checked={form.deductionStatus}

onChange={()=>

setForm({
...form,
deductionStatus:!form.deductionStatus
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