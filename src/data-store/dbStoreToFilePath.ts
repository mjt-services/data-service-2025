import type { DbStore } from "@mjt-services/data-common-2025";


export const dbStoreToFilePath = (dbStore: DbStore) => {
  return `/data/${dbStore.dbName}-${dbStore.storeName}.msgpack`;
};
