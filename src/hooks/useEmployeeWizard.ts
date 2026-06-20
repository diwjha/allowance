import { useState } from "react";

import { EmployeeRequestDto }
from "../types/employeeApi";

import { employeeInitialState }
from "../utils/employeeInitialState";

export const useEmployeeWizard = () => {

  const [step, setStep] = useState(1);

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState<EmployeeRequestDto>(
      employeeInitialState
    );

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const updateField = (
    field: keyof EmployeeRequestDto,
    value: any
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const updateAddressField = (
    field: keyof EmployeeRequestDto["address"],
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

  return {
    step,
    setStep,

    loading,
    setLoading,

    formData,
    setFormData,

    nextStep,
    prevStep,

    updateField,
    updateAddressField,
  };
};