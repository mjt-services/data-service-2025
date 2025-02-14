import type { ObjectStore } from "@mjt-services/data-common-2025";
import { objectStoreToFilePath } from "./objectStoreToFilePath";
import * as fs from "fs/promises";

export const readObjectStoreBytes = async (objectStore: ObjectStore) => {
  try {
    const filePath = objectStoreToFilePath(objectStore);
    const data = await fs.readFile(filePath);
    return data;
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return undefined;
    }
    throw error;
  }
};
