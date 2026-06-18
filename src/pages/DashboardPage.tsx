export default function DashboardPage() {

const stats = [
{
title:"Countries",
value:"3",
icon:"🌍",
bg:"bg-indigo-50",
color:"text-indigo-600"
},
{
title:"Allowances",
value:"8",
icon:"💰",
bg:"bg-green-50",
color:"text-green-600"
},
{
title:"Deductions",
value:"6",
icon:"📉",
bg:"bg-red-50",
color:"text-red-600"
},
{
title:"Tax Slabs",
value:"12",
icon:"📑",
bg:"bg-blue-50",
color:"text-blue-600"
}
];


const progress=[
["Payroll Configuration",85],
["Tax Setup",70],
["Country Compliance",92]
];


const activity=[
["🌍","Country Added","India payroll enabled"],
["💰","Allowance Updated","HRA revised"],
["📉","Deduction Modified","PF percentage changed"]
];


return (

<div className="w-full space-y-10">





{/* HERO */}

<section
className="
rounded-3xl
bg-linear-to-r
from-indigo-600
via-purple-600
to-blue-600
p-8
text-white
shadow-xl
"
>


<h1 className="
text-3xl
md:text-5xl
font-bold
">

Payroll Dashboard

</h1>


<p className="
mt-4
max-w-3xl
text-indigo-100
text-lg
leading-relaxed
">

Manage payroll structure, salary rules,
allowances, deductions and tax compliance
from one centralized platform.

</p>



<div className="
flex
flex-wrap
gap-4
mt-8
">


{
[
"🌍 Global Payroll",
"⚡ Automation",
"📊 Analytics"
]
.map(item=>(


<div
key={item}
className="
bg-white/20
backdrop-blur
px-5
py-3
rounded-xl
text-sm
"
>

{item}

</div>


))

}


</div>


</section>









{/* STATS */}



<section>


<div className="
grid
grid-cols-1
sm:grid-cols-2
xl:grid-cols-4
gap-6
">


{
stats.map(item=>(


<div

key={item.title}

className="
bg-white
rounded-3xl
p-6
border
border-slate-100
shadow-sm
hover:shadow-lg
transition
"


>


<div className="
flex
items-center
justify-between
">


<div>


<p className="
text-sm
text-slate-500
">

{item.title}

</p>


<h2 className="
text-4xl
font-bold
mt-3
text-slate-800
">

{item.value}

</h2>


</div>



<div
className={`
w-16
h-16
rounded-2xl
flex
items-center
justify-center
text-3xl
${item.bg}
`}
>

{item.icon}

</div>


</div>


</div>


))

}


</div>


</section>









{/* MAIN */}



<section
className="
grid
grid-cols-1
xl:grid-cols-3
gap-8
"
>




{/* Progress */}


<div
className="
xl:col-span-2
bg-white
rounded-3xl
border
p-8
shadow-sm
"
>


<div className="
flex
justify-between
items-center
mb-8
">


<h2 className="
text-2xl
font-bold
">

Payroll Progress

</h2>



<span
className="
bg-green-100
text-green-700
px-4
py-2
rounded-full
text-sm
"
>

Active

</span>


</div>





{
progress.map(item=>(


<div
key={item[0]}
className="mb-8"
>


<div className="
flex
justify-between
mb-3
text-sm
"
>


<span className="font-medium">

{item[0]}

</span>


<span>

{item[1]}%

</span>


</div>



<div className="
h-3
rounded-full
bg-slate-100
overflow-hidden
">


<div

className="
h-full
rounded-full
bg-linear-to-r
from-indigo-500
to-purple-600
"

style={{
width:`${item[1]}%`
}}

/>


</div>


</div>


))


}


</div>







{/* Activity */}



<div
className="
bg-white
rounded-3xl
border
p-8
shadow-sm
"
>


<h2 className="
text-2xl
font-bold
mb-8
">

Recent Activity

</h2>



<div className="space-y-7">


{
activity.map(item=>(


<div
key={item[1]}
className="
flex
gap-5
items-start
"
>


<div
className="
w-12
h-12
rounded-2xl
bg-slate-100
flex
items-center
justify-center
text-xl
shrink-0
"
>

{item[0]}

</div>



<div>


<h3 className="
font-semibold
">

{item[1]}

</h3>


<p className="
text-sm
text-slate-500
mt-1
">

{item[2]}

</p>


</div>


</div>


))

}


</div>


</div>



</section>









{/* QUICK MANAGEMENT */}



<section>


<h2 className="
text-2xl
font-bold
mb-6
">

Quick Management

</h2>



<div className="
grid
grid-cols-1
md:grid-cols-3
gap-6
">


{

[
["🌍","Countries","Manage payroll locations"],
["💰","Allowances","Configure benefits"],
["📉","Deductions","Manage compliance"]
]

.map(item=>(


<div
key={item[1]}
className="
bg-white
rounded-3xl
border
p-7
shadow-sm
hover:shadow-lg
transition
"
>


<div className="text-4xl mb-5">

{item[0]}

</div>


<h3 className="
text-xl
font-bold
">

{item[1]}

</h3>



<p className="
text-slate-500
mt-3
leading-relaxed
">

{item[2]}

</p>



<button
className="
mt-6
text-indigo-600
font-semibold
"
>

Manage →

</button>



</div>


))


}



</div>


</section>






</div>


)

}