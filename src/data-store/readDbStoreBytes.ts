import type { DbStore } from "@mjt-services/data-common-2025";
import { dbStoreToFilePath } from "./dbStoreToFilePath";
import * as fs from "fs/promises";

export const readDbStoreBytes = async (dbStore: DbStore) => {
  try {
    const filePath = dbStoreToFilePath(dbStore);
    const data = await fs.readFile(filePath);
    return data;
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return undefined;
    }
    throw error;
  }
};
