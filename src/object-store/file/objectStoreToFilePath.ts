import type { ObjectStore } from "@mjt-services/data-common-2025";

export const objectStoreToFilePath = (dbStore: ObjectStore) => {
  return `/data/${dbStore.namespace}-${dbStore.store}.msgpack`;
};
