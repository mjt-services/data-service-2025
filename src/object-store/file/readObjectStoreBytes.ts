import type { ObjectStore } from "@mjt-services/data-common-2025";
import * as fs from "fs/promises";
import { objectStoreToFilePath } from "./objectStoreToFilePath";

export const readObjectStoreBytes = async (objectStore: ObjectStore) => {
  try {
    const filePath = objectStoreToFilePath(objectStore);
    return fs.readFile(filePath);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return undefined;
    }
    throw error;
  }
};
