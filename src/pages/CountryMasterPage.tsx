import { useState } from "react";
import Modal from "../components/Modal";
import Toggle from "../components/Toggle";
import { CountryForm } from "../types/master";

export default function CountryMasterPage() {

  const [showModal, setShowModal] =
    useState(false);

  const [search, setSearch] =
    useState("");

  const [countries, setCountries] =
    useState<CountryForm[]>([
      {
        id: 1,
        name: "India",
        code: "IN",
        currency: "INR",
        region: "APAC",
        active: true,
        createdAt:
          new Date().toISOString(),
        updatedAt:
          new Date().toISOString(),
      },

      {
        id: 2,
        name: "United States",
        code: "US",
        currency: "USD",
        region: "Americas",
        active: true,
        createdAt:
          new Date().toISOString(),
        updatedAt:
          new Date().toISOString(),
      },

      {
        id: 3,
        name: "United Kingdom",
        code: "GB",
        currency: "GBP",
        region: "EMEA",
        active: true,
        createdAt:
          new Date().toISOString(),
        updatedAt:
          new Date().toISOString(),
      },
    ]);


  const [form,setForm] =
    useState<CountryForm>({
      id:0,
      name:"",
      code:"",
      currency:"",
      region:"",
      active:true,
      createdAt:"",
      updatedAt:"",
    });



  const addCountry = () => {


    if(
      !form.name.trim() ||
      !form.code.trim() ||
      !form.currency.trim()
    ){
      alert(
        "Please fill required fields"
      );
      return;
    }


    const exists =
      countries.some(
        c =>
          c.code === form.code
      );


    if(exists){
      alert(
        "Country code already exists"
      );
      return;
    }



    const now =
      new Date().toISOString();



    setCountries(prev=>[
      ...prev,
      {
        ...form,
        id:Date.now(),
        createdAt:now,
        updatedAt:now
      }
    ]);



    setForm({
      id:0,
      name:"",
      code:"",
      currency:"",
      region:"",
      active:true,
      createdAt:"",
      updatedAt:"",
    });


    setShowModal(false);

  };




  const filteredCountries =
    countries.filter(country =>
      country.name
      .toLowerCase()
      .includes(
        search.toLowerCase()
      )
    );





  return (

<div className="space-y-8">


{/* HERO */}

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
flex-col
lg:flex-row
justify-between
gap-6
items-center
">


<div>

<h1 className="
text-4xl
font-bold
">
🌍 Country Master
</h1>


<p className="
mt-3
text-indigo-100
text-lg
">
Manage payroll countries,
currencies and regions globally.
</p>


</div>



<button

onClick={()=>setShowModal(true)}

className="
bg-white
text-indigo-600
px-6
py-3
rounded-xl
font-semibold
shadow-lg
hover:scale-105
transition
"

>
+ Add Country

</button>


</div>





{/* STATS */}


<div className="
grid
md:grid-cols-3
gap-6
">


<div className="
bg-white
rounded-3xl
shadow-lg
overflow-hidden
">

<div className="
h-2
bg-linear-to-r
from-indigo-500
to-purple-600
"/>


<div className="p-6">

<p className="text-slate-500">
Total Countries
</p>

<h2 className="
text-4xl
font-bold
mt-2
">
{countries.length}
</h2>


</div>

</div>





<div className="
bg-white
rounded-3xl
shadow-lg
overflow-hidden
">

<div className="
h-2
bg-linear-to-r
from-green-500
to-emerald-600
"/>


<div className="p-6">

<p className="text-slate-500">
Active Countries
</p>

<h2 className="
text-4xl
font-bold
text-green-600
mt-2
">

{
countries.filter(
c=>c.active
).length
}

</h2>

</div>

</div>





<div className="
bg-white
rounded-3xl
shadow-lg
overflow-hidden
">

<div className="
h-2
bg-linear-to-r
from-red-500
to-rose-600
"/>


<div className="p-6">

<p className="text-slate-500">
Inactive Countries
</p>


<h2 className="
text-4xl
font-bold
text-red-600
mt-2
">

{
countries.filter(
c=>!c.active
).length
}

</h2>


</div>

</div>


</div>







{/* SEARCH */}


<div className="
bg-white
rounded-3xl
shadow-lg
p-6
">


<input

type="text"

placeholder="
🔍 Search country...
"

value={search}

onChange={
e=>setSearch(e.target.value)
}

className="
w-full
border-2
border-slate-200
focus:border-indigo-500
outline-none
rounded-2xl
p-4
"

/>


</div>







{/* TABLE */}



<div className="
bg-white
rounded-3xl
shadow-lg
overflow-hidden
">


<table className="w-full">


<thead className="
bg-linear-to-r
from-indigo-50
to-purple-50
">


<tr>


<th className="p-5 text-left">
Country
</th>


<th className="p-5 text-left">
Code
</th>


<th className="p-5 text-left">
Currency
</th>


<th className="p-5 text-left">
Region
</th>


<th className="p-5 text-left">
Status
</th>


</tr>


</thead>



<tbody>


{
filteredCountries.map(country=>(


<tr

key={country.id}

className="
border-t
hover:bg-slate-50
transition
"


>



<td className="p-5">


<div className="flex gap-3 items-center">


<div className="
w-10
h-10
rounded-full
bg-indigo-100
flex
items-center
justify-center
">

🌍

</div>


<div>

<p className="
font-semibold
">

{country.name}

</p>


<p className="
text-xs
text-slate-500
">

Payroll Country

</p>


</div>


</div>


</td>





<td className="p-5">

<span className="
px-3
py-1
rounded-full
bg-slate-100
font-medium
">

{country.code}

</span>

</td>





<td className="p-5">

{country.currency}

</td>




<td className="p-5">


<span className="
px-3
py-1
rounded-full
bg-indigo-100
text-indigo-700
text-sm
">

{country.region}

</span>


</td>




<td className="p-5">


<div className="flex gap-3 items-center">


<span className={`
px-3
py-1
rounded-full
text-xs
font-semibold

${
country.active
?
"bg-green-100 text-green-700"
:
"bg-red-100 text-red-700"
}

`}>

{
country.active
?
"Active"
:
"Inactive"
}

</span>



<Toggle

checked={
country.active
}

onChange={()=>


setCountries(prev=>

prev.map(c=>

c.id===country.id

?

{
...c,
active:
!c.active
}

:

c

)

)

}


/>


</div>


</td>




</tr>


))

}



</tbody>



</table>



</div>








{/* MODAL */}



<Modal

title="Create Country"

isOpen={showModal}

onClose={()=>setShowModal(false)}

>


<div className="
grid
md:grid-cols-2
gap-4
">



<input

placeholder="Country Name"

value={form.name}

className="
border-2
border-slate-200
rounded-xl
p-3
"

onChange={
e=>
setForm({
...form,
name:e.target.value
})
}

/>




<input

placeholder="Country Code"

value={form.code}

className="
border-2
border-slate-200
rounded-xl
p-3
"


onChange={
e=>
setForm({
...form,
code:
e.target.value.toUpperCase()
})
}

/>




<input

placeholder="Currency"

value={form.currency}


className="
border-2
border-slate-200
rounded-xl
p-3
"



onChange={
e=>
setForm({
...form,
currency:
e.target.value.toUpperCase()
})
}


/>



<select

value={form.region}

className="
border-2
border-slate-200
rounded-xl
p-3
"


onChange={
e=>
setForm({
...form,
region:e.target.value
})
}

>


<option value="">
Select Region
</option>

<option>
APAC
</option>

<option>
EMEA
</option>

<option>
Americas
</option>


</select>



</div>





<button

onClick={addCountry}

className="
mt-6
w-full
bg-linear-to-r
from-indigo-600
to-purple-600
text-white
py-4
rounded-xl
font-semibold
shadow-lg
hover:scale-[1.02]
transition
"

>

Save Country

</button>



</Modal>



</div>

);

}