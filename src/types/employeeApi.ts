// // ======================================
// // Employee Master Types
// // ======================================

// export type Gender =
//   | "MALE"
//   | "FEMALE"
//   | "OTHER";

// export type MaritalStatus =
//   | "SINGLE"
//   | "MARRIED"
//   | "DIVORCED"
//   | "WIDOWED";

// export type EmploymentStatus =
//   | "ACTIVE"
//   | "ON_LEAVE"
//   | "SUSPENDED"
//   | "RETIRED";

// export type ServiceType =
//   | "PERMANENT"
//   | "CONTRACTUAL"
//   | "TEMPORARY"
//   | "DEPUTATION";

// export type RecruitmentMode =
//   | "DIRECT"
//   | "PROMOTION"
//   | "CONTRACTUAL";

// export type EmployeeGroup =
//   | "GROUP_A"
//   | "GROUP_B"
//   | "GROUP_C"
//   | "GROUP_D";

// export type GazettedType =
//   | "GAZETTED"
//   | "NON_GAZETTED";

// export type CadreType =
//   | "IAS"
//   | "IPS"
//   | "IFS"
//   | "STATE_SERVICE"
//   | "CENTRAL_SERVICE"
//   | "PSU"
//   | "OTHER";

// export type EmploymentCategory =
//   | "FULL_TIME"
//   | "PART_TIME"
//   | "CONTRACT"
//   | "CONSULTANT";

// // ======================================
// // Emergency Contact
// // ======================================

// export interface EmergencyContact {
//   name: string;
//   relation: string;
//   mobileNumber: string;
// }

// // ======================================
// // Personal Information
// // ======================================

// export interface EmployeePersonalInfo {
//   photoUrl?: string;

//   firstName: string;
//   middleName?: string;
//   lastName: string;

//   fatherName: string;
//   motherName: string;

//   gender: Gender;

//   maritalStatus: MaritalStatus;

//   dateOfBirth: string;

//   mobileNumber: string;
//   alternateMobile?: string;

//   email: string;

//   aadhaarNumber: string;
//   panNumber: string;

//   permanentAddress: string;
//   currentAddress: string;

//   emergencyContact: EmergencyContact;
// }

// // ======================================
// // Employment Information
// // ======================================

// export interface EmployeeEmploymentInfo {
//   employeeId: string;

//   serviceNumber: string;

//   ministry: string;

//   department: string;

//   division: string;

//   officeLocation: string;

//   designation: string;

//   serviceType: ServiceType;

//   employmentCategory: EmploymentCategory;

//   cadre: CadreType;

//   batchYear: number;

//   recruitmentMode: RecruitmentMode;

//   groupType: EmployeeGroup;

//   gazettedType: GazettedType;

//   reportingOfficer: string;

//   reviewingOfficer: string;

//   joiningDate: string;

//   probationMonths: number;

//   confirmationDate?: string;

//   retirementDate?: string;

//   seniorityNumber?: string;
// }

// // ======================================
// // Salary Information
// // ======================================

// export interface EmployeeSalaryInfo {
//   basicPay: number;

//   payLevel: string;

//   gradePay: number;

//   hra: number;

//   da: number;

//   ta: number;

//   specialAllowance: number;

//   pfDeduction: number;

//   taxDeduction: number;

//   insuranceDeduction: number;

//   bankName: string;

//   accountNumber: string;

//   ifscCode: string;

//   pensionScheme: string;

//   pensionAccountNumber?: string;
// }

// // ======================================
// // Salary Revision History
// // ======================================

// export interface SalaryRevision {
//   id: number;

//   effectiveDate: string;

//   previousBasicPay: number;

//   revisedBasicPay: number;

//   remarks?: string;
// }

// // ======================================
// // Family Information
// // ======================================

// export interface EmployeeFamilyMember {
//   id: number;

//   name: string;

//   relation: string;

//   dateOfBirth: string;

//   dependent: boolean;

//   nominee: boolean;

//   nomineePercentage?: number;
// }

// // ======================================
// // Leave Information
// // ======================================

// export interface EmployeeLeaveInfo {
//   casualLeave: number;

//   earnedLeave: number;

//   sickLeave: number;

//   maternityLeave: number;

//   paternityLeave: number;

//   specialLeave: number;
// }

// // ======================================
// // Leave History
// // ======================================

// export interface EmployeeLeaveRecord {
//   id: number;

//   leaveType: string;

//   fromDate: string;

//   toDate: string;

//   days: number;

//   status: string;
// }

// // ======================================
// // Benefits Information
// // ======================================

// export interface EmployeeBenefits {
//   medicalBenefits: boolean;

//   insuranceCoverage: boolean;

//   housingFacility: boolean;

//   travelBenefits: boolean;

//   ltcAvailable: boolean;

