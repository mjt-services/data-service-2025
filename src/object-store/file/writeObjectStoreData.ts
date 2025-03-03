import { Bytes } from "@mjt-engine/byte";
import type { ObjectStore } from "@mjt-services/data-common-2025";
import * as fs from "fs/promises";
import type { DataMap } from "../type/DataMap";
import { objectStoreToFilePath } from "./objectStoreToFilePath";

export const writeObjectStoreData = async (
  objectStore: ObjectStore,
  data: DataMap
) => {
  const filePath = objectStoreToFilePath(objectStore);
  const tempFilePath = `${filePath}.tmp`;
  const bytes = Bytes.toMsgPack(data);

  await fs.writeFile(tempFilePath, bytes, { flag: "w" });
  await fs.rename(tempFilePath, filePath);
};
