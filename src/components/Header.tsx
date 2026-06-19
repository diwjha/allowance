// export default function Header() {
//   const currentDate = new Date().toLocaleDateString(
//     "en-US",
//     {
//       weekday: "long",
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//     }
//   );

//   return (
//     <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-40">

//       <div className="px-8 py-5">

//         <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

//           {/* Left Section */}
//           <div>

//             <h2 className="text-3xl font-bold bg-linear-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
//               Payroll Management System
//             </h2>

//             <p className="text-slate-500 mt-1">
//               Manage global payroll, deductions,
//               allowances and compliance
//             </p>

//           </div>

//           {/* Right Section */}
//           <div className="flex items-center gap-5">

//             {/* Date */}
//             <div className="hidden md:block text-right">
//               <p className="text-xs uppercase tracking-wider text-slate-400">
//                 Today
//               </p>

//               <p className="font-medium text-slate-700">
//                 {currentDate}
//               </p>
//             </div>

//             {/* Notification */}
//             <button
//               className="
//                 relative
//                 w-12
//                 h-12
//                 rounded-2xl
//                 bg-slate-100
//                 hover:bg-slate-200
//                 transition-all
//                 flex
//                 items-center
//                 justify-center
//               "
//             >
//               <span className="text-xl">
//                 🔔
//               </span>

//               <span
//                 className="
//                   absolute
//                   top-2
//                   right-2
//                   w-3
//                   h-3
//                   bg-red-500
//                   rounded-full
//                   border-2
//                   border-white
//                 "
//               />
//             </button>

//             {/* User Card */}
//             <div
//               className="
//                 flex
//                 items-center
//                 gap-3
//                 bg-linear-to-r
//                 from-indigo-50
//                 to-purple-50
//                 px-4
//                 py-2
//                 rounded-2xl
//                 border
//                 border-indigo-100
//               "
//             >

//               <div
//                 className="
//                   w-12
//                   h-12
//                   rounded-full
//                   bg-linear-to-r
//                   from-indigo-600
//                   to-purple-600
//                   text-white
//                   flex
//                   items-center
//                   justify-center
//                   font-bold
//                   text-lg
//                   shadow-md
//                 "
//               >
//                 A
//               </div>

//               <div>

//                 <p className="font-semibold text-slate-800">
//                   Admin
//                 </p>

//                 <p className="text-xs text-slate-500">
//                   System Administrator
//                 </p>

//               </div>

//             </div>

//           </div>

//         </div>

//       </div>

//     </header>
//   );
// }





export default function Header() {
  const currentDate = new Date().toLocaleDateString(
    "en-US",
    {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <header
      className="
      sticky
      top-0
      z-30
      bg-white
      border-b
      border-slate-200
      shadow-sm
      "
    >
      <div className="px-6 lg:px-8 py-5">
        <div
          className="
          flex
          flex-col
          lg:flex-row
          lg:items-center
          lg:justify-between
          gap-5
          "
        >
          {/* Left Section */}

          <div>
            <h2
              className="
              text-3xl
              font-bold
              bg-linear-to-r
              from-indigo-600
              via-purple-600
              to-pink-500
              bg-clip-text
              text-transparent
              "
            >
              Payroll Management System
            </h2>

            <p
              className="
              text-slate-500
              mt-1
              "
            >
              Manage global payroll, deductions,
              allowances and compliance
            </p>
          </div>

          {/* Right Section */}

          <div
            className="
            flex
            items-center
            gap-5
            "
          >
            {/* Date */}

            <div className="hidden md:block text-right">
              <p
                className="
                text-xs
                uppercase
                tracking-wider
                text-slate-400
                "
              >
                Today
              </p>

              <p
                className="
                font-medium
                text-slate-700
                "
              >
                {currentDate}
              </p>
            </div>

            {/* Notification */}

            <button
              className="
              relative
              w-12
              h-12
              rounded-2xl
              bg-slate-100
              hover:bg-slate-200
              transition-all
              flex
              items-center
              justify-center
              "
            >
              <span className="text-xl">
                🔔
              </span>

              <span
                className="
                absolute
                top-2
                right-2
                w-3
                h-3
                bg-red-500
                rounded-full
                border-2
                border-white
                "
              />
            </button>

            {/* User Card */}

            <div
              className="
              flex
              items-center
              gap-3
              bg-linear-to-r
              from-indigo-50
              to-purple-50
              px-4
              py-2
              rounded-2xl
              border
              border-indigo-100
              "
            >
              <div
                className="
                w-12
                h-12
                rounded-full
                bg-linear-to-r
                from-indigo-600
                to-purple-600
                text-white
                flex
                items-center
                justify-center
                font-bold
                text-lg
                shadow-md
                "
              >
                A
              </div>

              <div>
                <p
                  className="
                  font-semibold
                  text-slate-800
                  "
                >
                  Admin
                </p>

                <p
                  className="
                  text-xs
                  text-slate-500
                  "
                >
                  System Administrator
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}