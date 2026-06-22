// import { useState } from "react";
// import Modal from "../components/Modal";
// import Toggle from "../components/Toggle";
// import { CountryForm } from "../types/master";

// export default function CountryMasterPage() {
//   const [showModal, setShowModal] = useState(false);

//   const [search, setSearch] = useState("");

//   const [countries, setCountries] = useState<CountryForm[]>([
//     {
//       id: 1,
//       name: "India",
//       code: "IN",
//       currency: "INR",
//       region: "APAC",
//       active: true,
//       createdAt: new Date().toISOString(),
//       updatedAt: new Date().toISOString(),
//     },

//     {
//       id: 2,
//       name: "United States",
//       code: "US",
//       currency: "USD",
//       region: "Americas",
//       active: true,
//       createdAt: new Date().toISOString(),
//       updatedAt: new Date().toISOString(),
//     },

//     {
//       id: 3,
//       name: "United Kingdom",
//       code: "GB",
//       currency: "GBP",
//       region: "EMEA",
//       active: true,
//       createdAt: new Date().toISOString(),
//       updatedAt: new Date().toISOString(),
//     },
//   ]);

//   const [form, setForm] = useState<CountryForm>({
//     id: 0,
//     name: "",
//     code: "",
//     currency: "",
//     region: "",
//     active: true,
//     createdAt: "",
//     updatedAt: "",
//   });

//   const addCountry = () => {
//     if (!form.name.trim() || !form.code.trim() || !form.currency.trim()) {
//       alert("Please fill required fields");
//       return;
//     }

//     const exists = countries.some((c) => c.code === form.code);

//     if (exists) {
//       alert("Country code already exists");
//       return;
//     }

//     const now = new Date().toISOString();

//     setCountries((prev) => [
//       ...prev,
//       {
//         ...form,
//         id: Date.now(),
//         createdAt: now,
//         updatedAt: now,
//       },
//     ]);

//     setForm({
//       id: 0,
//       name: "",
//       code: "",
//       currency: "",
//       region: "",
//       active: true,
//       createdAt: "",
//       updatedAt: "",
//     });

//     setShowModal(false);
//   };

//   const filteredCountries = countries.filter((country) =>
//     country.name.toLowerCase().includes(search.toLowerCase()),
//   );

//  return (
//   <div className="w-full max-w-full space-y-8">
//     {/* HERO */}

//     <div
//       className="
//       bg-linear-to-r
//       from-indigo-600
//       via-purple-600
//       to-pink-500
//       rounded-3xl
//       p-8
//       lg:p-10
//       text-white
//       shadow-xl
//       flex
//       flex-col
//       lg:flex-row
//       justify-between
//       items-start
//       lg:items-center
//       gap-8
//       "
//     >
//       <div>
//         <h1 className="text-3xl lg:text-5xl font-bold">
//           🌍 Country Master
//         </h1>

//         <p className="mt-3 text-indigo-100 text-lg max-w-2xl">
//           Manage payroll countries, currencies and regions globally.
//         </p>
//       </div>

//       <button
//         onClick={() => setShowModal(true)}
//         className="
//         bg-white
//         text-indigo-600
//         px-6
//         py-3
//         rounded-xl
//         font-semibold
//         shadow-lg
//         hover:scale-105
//         transition-all
//         duration-300
//         "
//       >
//         + Add Country
//       </button>
//     </div>

//     {/* STATS */}

//     <div
//       className="
//       grid
//       grid-cols-1
//       md:grid-cols-2
//       xl:grid-cols-3
//       gap-6
//       "
//     >
//       <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
//         <div className="h-2 bg-linear-to-r from-indigo-500 to-purple-600" />

//         <div className="p-6">
//           <p className="text-slate-500">
//             Total Countries
//           </p>

//           <h2 className="text-4xl font-bold mt-2">
//             {countries.length}
//           </h2>
//         </div>
//       </div>

//       <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
//         <div className="h-2 bg-linear-to-r from-green-500 to-emerald-600" />

//         <div className="p-6">
//           <p className="text-slate-500">
//             Active Countries
//           </p>

//           <h2 className="text-4xl font-bold text-green-600 mt-2">
//             {
//               countries.filter(
//                 (c) => c.active
//               ).length
//             }
//           </h2>
//         </div>
//       </div>

//       <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
//         <div className="h-2 bg-linear-to-r from-red-500 to-rose-600" />

//         <div className="p-6">
//           <p className="text-slate-500">
//             Inactive Countries
//           </p>

//           <h2 className="text-4xl font-bold text-red-600 mt-2">
//             {
//               countries.filter(
//                 (c) => !c.active
//               ).length
//             }
//           </h2>
//         </div>
//       </div>
//     </div>

//     {/* SEARCH */}

//     <div className="bg-white rounded-3xl shadow-lg p-6">
//       <input
//         type="text"
//         placeholder="🔍 Search country..."
//         value={search}
//         onChange={(e) =>
//           setSearch(e.target.value)
//         }
//         className="
//         w-full
//         border-2
//         border-slate-200
//         rounded-2xl
//         p-4
//         outline-none
//         transition-all
//         focus:border-indigo-500
//         focus:ring-4
//         focus:ring-indigo-100
//         "
//       />
//     </div>

