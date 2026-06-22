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
    <div className="container-fluid p-4">

      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h3 className="card-title fw-bold mb-0">
            Employee Wizard
          </h3>
        </div>
      </div>

      <div className="d-flex flex-wrap gap-2 mb-4">
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
          <span
            key={item}
            className={`badge ${
              step === index + 1
                ? "bg-primary"
                : "bg-secondary"
            }`}
          >
            {item}
          </span>
        ))}
      </div>

      <div className="card shadow-sm">
        <div className="card-body">

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
      </div>

      <div className="d-flex justify-content-between mt-4">

        <button
          onClick={previousStep}
          disabled={step === 1}
          className="btn btn-secondary btn-sm"
        >
          Previous
        </button>

        {step < 8 ? (
          <button
            onClick={nextStep}
            className="btn btn-primary btn-sm"
          >
            Next
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="btn btn-success btn-sm"
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