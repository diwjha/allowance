export interface TaxSlab {
  id: number;
  rate: number;
  start: number;
  end: number;
}

export interface Allowance {
  id: number;
  name: string;
  percentage: number;
}

export interface Deduction {
  id: number;
  name: string;
  percentage: number;
}