//     {/* TABLE */}

//     <div
//       className="
//       bg-white
//       rounded-3xl
//       shadow-lg
//       overflow-x-auto
//       "
//     >
//       <table
//         className="
//         min-w-225
//         w-full
//         "
//       >
//         <thead
//           className="
//           bg-linear-to-r
//           from-indigo-50
//           to-purple-50
//           "
//         >
//           <tr>
//             {[
//               "Country",
//               "Code",
//               "Currency",
//               "Region",
//               "Status",
//             ].map((head) => (
//               <th
//                 key={head}
//                 className="
//                 p-5
//                 text-left
//                 text-sm
//                 font-semibold
//                 whitespace-nowrap
//                 "
//               >
//                 {head}
//               </th>
//             ))}
//           </tr>
//         </thead>

//         <tbody>
//           {filteredCountries.map(
//             (country) => (
//               <tr
//                 key={country.id}
//                 className="
//                 border-t
//                 hover:bg-slate-50
//                 transition
//                 "
//               >
//                 <td className="p-5 min-w-62.5">
//                   <div className="flex items-center gap-3">
//                     <div
//                       className="
//                       w-10
//                       h-10
//                       rounded-full
//                       bg-indigo-100
//                       flex
//                       items-center
//                       justify-center
//                       "
//                     >
//                       🌍
//                     </div>

//                     <div>
//                       <p className="font-semibold">
//                         {country.name}
//                       </p>

//                       <p className="text-xs text-slate-500">
//                         Payroll Country
//                       </p>
//                     </div>
//                   </div>
//                 </td>

//                 <td className="p-5 whitespace-nowrap">
//                   <span
//                     className="
//                     px-3
//                     py-1
//                     rounded-full
//                     bg-slate-100
//                     font-medium
//                     "
//                   >
//                     {country.code}
//                   </span>
//                 </td>

//                 <td className="p-5 whitespace-nowrap">
//                   {country.currency}
//                 </td>

//                 <td className="p-5 whitespace-nowrap">
//                   <span
//                     className="
//                     px-3
//                     py-1
//                     rounded-full
//                     bg-indigo-100
//                     text-indigo-700
//                     text-sm
//                     "
//                   >
//                     {country.region}
//                   </span>
//                 </td>

//                 <td className="p-5 whitespace-nowrap">
//                   <div className="flex items-center gap-3">
//                     <span
//                       className={`
//                       px-3
//                       py-1
//                       rounded-full
//                       text-xs
//                       font-semibold
//                       ${
//                         country.active
//                           ? "bg-green-100 text-green-700"
//                           : "bg-red-100 text-red-700"
//                       }
//                     `}
//                     >
//                       {country.active
//                         ? "Active"
//                         : "Inactive"}
//                     </span>

//                     <Toggle
//                       checked={country.active}
//                       onChange={() =>
//                         setCountries(
//                           (prev) =>
//                             prev.map((c) =>
//                               c.id ===
//                               country.id
//                                 ? {
//                                     ...c,
//                                     active:
//                                       !c.active,
//                                   }
//                                 : c
//                             )
//                         )
//                       }
//                     />
//                   </div>
//                 </td>
//               </tr>
//             )
//           )}
//         </tbody>
//       </table>
//     </div>

//     {/* MODAL */}

//     <Modal
//       title="Create Country"
//       isOpen={showModal}
//       onClose={() =>
//         setShowModal(false)
//       }
//     >
//       <div
//         className="
//         grid
//         grid-cols-1
//         md:grid-cols-2
//         gap-5
//         "
//       >
//         <input
//           placeholder="Country Name"
//           value={form.name}
//           onChange={(e) =>
//             setForm({
//               ...form,
//               name: e.target.value,
//             })
//           }
//           className="
//           w-full
//           border-2
//           border-slate-200
//           rounded-xl
//           p-3.5
//           outline-none
//           focus:border-indigo-500
//           focus:ring-4
//           focus:ring-indigo-100
//           "
//         />

//         <input
//           placeholder="Country Code"
//           value={form.code}
//           onChange={(e) =>
//             setForm({
//               ...form,
//               code: e.target.value.toUpperCase(),
//             })
//           }
//           className="
//           w-full
//           border-2
//           border-slate-200
//           rounded-xl
//           p-3.5
//           outline-none
//           focus:border-indigo-500
//           focus:ring-4
//           focus:ring-indigo-100
//           "
//         />

//         <input
//           placeholder="Currency"
//           value={form.currency}
//           onChange={(e) =>
//             setForm({
//               ...form,
//               currency:
//                 e.target.value.toUpperCase(),
//             })
//           }
//           className="
//           w-full
//           border-2
//           border-slate-200
//           rounded-xl
//           p-3.5
//           outline-none
//           focus:border-indigo-500
//           focus:ring-4
//           focus:ring-indigo-100
//           "
//         />

