import { Bytes, type ByteLike } from "@mjt-engine/byte";
import { promises as fs } from "fs";
import { join } from "path";

/** Convert an ArrayBuffer to a hex string */
const arrayBufferToHex = (buffer: ArrayBuffer): string =>
  Buffer.from(buffer).toString("hex");

/** Get the full file path for a given SHA-256 hash */
const getFilePath = ({
  baseDir,
  hash,
}: {
  baseDir: string;
  hash: ArrayBuffer;
}): string => {
  const hex = arrayBufferToHex(hash);
  const dir1 = hex.slice(0, 2);
  const dir2 = hex.slice(2, 4);
  const dir3 = hex.slice(4, 6);
  return join(baseDir, dir1, dir2, dir3, hex);
};

/** Store a blob */
export const storeBlob = async ({
  baseDir,
  hash,
  data,
}: {
  baseDir: string;
  hash: ArrayBuffer;
  data: ByteLike;
}): Promise<void> => {
  const filePath = getFilePath({ baseDir, hash });
  await fs.mkdir(join(filePath, ".."), { recursive: true });
  const bytes = Buffer.from(await Bytes.toArrayBuffer(data));
  console.log(`Storing blob at :${filePath} ${bytes.byteLength} bytes`);
  await fs.writeFile(filePath, bytes);
};

/** Retrieve a blob */
export const getBlob = async ({
  baseDir,
  hash,
}: {
  baseDir: string;
  hash: ArrayBuffer;
}): Promise<ArrayBuffer | null> => {
  try {
    const buffer = await fs.readFile(getFilePath({ baseDir, hash }));
    return Bytes.toArrayBuffer(buffer);
  } catch (err: any) {
    if (err.code === "ENOENT") return null;
    throw err;
  }
};

/** Delete a blob */
export const deleteBlob = async ({
  baseDir,
  hash,
}: {
  baseDir: string;
  hash: ArrayBuffer;
}): Promise<boolean> => {
  try {
    await fs.unlink(getFilePath({ baseDir, hash }));
    return true;
  } catch (err: any) {
    if (err.code === "ENOENT") return false;
    throw err;
  }
};

export const ByteStores = {
  storeBlob,
  getBlob,
  deleteBlob,
};
