import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL ?? "";

export interface Country {
  countryKey: string;
  name: string;
}

export const getCountries = async (): Promise<Country[]> => {
  const response = await axios.get(
    `${API_URL}/master/countries`
  );

  return response.data;
};