//         <select
//           value={form.region}
//           onChange={(e) =>
//             setForm({
//               ...form,
//               region: e.target.value,
//             })
//           }
//           className="
//           w-full
//           border-2
//           border-slate-200
//           rounded-xl
//           p-3.5
//           outline-none
//           focus:border-indigo-500
//           focus:ring-4
//           focus:ring-indigo-100
//           "
//         >
//           <option value="">
//             Select Region
//           </option>

//           <option>APAC</option>
//           <option>EMEA</option>
//           <option>Americas</option>
//         </select>
//       </div>

//       <button
//         onClick={addCountry}
//         className="
//         mt-6
//         w-full
//         bg-linear-to-r
//         from-indigo-600
//         to-purple-600
//         text-white
//         py-4
//         rounded-xl
//         font-semibold
//         shadow-lg
//         hover:scale-[1.02]
//         transition-all
//         duration-300
//         "
//       >
//         Save Country
//       </button>
//     </Modal>
//   </div>
// );
// }



import { useEffect, useMemo, useState } from "react";
import axios from "axios";

interface Country {
  countryKey: string;
  name: string;
}

export default function CountryMasterPage() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState<Country[]>([]);

  const loadCountries = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        "http://localhost:8082/api/master/countries"
      );

      console.log(
        "Countries API Response:",
        response.data
      );

      const data = response.data;

      if (Array.isArray(data)) {
        setCountries(data);
      } else if (
        data &&
        Array.isArray(data.content)
      ) {
        setCountries(data.content);
      } else if (
        data &&
        Array.isArray(data.data)
      ) {
        setCountries(data.data);
      } else {
        setCountries([]);
      }
    } catch (error) {
      console.error(
        "Failed to load countries",
        error
      );
      setCountries([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCountries();
  }, []);

  const filteredCountries = useMemo(() => {
    return (Array.isArray(countries)
      ? countries
      : []
    ).filter(
      (country) =>
        country?.name
          ?.toLowerCase()
          .includes(search.toLowerCase()) ||
        country?.countryKey
          ?.toLowerCase()
          .includes(search.toLowerCase())
    );
  }, [countries, search]);

  return (
    <div className="w-full max-w-full space-y-8">
      {/* HERO */}
      <div
        className="
        bg-linear-to-r
        from-indigo-600
        via-purple-600
        to-pink-500
        rounded-3xl
        p-8
        lg:p-10
        text-white
        shadow-xl
        "
      >
        <h1 className="text-3xl lg:text-5xl font-bold">
          🌍 Country Master
        </h1>

        <p className="mt-3 text-indigo-100 text-lg">
          View countries available in
          the payroll system.
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="h-2 bg-linear-to-r from-indigo-500 to-purple-600" />

          <div className="p-6">
            <p className="text-slate-500">
              Total Countries
            </p>

            <h2 className="text-4xl font-bold mt-2">
              {countries.length}
            </h2>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="h-2 bg-linear-to-r from-green-500 to-emerald-600" />

          <div className="p-6">
            <p className="text-slate-500">
              Search Results
            </p>

            <h2 className="text-4xl font-bold text-green-600 mt-2">
              {filteredCountries.length}
            </h2>
          </div>
        </div>
      </div>

      {/* SEARCH */}
      <div className="bg-white rounded-3xl shadow-lg p-6">
        <input
          type="text"
          placeholder="🔍 Search Country..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="
          w-full
          border-2
          border-slate-200
          rounded-2xl
          p-4
          outline-none
          transition-all
          focus:border-indigo-500
          focus:ring-4
          focus:ring-indigo-100
          "
        />
      </div>

      {/* TABLE */}
      <div
        className="
        bg-white
        rounded-3xl
        shadow-lg
        overflow-x-auto
        "
      >
        <table className="w-full">
          <thead
            className="
            bg-linear-to-r
            from-indigo-50
            to-purple-50
            "
          >
            <tr>
              <th className="p-5 text-left font-semibold">
                Country Name
              </th>

              <th className="p-5 text-left font-semibold">
                Country Key
              </th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td
                  colSpan={2}
                  className="
                  p-10
                  text-center
                  "
                >
                  Loading...
                </td>
              </tr>
            ) : filteredCountries.length === 0 ? (
              <tr>
                <td
                  colSpan={2}
                  className="
                  p-10
                  text-center
                  text-slate-500
                  "
                >
                  No Countries Found
                </td>
              </tr>
            ) : (
              filteredCountries.map(
                (country) => (
                  <tr
                    key={
                      country.countryKey
                    }
                    className="
                    border-t
                    hover:bg-slate-50
                    "
                  >
                    <td className="p-5">
                      <div className="flex items-center gap-3">
                        <div
                          className="
                          w-10
                          h-10
                          rounded-full
                          bg-indigo-100
                          flex
                          items-center
                          justify-center
                          "
                        >
                          🌍
                        </div>

                        <div>
                          <p className="font-semibold">
                            {country.name}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="p-5">
                      <span
                        className="
                        px-3
                        py-1
                        rounded-full
                        bg-slate-100
                        font-medium
                        "
                      >
                        {
                          country.countryKey
                        }
                      </span>
                    </td>
                  </tr>
                )
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}