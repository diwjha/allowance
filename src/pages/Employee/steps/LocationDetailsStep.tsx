// import { EmployeeFormData } from "../EmployeeWizardPage";

// interface Props {
//   formData: EmployeeFormData;
//   updateField: (
//     field: keyof EmployeeFormData,
//     value: any
//   ) => void;
// }

// export default function LocationDetailsStep({
//   formData,
//   updateField,
// }: Props) {
//   return (
//     <>
//       <h2 className="text-2xl font-bold mb-6">
//         Location Details
//       </h2>

//       <div className="grid md:grid-cols-3 gap-4">

//         <input
//           placeholder="Country Key"
//           value={formData.countryKey}
//           onChange={(e) =>
//             updateField(
//               "countryKey",
//               e.target.value
//             )
//           }
//           className="border rounded-xl p-3"
//         />

//         <input
//           placeholder="Province Key"
//           value={formData.provinceKey}
//           onChange={(e) =>
//             updateField(
//               "provinceKey",
//               e.target.value
//             )
//           }
//           className="border rounded-xl p-3"
//         />

//         <input
//           placeholder="District Key"
//           value={formData.districtKey}
//           onChange={(e) =>
//             updateField(
//               "districtKey",
//               e.target.value
//             )
//           }
//           className="border rounded-xl p-3"
//         />

//       </div>
//     </>
//   );
// }




import { useEffect, useState } from "react";
import { EmployeeFormData } from "../EmployeeWizardPage";

import {
  getCountries,
  getProvinces,
  getDistricts,
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

interface District {
  districtKey: string;
  name: string;
}

export default function LocationDetailsStep({
  formData,
  updateField,
}: Props) {
  const [countries, setCountries] =
    useState<Country[]>([]);

  const [provinces, setProvinces] =
    useState<Province[]>([]);

  const [districts, setDistricts] =
    useState<District[]>([]);

  useEffect(() => {
    loadMasters();
  }, []);

  const loadMasters = async () => {
    try {
      const [
        countriesData,
        provincesData,
        districtsData,
      ] = await Promise.all([
        getCountries(),
        getProvinces(),
        getDistricts(),
      ]);

      setCountries(countriesData);
      setProvinces(provincesData);
      setDistricts(districtsData);
    } catch (error) {
      console.error(
        "Failed to load locations",
        error
      );
    }
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-6">
        Location Details
      </h2>

      <div className="grid md:grid-cols-3 gap-4">

        {/* COUNTRY */}

        <div>
          <label className="block mb-2 font-medium">
            Country
          </label>

          <select
            value={formData.countryKey}
            onChange={(e) =>
              updateField(
                "countryKey",
                e.target.value
              )
            }
            className="border rounded-xl p-3 w-full"
          >
            <option value="">
              Select Country
            </option>

            {countries.map((country) => (
              <option
                key={country.countryKey}
                value={country.countryKey}
              >
                {country.name}
              </option>
            ))}
          </select>
        </div>

        {/* PROVINCE */}

        <div>
          <label className="block mb-2 font-medium">
            Province
          </label>

          <select
            value={formData.provinceKey}
            onChange={(e) =>
              updateField(
                "provinceKey",
                e.target.value
              )
            }
            className="border rounded-xl p-3 w-full"
          >
            <option value="">
              Select Province
            </option>

            {provinces.map((province) => (
              <option
                key={province.provinceKey}
                value={province.provinceKey}
              >
                {province.name}
              </option>
            ))}
          </select>
        </div>

        {/* DISTRICT */}

        <div>
          <label className="block mb-2 font-medium">
            District
          </label>

          <select
            value={formData.districtKey}
            onChange={(e) =>
              updateField(
                "districtKey",
                e.target.value
              )
            }
            className="border rounded-xl p-3 w-full"
          >
            <option value="">
              Select District
            </option>

            {districts.map((district) => (
              <option
                key={district.districtKey}
                value={district.districtKey}
              >
                {district.name}
              </option>
            ))}
          </select>
        </div>

      </div>
    </>
  );
}