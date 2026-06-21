import axios from "axios";
import { AllowanceMaster } from "../types/master";

const API_URL = import.meta.env.VITE_API_URL ?? "";

export const fetchAllowances = async (): Promise<AllowanceMaster[]> => {
  const response = await axios.get(`${API_URL}/api/allowances/allowance`);
  return response.data;
};

export const createAllowance = async (
  payload: AllowanceMaster
): Promise<AllowanceMaster> => {
  console.log("Calling API:", `${API_URL}/api/allowances/add-allowance`);
  console.log("Sending data:", payload);
  const response = await axios.post(`${API_URL}/api/allowances/add-allowance`, payload);
  return response.data;
};

export const updateAllowance = async (
  id: string,
  payload: AllowanceMaster
): Promise<AllowanceMaster> => {
  const response = await axios.put(
    `${API_URL}/api/allowances/update-allowance/${id}`,
    payload
  );
  return response.data;
};

export const deleteAllowance = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/api/allowances/delete-allowance/${id}`);
};