//   otherBenefits?: string;
// }

// // ======================================
// // Promotion History
// // ======================================

// export interface EmployeePromotion {
//   id: number;

//   promotionDate: string;

//   oldDesignation: string;

//   newDesignation: string;

//   remarks?: string;
// }

// // ======================================
// // Transfer History
// // ======================================

// export interface EmployeeTransfer {
//   id: number;

//   transferDate: string;

//   fromDepartment: string;

//   toDepartment: string;

//   fromLocation: string;

//   toLocation: string;

//   reason: string;
// }

// // ======================================
// // Posting History
// // ======================================

// export interface EmployeePosting {
//   id: number;

//   officeName: string;

//   department: string;

//   designation: string;

//   postingDate: string;

//   relievingDate?: string;
// }

// // ======================================
// // Service History
// // ======================================

// export interface EmployeeServiceHistory {
//   id: number;

//   department: string;

//   designation: string;

//   location: string;

//   startDate: string;

//   endDate?: string;
// }

// // ======================================
// // Training Records
// // ======================================

// export interface EmployeeTraining {
//   id: number;

//   trainingName: string;

//   instituteName: string;

//   startDate: string;

//   endDate: string;

//   certificationName?: string;

//   remarks?: string;
// }

// // ======================================
// // Performance Records
// // ======================================

// export interface EmployeePerformance {
//   id: number;

//   year: number;

//   aparRating: string;

//   acrRating: string;

//   achievements?: string;

//   remarks?: string;
// }

// // ======================================
// // Compliance Information
// // ======================================

// export interface EmployeeCompliance {
//   vigilanceStatus: string;

//   integrityStatus: string;

//   backgroundVerificationStatus: string;

//   serviceRulesApplicable: string;

//   disciplinaryAction?: string;

//   pendingInquiry?: string;

//   courtCaseDetails?: string;
// }

// // ======================================
// // Official Credentials
// // ======================================

// export interface EmployeeOfficialCredentials {
//   officialEmail: string;

//   hrmsLoginId: string;

//   eOfficeLoginId: string;

//   digitalSignatureNumber?: string;

//   identityCardNumber?: string;
// }

// // ======================================
// // Documents
// // ======================================

// export interface EmployeeDocument {
//   id: number;

//   documentName: string;

//   documentType: string;

//   fileName: string;

//   fileUrl: string;

//   fileSize?: number;

//   mimeType?: string;

//   uploadedAt: string;
// }

// // ======================================
// // Employee Status History
// // ======================================

// export interface EmployeeStatusHistory {
//   id: number;

//   status: EmploymentStatus;

//   effectiveDate: string;

//   remarks?: string;
// }

// // ======================================
// // Main Employee Object
// // ======================================

// export interface Employee {
//   id: number;

//   personalInfo: EmployeePersonalInfo;

//   employmentInfo: EmployeeEmploymentInfo;

//   salaryInfo: EmployeeSalaryInfo;

//   leaveInfo: EmployeeLeaveInfo;

//   leaveHistory: EmployeeLeaveRecord[];

//   benefitsInfo: EmployeeBenefits;

//   familyMembers: EmployeeFamilyMember[];

//   promotions: EmployeePromotion[];

//   transfers: EmployeeTransfer[];

//   postings: EmployeePosting[];

//   serviceHistory: EmployeeServiceHistory[];

//   trainings: EmployeeTraining[];

//   performances: EmployeePerformance[];

//   salaryRevisions: SalaryRevision[];

//   complianceInfo: EmployeeCompliance;

//   officialCredentials: EmployeeOfficialCredentials;

//   documents: EmployeeDocument[];

//   statusHistory: EmployeeStatusHistory[];

//   status: EmploymentStatus;

//   createdAt?: string;

//   updatedAt?: string;

//   createdBy?: string;

//   updatedBy?: string;
// }






export type Title =
  | "MR"
  | "MS"
  | "MRS"
  | "DR"
  | "PROF";

export type Gender =
  | "MALE"
  | "FEMALE";

export type EmploymentType =
  | "PERMANENT"
  | "PROBATIONARY"
  | "INTERN"
  | "CONTRACT";

export interface EmployeeAddressDto {
  houseNo: string;
  street: string;
  area: string;
  provinceOfResidence: string;
  pinCode: string;
  country: string;
}

export interface EmployeeRequestDto {
  employeeCode: string;

  title: Title;

  firstName: string;
  lastName: string;

  gender: Gender;

  dateOfBirth: string;

  email: string;
  mobileNumber: string;

  dateOfJoining: string;

  employmentType: EmploymentType;

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

  address: EmployeeAddressDto;

  branchId: string;

  accountNumber: string;

  hasSpouse: boolean;

  noOfEligibleChildren: number;
}