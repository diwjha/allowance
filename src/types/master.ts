export type ComponentValueType =
  | "PERCENTAGE"
  | "FIXED_AMOUNT"
  | "UNIT";

export interface Country {
  id: number;

  name: string;
  code: string;

  currency: string;

  active: boolean;

  createdAt?: string;
  updatedAt?: string;
}

export interface CountryForm extends Country {
  region: string;
}

export interface AllowanceMaster {
  id: string;

  allowanceName: string;
  allowanceCode: string;

  allowanceCountryCode: string;

  allowanceValueType: ComponentValueType;

  allowanceDefaultValue: number;

  allowanceMinValue: number;
  allowanceMaxValue: number;

  taxableStatus: boolean;

  allowanceStatus: boolean;

  createdAt?: string;
  updatedAt?: string;
}

export interface DeductionMaster {
  id: string;

  deductionName: string;
  deductionCode: string;

  deductionCountryCode: string;

  deductionValueType: ComponentValueType;

  deductionDefaultValue: number;

  deductionMinValue: number;
  deductionMaxValue: number;

  taxableStatus: boolean;
  deductionStatus: boolean;

  createdAt?: string;
  updatedAt?: string;
}