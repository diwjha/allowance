

import axios from "axios";
import { EmployeeRequestDto } from "../types/employeeApi";

const API_URL = import.meta.env.VITE_API_URL;

// GET ALL EMPLOYEES
export const getEmployees = async (
  page = 0,
  size = 20
) => {
  const response = await axios.get(
    `${API_URL}/employees/employee-list?page=${page}&size=${size}`
  );

  return response.data;
};

// GET EMPLOYEE BY CODE
export const getEmployeeById = async (
  employeeCode: string
) => {
  const response = await axios.get(
    `${API_URL}/employees/employee/${employeeCode}`
  );

  return response.data;
};

// CREATE EMPLOYEE
export const createEmployee = async (
  payload: EmployeeRequestDto
) => {
  const response = await axios.post(
    `${API_URL}/employees/employee`,
    payload
  );

  return response.data;
};

// SEARCH EMPLOYEE
export const searchEmployees = async (
  keyword: string
) => {
  const response = await axios.get(
    `${API_URL}/employees/search`,
    {
      params: {
        keyword,
      },
    }
  );

  return response.data;
};