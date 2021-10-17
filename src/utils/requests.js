import { URL } from "./enums";

const getVin = async (vin) => {
  return await fetch(`${URL}vehicles/decodevin/${vin}?format=json`);
};

const getDescription = async () => {
  return await fetch(`${URL}vehicles/getvehiclevariablelist?format=json`);
};

export { getVin, getDescription };
