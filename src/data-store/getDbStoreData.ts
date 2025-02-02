import { Bytes } from "@mjt-engine/byte";
import { isUndefined } from "@mjt-engine/object";
import type { DbStore } from "@mjt-services/data-common-2025";
import type { DataMap } from "./DataMap";
import { readDbStoreBytes } from "./readDbStoreBytes";


export const getDbStoreData = async (dbStore: DbStore): Promise<DataMap> => {
  const bytes = await readDbStoreBytes(dbStore);
  if (isUndefined(bytes)) {
    return {};
  }
  return Bytes.msgPackToObject(bytes);
};
