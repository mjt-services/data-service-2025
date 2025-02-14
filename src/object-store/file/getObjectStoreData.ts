import { Bytes } from "@mjt-engine/byte";
import { isUndefined } from "@mjt-engine/object";
import type { ObjectStore } from "@mjt-services/data-common-2025";
import type { DataMap } from "../type/DataMap";
import { readObjectStoreBytes } from "./readObjectStoreBytes";

export const getObjectStoreData = async (
  store: ObjectStore
): Promise<DataMap> => {
  const bytes = await readObjectStoreBytes(store);
  if (isUndefined(bytes)) {
    return {};
  }
  return Bytes.msgPackToObject(bytes);
};
