import axios from "axios";
import { DeductionMaster } from "../types/master";

const API_URL = import.meta.env.VITE_API_URL ?? "";

export const fetchDeductions = async (): Promise<DeductionMaster[]> => {
  const response = await axios.get(`${API_URL}/api/deductions/deduction`);
  const data = response.data;
  
  // Handle different response formats
  if (Array.isArray(data)) {
    return data;
  }
  if (data && Array.isArray(data.data)) {
    return data.data;
  }
  if (data && Array.isArray(data.deductions)) {
    return data.deductions;
  }
  if (data && Array.isArray(data.content)) {
    return data.content;
  }
  return [];
};

export const createDeduction = async (
  payload: DeductionMaster
): Promise<DeductionMaster> => {
  const response = await axios.post(`${API_URL}/api/deductions/deduction`, payload);
  return response.data;
};

export const updateDeduction = async (
  id: string,
  payload: DeductionMaster
): Promise<DeductionMaster> => {
  const response = await axios.put(
    `${API_URL}/api/deductions/deduction/${id}`,
    payload
  );
  return response.data;
};

export const deleteDeduction = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/api/deductions/deduction/${id}`);
};
