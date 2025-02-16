import type { ObjectStore } from "@mjt-services/data-common-2025";

export const objectStoreToFilePath = (objectStore: ObjectStore) => {
  const { namespace = "", store = "" } = objectStore;
  return `/data/${namespace}-${store}.msgpack`;
};
