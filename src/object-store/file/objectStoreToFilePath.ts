import { Asserts } from "@mjt-engine/assert";
import type { ObjectStore } from "@mjt-services/data-common-2025";
import { getEnv } from "../../getEnv";

export const objectStoreToFilePath = (objectStore: ObjectStore) => {
  const { namespace = "", store = "" } = objectStore;
  return `${Asserts.assertValue(
    getEnv().DATA_PATH
  )}/object/${namespace}-${store}.msgpack`;
};
