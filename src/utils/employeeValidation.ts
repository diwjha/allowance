import { EmployeeRequestDto } from "../types/employeeApi";

export const validateEmployee = (
  data: EmployeeRequestDto
) => {
  const errors: string[] = [];

  if (!data.employeeCode)
    errors.push("Employee Code required");

  if (!data.firstName)
    errors.push("First Name required");

  if (!data.lastName)
    errors.push("Last Name required");

  if (!data.email)
    errors.push("Email required");

  if (!data.mobileNumber)
    errors.push("Mobile required");

  if (!data.position)
    errors.push("Position required");

  if (!data.departmentId)
    errors.push("Department required");

  return errors;
};