import type { DbStore } from "@mjt-services/data-common-2025";
import type { fs } from "node:fs/promises";
import { undefined } from "./dataAddListener";
import { dbStoreToFilePath } from "./dbStoreToFilePath";


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
