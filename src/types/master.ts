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
  id: number;

  name: string;
  code: string;

  countryCode: string;

  valueType: ComponentValueType;

  defaultValue: number;

  minValue: number;
  maxValue: number;

  taxable: boolean;

  active: boolean;

  createdAt?: string;
  updatedAt?: string;
}

export interface DeductionMaster {
  id: number;

  name: string;
  code: string;

  countryCode: string;

  valueType: ComponentValueType;

  defaultValue: number;

  minValue: number;
  maxValue: number;

  mandatory: boolean;

  active: boolean;

  createdAt?: string;
  updatedAt?: string;
}