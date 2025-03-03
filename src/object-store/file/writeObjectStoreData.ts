import { Bytes } from "@mjt-engine/byte";
import type { ObjectStore } from "@mjt-services/data-common-2025";
import * as fs from "fs/promises";
import type { DataMap } from "../type/DataMap";
import { objectStoreToFilePath } from "./objectStoreToFilePath";
import { dirname, join } from "path";

export const writeObjectStoreData = async (
  objectStore: ObjectStore,
  data: DataMap
) => {
  const filePath = objectStoreToFilePath(objectStore);
  const tempFilePath = join(dirname(filePath), `${filePath}.tmp`);
  const bytes = Bytes.toMsgPack(data);

  await fs.writeFile(tempFilePath, bytes, { flag: "w" });
  await fs.rename(tempFilePath, filePath);
};