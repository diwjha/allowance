import { useState } from "react";

import {
  employeeInitialState,
} from "../../../utils/employeeInitialState";

import {
  validateEmployee,
} from "../../../utils/employeeValidation";

import {
  createEmployee,
} from "../../../services/employeeService";

import PersonalInformationStep from "../../../components/employee/steps/PersonalInformationStep";
import ContactInformationStep from "../../../components/employee/steps/ContactInformationStep";
import EmploymentInformationStep from "../../../components/employee/steps/EmploymentInformationStep";
import OrganizationDetailsStep from "../../../components/employee/steps/OrganizationDetailsStep";
import EducationExperienceStep from "../../../components/employee/steps/EducationExperienceStep";
import GovernmentDetailsStep from "../../../components/employee/steps/GovernmentDetailsStep";
import FamilyInformationStep from "../../../components/employee/steps/FamilyInformationStep";
import ReviewAndSubmitStep from "../../../components/employee/steps/ReviewAndSubmitStep";

export default function EmployeeWizardPage() {
  const [step, setStep] = useState(1);

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState(employeeInitialState);

  const updateField = (
    field: any,
    value: any
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const updateAddressField = (
    field: any,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      address: {
        ...prev.address,
        [field]: value,
      },
    }));
  };

  const nextStep = () => {
    if (step < 8) {
      setStep(step + 1);
    }
  };

  const previousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async () => {
    const errors =
      validateEmployee(formData);

    if (errors.length) {
      alert(errors.join("\n"));
      return;
    }

    try {
      setLoading(true);

      await createEmployee(formData);

      alert(
        "Employee created successfully"
      );

      setFormData(
        employeeInitialState
      );

      setStep(1);
    } catch (error) {
      console.error(error);

      alert(
        "Employee creation failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">

      <div
        className="
        bg-white
        rounded-3xl
        shadow
        p-6
        mb-6
        "
      >
        <h1 className="text-3xl font-bold">
          Employee Wizard
        </h1>
      </div>

      <div
        className="
        flex
        flex-wrap
        gap-2
        mb-6
        "
      >
        {[
          "Personal",
          "Contact",
          "Employment",
          "Organization",
          "Education",
          "Government",
          "Family",
          "Review",
        ].map((item, index) => (
          <div
            key={item}
            className={`px-4 py-2 rounded-xl
            ${
              step === index + 1
                ? "bg-indigo-600 text-white"
                : "bg-slate-200"
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <div
        className="
        bg-white
        rounded-3xl
        shadow
        p-8
        "
      >

        {step === 1 && (
          <PersonalInformationStep
            formData={formData}
            updateField={updateField}
          />
        )}

        {step === 2 && (
          <ContactInformationStep
            formData={formData}
            updateField={updateField}
            updateAddressField={
              updateAddressField
            }
          />
        )}

        {step === 3 && (
          <EmploymentInformationStep
            formData={formData}
            updateField={updateField}
          />
        )}

        {step === 4 && (
          <OrganizationDetailsStep
            formData={formData}
            updateField={updateField}
          />
        )}

        {step === 5 && (
          <EducationExperienceStep
            formData={formData}
            updateField={updateField}
          />
        )}

        {step === 6 && (
          <GovernmentDetailsStep
            formData={formData}
            updateField={updateField}
          />
        )}

        {step === 7 && (
          <FamilyInformationStep
            formData={formData}
            updateField={updateField}
          />
        )}

        {step === 8 && (
          <ReviewAndSubmitStep
            formData={formData}
          />
        )}

      </div>

      <div
        className="
        flex
        justify-between
        mt-6
        "
      >

        <button
          onClick={previousStep}
          disabled={step === 1}
          className="
          px-6
          py-3
          rounded-xl
          bg-slate-300
          disabled:opacity-50
          "
        >
          Previous
        </button>

        {step < 8 ? (
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
            onClick={handleSubmit}
            disabled={loading}
            className="
            px-6
            py-3
            rounded-xl
            bg-green-600
            text-white
            "
          >
            {loading
              ? "Saving..."
              : "Create Employee"}
          </button>
        )}

      </div>

    </div>
  );
}