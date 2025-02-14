import { Bytes } from "@mjt-engine/byte";
import type { ObjectStore } from "@mjt-services/data-common-2025";
import * as fs from "fs/promises";
import type { DataMap } from "../type/DataMap";
import { objectStoreToFilePath } from "./objectStoreToFilePath";

export const writeObjectStoreData = (
  objectStore: ObjectStore,
  data: DataMap
) => {
  const filePath = objectStoreToFilePath(objectStore);
  const bytes = Bytes.toMsgPack(data);
  return fs.writeFile(filePath, bytes, { flag: "w" });
};
