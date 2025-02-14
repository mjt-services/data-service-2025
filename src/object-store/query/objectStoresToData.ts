import { toMany } from "@mjt-engine/object";
import type { ObjectStore } from "@mjt-services/data-common-2025";
import { getObjectStoreData } from "../file/getObjectStoreData";


export const objectStoresToData = async (
  objectStore: ObjectStore | ObjectStore[]
) => {
  const objectStores = toMany(objectStore);

  let resultMap = {};

  for (const objectStore of objectStores) {
    const dataMap = await getObjectStoreData(objectStore);
    resultMap = { ...resultMap, ...dataMap };
  }
  return resultMap;
};
