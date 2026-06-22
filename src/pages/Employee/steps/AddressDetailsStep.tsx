

// import { EmployeeFormData } from "../EmployeeWizardPage";

// interface Props {
//   formData: EmployeeFormData;
//   updateField: (
//     field: keyof EmployeeFormData,
//     value: any
//   ) => void;
// }

// export default function AddressDetailsStep({
//   formData,
//   updateField,
// }: Props) {
//   return (
//     <>
//       <h2 className="text-2xl font-bold mb-6">
//         Address Details
//       </h2>

//       <div className="grid md:grid-cols-2 gap-5">

//         <div>
//           <label className="block mb-2 font-medium">
//             House Number
//           </label>

//           <input
//             value={formData.houseNo}
//             onChange={(e) =>
//               updateField(
//                 "houseNo",
//                 e.target.value
//               )
//             }
//             placeholder="House Number"
//             className="border rounded-xl p-3 w-full"
//           />
//         </div>

//         <div>
//           <label className="block mb-2 font-medium">
//             Street
//           </label>

//           <input
//             value={formData.street}
//             onChange={(e) =>
//               updateField(
//                 "street",
//                 e.target.value
//               )
//             }
//             placeholder="Street"
//             className="border rounded-xl p-3 w-full"
//           />
//         </div>

//         <div>
//           <label className="block mb-2 font-medium">
//             Area
//           </label>

//           <input
//             value={formData.area}
//             onChange={(e) =>
//               updateField(
//                 "area",
//                 e.target.value
//               )
//             }
//             placeholder="Area"
//             className="border rounded-xl p-3 w-full"
//           />
//         </div>

//         <div>
//           <label className="block mb-2 font-medium">
//             Province Of Residence
//           </label>

//           <input
//             value={formData.provinceOfResidence}
//             onChange={(e) =>
//               updateField(
//                 "provinceOfResidence",
//                 e.target.value
//               )
//             }
//             placeholder="Province Of Residence"
//             className="border rounded-xl p-3 w-full"
//           />
//         </div>

//         <div>
//           <label className="block mb-2 font-medium">
//             Pin Code
//           </label>

//           <input
//             value={formData.pinCode}
//             onChange={(e) =>
//               updateField(
//                 "pinCode",
//                 e.target.value
//               )
//             }
//             placeholder="Pin Code"
//             className="border rounded-xl p-3 w-full"
//           />
//         </div>

//         <div>
//           <label className="block mb-2 font-medium">
//             Country
//           </label>

//           <input
//             value={formData.country}
//             onChange={(e) =>
//               updateField(
//                 "country",
//                 e.target.value
//               )
//             }
//             placeholder="Country"
//             className="border rounded-xl p-3 w-full"
//           />
//         </div>

//       </div>
//     </>
//   );
// }







import { useEffect, useState } from "react";
import { EmployeeFormData } from "../EmployeeWizardPage";
import {
  getCountries,
  getProvinces,
} from "../../../services/masterService";

interface Props {
  formData: EmployeeFormData;
  updateField: (
    field: keyof EmployeeFormData,
    value: any
  ) => void;
}

interface Country {
  countryKey: string;
  name: string;
}

interface Province {
  provinceKey: string;
  name: string;
}

export default function AddressDetailsStep({
  formData,
  updateField,
}: Props) {
  const [countries, setCountries] =
    useState<Country[]>([]);

  const [provinces, setProvinces] =
    useState<Province[]>([]);

  const [loadingCountries, setLoadingCountries] =
    useState(false);

  const [loadingProvinces, setLoadingProvinces] =
    useState(false);

  // ======================
  // LOAD COUNTRIES
  // ======================

  useEffect(() => {
    const loadCountries = async () => {
      try {
        setLoadingCountries(true);

        const data = await getCountries();

        setCountries(
          Array.isArray(data) ? data : []
        );
      } catch (error) {
        console.error(
          "Failed to load countries",
          error
        );
      } finally {
        setLoadingCountries(false);
      }
    };

    loadCountries();
  }, []);

  // ======================
  // LOAD PROVINCES
  // ======================

  useEffect(() => {
    const loadProvinces = async () => {
      try {
        setLoadingProvinces(true);

        const data = await getProvinces();

        setProvinces(
          Array.isArray(data) ? data : []
        );
      } catch (error) {
        console.error(
          "Failed to load provinces",
          error
        );
      } finally {
        setLoadingProvinces(false);
      }
    };

    loadProvinces();
  }, []);

  return (
    <>
      <h2 className="text-2xl font-bold mb-6">
        Address Details
      </h2>

      <div className="grid md:grid-cols-2 gap-5">

        {/* HOUSE NUMBER */}

        <div>
          <label className="block mb-2 font-medium">
            House Number
          </label>

          <input
            value={formData.houseNo}
            onChange={(e) =>
              updateField(
                "houseNo",
                e.target.value
              )
            }
            placeholder="House Number"
            className="
            border
            rounded-xl
            p-3
            w-full
            "
          />
        </div>

        {/* STREET */}

        <div>
          <label className="block mb-2 font-medium">
            Street
          </label>

          <input
            value={formData.street}
            onChange={(e) =>
              updateField(
                "street",
                e.target.value
              )
            }
            placeholder="Street"
            className="
            border
            rounded-xl
            p-3
            w-full
            "
          />
        </div>

        {/* AREA */}

        <div>
          <label className="block mb-2 font-medium">
            Area
          </label>

          <input
            value={formData.area}
            onChange={(e) =>
              updateField(
                "area",
                e.target.value
              )
            }
            placeholder="Area"
            className="
            border
            rounded-xl
            p-3
            w-full
            "
          />
        </div>

        {/* PROVINCE */}

        <div>
          <label className="block mb-2 font-medium">
            Province Of Residence
          </label>

          <select
            value={
              formData.provinceOfResidence
            }
            onChange={(e) =>
              updateField(
                "provinceOfResidence",
                e.target.value
              )
            }
            className="
            border
            rounded-xl
            p-3
            w-full
            "
          >
            <option value="">
              {loadingProvinces
                ? "Loading Provinces..."
                : "Select Province"}
            </option>

            {provinces.map(
              (province) => (
                <option
                  key={
                    province.provinceKey
                  }
                  value={province.name}
                >
                  {province.name}
                </option>
              )
            )}
          </select>
        </div>

        {/* PIN CODE */}

        <div>
          <label className="block mb-2 font-medium">
            Pin Code
          </label>

          <input
            value={formData.pinCode}
            onChange={(e) =>
              updateField(
                "pinCode",
                e.target.value
              )
            }
            placeholder="Pin Code"
            className="
            border
            rounded-xl
            p-3
            w-full
            "
          />
        </div>

        {/* COUNTRY */}

        <div>
          <label className="block mb-2 font-medium">
            Country
          </label>

          <select
            value={formData.country}
            onChange={(e) =>
              updateField(
                "country",
                e.target.value
              )
            }
            className="
            border
            rounded-xl
            p-3
            w-full
            "
          >
            <option value="">
              {loadingCountries
                ? "Loading Countries..."
                : "Select Country"}
            </option>

            {countries.map(
              (country) => (
                <option
                  key={
                    country.countryKey
                  }
                  value={country.name}
                >
                  {country.name}
                </option>
              )
            )}
          </select>
        </div>

      </div>
    </>
  );
}