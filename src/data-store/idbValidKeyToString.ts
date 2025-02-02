import { Bytes } from "@mjt-engine/byte";
import { isUndefined } from "@mjt-engine/object";


export const idbValidKeyToString = async (
  key: IDBValidKey
): Promise<string> => {
  if (typeof key === "string") {
    return key;
  }
  if (isUndefined(key)) {
    return "";
  }
  if (key instanceof Date) {
    return key.toISOString();
  } else if (key instanceof ArrayBuffer || ArrayBuffer.isView(key)) {
    return Bytes.toDataUrl(key);
  } else if (Array.isArray(key)) {
    const strings = (await Promise.all(key.map(idbValidKeyToString))).sort();
    return JSON.stringify(strings);
  } else {
    return JSON.stringify(key);
  }
};
