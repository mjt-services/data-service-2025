import { Bytes } from "@mjt-engine/byte";
import { isUndefined } from "@mjt-engine/object";
import type { ObjectStore } from "@mjt-services/data-common-2025";
import type { DataMap } from "../type/DataMap";
import { DATA_MAP_CACHE } from "./DATA_MAP_CACHE";
import { objectStoreToFilePath } from "./objectStoreToFilePath";
import { readObjectStoreBytes } from "./readObjectStoreBytes";

export const getObjectStoreData = async (
  store: ObjectStore
): Promise<DataMap> => {
  const key = objectStoreToFilePath(store);
  const dataMap = await DATA_MAP_CACHE.get(key, async () => {
    const bytes = await readObjectStoreBytes(store);
    if (isUndefined(bytes)) {
      return {};
    }
    return Bytes.msgPackToObject(bytes);
  });
  return dataMap ?? {};
};
