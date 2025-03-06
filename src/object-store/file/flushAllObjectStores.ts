import { Bytes } from "@mjt-engine/byte";
import * as fs from "fs/promises";
import { DATA_MAP_CACHE, DIRTY_DATA_MAP_CACHE } from "./DATA_MAP_CACHE";

export const flushAllObjectStores = async () => {
  const entries = DATA_MAP_CACHE.entries();
  for (const [filePath, dataMapPromise] of entries) {
    const dirty = DIRTY_DATA_MAP_CACHE.get(filePath);
    if (!dirty) {
      continue;
    }
    const data = await dataMapPromise;
    const tempFilePath = `${filePath}.tmp`;
    const bytes = Bytes.toMsgPack(data);

    await fs.writeFile(tempFilePath, bytes, { flag: "w" });
    await fs.rename(tempFilePath, filePath as string);

    DIRTY_DATA_MAP_CACHE.set(filePath, false);
    console.log(`Flushed ${filePath}`);
  }
};
