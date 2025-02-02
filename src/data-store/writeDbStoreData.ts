import { Bytes } from "@mjt-engine/byte";
import type { DbStore } from "@mjt-services/data-common-2025";
import * as fs from "fs/promises";
import type { DataMap } from "./DataMap";
import { dbStoreToFilePath } from "./dbStoreToFilePath";

export const writeDbStoreData = (dbStore: DbStore, data: DataMap) => {
  const filePath = dbStoreToFilePath(dbStore);
  const bytes = Bytes.toMsgPack(data);
  return fs.writeFile(filePath, bytes, { flag: "w" });
};
