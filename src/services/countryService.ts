import axios from "axios";

const API_URL = "http://localhost:8082/api/master";

export interface Country {
  countryKey: string;
  name: string;
}

export const getCountries = async (): Promise<Country[]> => {
  const response = await axios.get(
    `${API_URL}/countries`
  );

  return response.data;
};