import { undefined } from "./dataPutListener";


export type ObjectWithIdField = { id: string; };

export const isObjectWithIdField = (
  maybe: unknown
): maybe is ObjectWithIdField => {
  const straw = maybe as ObjectWithIdField;
  return typeof straw === "object" && straw !== null && "id" in straw;
};

export const extractIdFromObject = (value: unknown): string | undefined => {
  if (isObjectWithIdField(value)) {
    return value.id;
  }
  return undefined;
};
