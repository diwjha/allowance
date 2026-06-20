import { EmployeeRequestDto } from "../types/employeeApi";

export const employeeInitialState: EmployeeRequestDto = {
  employeeCode: "",

  title: "MR",

  firstName: "",
  lastName: "",

  gender: "MALE",

  dateOfBirth: "",

  email: "",
  mobileNumber: "",

  dateOfJoining: "",

  employmentType: "PERMANENT",

  position: "",

  educationLevelId: "",

  priorExperience: 0,

  civilServiceCardId: "",
  socialSecurityNumber: "",

  ministryId: "",
  departmentId: "",
  division: "",

  countryKey: "",
  provinceKey: "",
  districtKey: "",

  address: {
    houseNo: "",
    street: "",
    area: "",
    provinceOfResidence: "",
    pinCode: "",
    country: "",
  },

  branchId: "",

  accountNumber: "",

  hasSpouse: false,

  noOfEligibleChildren: 0,
};