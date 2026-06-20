import axios from "axios";
import { EmployeeRequestDto } from "../types/employeeApi";

const API_URL =
  import.meta.env.VITE_API_URL;

export const createEmployee = async (
  payload: EmployeeRequestDto
) => {
  const response = await axios.post(
    `${API_URL}/employees`,
    payload
  );

  return response.data;
};