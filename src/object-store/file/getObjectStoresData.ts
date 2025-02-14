import type { ObjectStore } from "@mjt-services/data-common-2025";
import type { DataMap } from "../type/DataMap";
import { getObjectStoreData } from "./getObjectStoreData";


export const getObjectStoresData = async (
  stores: ObjectStore[]
): Promise<DataMap> => {
  const dataMap: DataMap = {};
  for (const store of stores) {
    const storeData = await getObjectStoreData(store);
    Object.assign(dataMap, storeData);
  }
  return dataMap;
};
