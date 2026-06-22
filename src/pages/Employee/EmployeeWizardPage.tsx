
import { useState } from "react";
import { createEmployee } from "../../services/employeeService";
import PersonalDetailsStep from "./steps/PersonalDetailsStep";
import EmploymentDetailsStep from "./steps/EmploymentDetailsStep";
import OrganizationDetailsStep from "./steps/OrganizationDetailsStep";
import LocationDetailsStep from "./steps/LocationDetailsStep";
import AddressDetailsStep from "./steps/AddressDetailsStep";
import BankDetailsStep from "./steps/BankDetailsStep";
import FamilyDetailsStep from "./steps/FamilyDetailsStep";
import DocumentsStep from "./steps/DocumentsStep";
export interface EmployeeFormData {
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

  houseNo: string;
  street: string;
  area: string;
  provinceOfResidence: string;
  pinCode: string;
  country: string;
bankId: string;
  branchId: string;

  accountNumber: string;

  hasSpouse: boolean;

  noOfEligibleChildren: number;

  photograph?: File | null;
  nationalId?: File | null;
  educationCertificate?: File | null;
}

const steps = [
  "Personal",
  "Employment",
  "Organization",
  "Location",
  "Address",
  "Bank",
  "Family",
  "Documents",
];

export default function EmployeeWizardPage() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] =
    useState<EmployeeFormData>({
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

      houseNo: "",
      street: "",
      area: "",
      provinceOfResidence: "",
      pinCode: "",
      country: "",
bankId: "",
      branchId: "",

      accountNumber: "",

      hasSpouse: false,

      noOfEligibleChildren: 0,

      photograph: null,
      nationalId: null,
      educationCertificate: null,
    });

  const updateField = (
    field: keyof EmployeeFormData,
    value: any
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const nextStep = () => {
    if (step < steps.length) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const submitEmployee = async () => {
  try {
    const payload = {
      employeeCode: formData.employeeCode,

      title: formData.title,

      firstName: formData.firstName,
      lastName: formData.lastName,

      gender: formData.gender,

      dateOfBirth: formData.dateOfBirth,

      email: formData.email,
      mobileNumber: formData.mobileNumber,

      dateOfJoining: formData.dateOfJoining,

      employmentType: formData.employmentType,

      position: formData.position,

      educationLevelId:
        formData.educationLevelId,

      priorExperience: Number(
        formData.priorExperience
      ),

      civilServiceCardId:
        formData.civilServiceCardId,

      socialSecurityNumber:
        formData.socialSecurityNumber,

      ministryId: formData.ministryId,

      departmentId:
        formData.departmentId,

      division: formData.division,

      countryKey:
        formData.countryKey,

      provinceKey:
        formData.provinceKey,

      districtKey:
        formData.districtKey,

      address: {
        houseNo: formData.houseNo,
        street: formData.street,
        area: formData.area,
        provinceOfResidence:
          formData.provinceOfResidence,
        pinCode: formData.pinCode,
        country: formData.country,
      },

      branchId: formData.branchId,

      accountNumber:
        formData.accountNumber,

      hasSpouse:
        formData.hasSpouse,

      noOfEligibleChildren:
        Number(
          formData.noOfEligibleChildren
        ),
    };

    console.log(
      "Employee Payload",
      payload
    );

    const response =
      await createEmployee(payload as any);

    console.log(
      "Employee Created",
      response
    );

    alert(
      "Employee created successfully"
    );

    window.location.reload();
  } catch (error: any) {
    console.error(error);

    alert(
      error?.response?.data?.message ||
        "Failed to create employee"
    );
  }
};
  return (
    <div className="space-y-6">

      <div className="bg-white rounded-3xl shadow-lg p-6">
        <h1 className="text-3xl font-bold">
          Employee Registration
        </h1>

        <p className="text-slate-500 mt-2">
          Complete employee onboarding.
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-lg p-6">
        <div className="flex flex-wrap gap-3">

          {steps.map((item, index) => (
            <div
              key={item}
              className={`
              px-4
              py-2
              rounded-xl
              text-sm
              font-semibold

              ${
                step === index + 1
                  ? "bg-indigo-600 text-white"
                  : "bg-slate-100 text-slate-600"
              }
              `}
            >
              {index + 1}. {item}
            </div>
          ))}

        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-lg p-8">

  {step === 1 && (
    <PersonalDetailsStep
      formData={formData}
      updateField={updateField}
    />
  )}

  {step === 2 && (
    <EmploymentDetailsStep
      formData={formData}
      updateField={updateField}
    />
  )}

  {step === 3 && (
    <OrganizationDetailsStep
      formData={formData}
      updateField={updateField}
    />
  )}

  {/* LOCATION */}

  {step === 4 && (
    <LocationDetailsStep
      formData={formData}
      updateField={updateField}
    />
  )}

  {/* ADDRESS */}

  {step === 5 && (
    <AddressDetailsStep
      formData={formData}
      updateField={updateField}
    />
  )}

  {/* BANK */}

  {step === 6 && (
    <BankDetailsStep
      formData={formData}
      updateField={updateField}
    />
  )}

  {/* FAMILY */}

  {step === 7 && (
    <FamilyDetailsStep
      formData={formData}
      updateField={updateField}
    />
  )}

  {/* DOCUMENTS */}

  {step === 8 && (
    <DocumentsStep
      formData={formData}
      updateField={updateField}
    />
  )}

</div>
      <div className="flex justify-between">

        <button
          onClick={prevStep}
          disabled={step === 1}
          className="
          px-6
          py-3
          rounded-xl
          bg-slate-200
          disabled:opacity-50
          "
        >
          Previous
        </button>

        {step < steps.length ? (
          <button
            onClick={nextStep}
            className="
            px-6
            py-3
            rounded-xl
            bg-indigo-600
            text-white
            "
          >
            Next
          </button>
        ) : (
          <button
            onClick={submitEmployee}
            className="
            px-6
            py-3
            rounded-xl
            bg-green-600
            text-white
            "
          >
            Save Employee
          </button>
        )}

      </div>

    </div>
  );
}