export interface EmployeeRequestDto {
  employeeCode: string;

  title: string;

  firstName: string;
  lastName: string;

  gender: string;

  dateOfBirth: string;

  email: string;
  mobileNumber: string;

  dateOfJoining: string;

  employmentType: string;

  position: string;

  educationLevelId: string;

  priorExperience: number;

  civilServiceCardId: string;
  socialSecurityNumber: string;

  ministryId: string;
  departmentId: string;
  division: string;

  countryKey: string;
  provinceKey: string;
  districtKey: string;

  address: {
    houseNo: string;
    street: string;
    area: string;
    provinceOfResidence: string;
    pinCode: string;
    country: string;
  };

  branchId: string;

  accountNumber: string;

  hasSpouse: boolean;

  noOfEligibleChildren: number;
}