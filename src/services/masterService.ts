import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getEducationLevels = async () => {
  const response = await axios.get(
    `${API_URL}/master/education-levels`
  );
  return response.data;
};

export const getMinistries = async () => {
  const response = await axios.get(
    `${API_URL}/master/ministries`
  );
  return response.data;
};

export const getDepartments = async () => {
  const response = await axios.get(
    `${API_URL}/master/departments`
  );
  return response.data;
};

export const getCountries = async () => {
  const response = await axios.get(
    `${API_URL}/master/countries`
  );
  return response.data;
};

export const getProvinces = async () => {
  const response = await axios.get(
    `${API_URL}/master/provinces`
  );
  return response.data;
};

export const getDistricts = async () => {
  const response = await axios.get(
    `${API_URL}/master/districts`
  );
  return response.data;
};

export const getBanks = async () => {
  const response = await axios.get(
    `${API_URL}/master/banks`
  );
  return response.data;
};

export const getBankBranches = async () => {
  const response = await axios.get(
    `${API_URL}/master/banks/branches`
  );
  return response.data;
};