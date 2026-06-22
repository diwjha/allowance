import axios from "axios";
import { EmployeeRequestDto } from "../types/employeeApi";

const API_URL = import.meta.env.VITE_API_URL;

export const getEmployees = async () => {
  const response = await axios.get(
    `${API_URL}/employees`
  );

  return response.data;
};

export const getEmployeeById = async (
  employeeCode: string
) => {
  const response = await axios.get(
    `${API_URL}/employees/${employeeCode}`
  );

  return response.data;
};

export const createEmployee = async (
  payload: EmployeeRequestDto
) => {
  const response = await axios.post(
    `${API_URL}/employees`,
    payload
  );

  return response.data;
};

export const updateEmployee = async (
  employeeCode: string,
  payload: EmployeeRequestDto
) => {
  const response = await axios.put(
    `${API_URL}/employees/${employeeCode}`,
    payload
  );

  return response.data;
};

export const deleteEmployee = async (
  employeeCode: string
) => {
  const response = await axios.delete(
    `${API_URL}/employees/${employeeCode}`
  );

  return response.data;
};