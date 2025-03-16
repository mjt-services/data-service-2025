import { Asserts } from "@mjt-engine/assert";
import { Bytes } from "@mjt-engine/byte";
import { ByteStores } from "./ByteStores";
import { getEnv } from "../getEnv";
import { replaceValues } from "../object-store/object/replaceValues";
import { isUndefined } from "@mjt-engine/object";

const getBlobPath = () => {
  return `${Asserts.assertValue(getEnv().DATA_PATH)}/blob`;
};

export const swizzleAndStore = (value: unknown) => {
  const replaced = replaceValues({
    value,
    matchType: (v) => v instanceof ArrayBuffer,
    replacement: async (value) => {
      // if (value.byteLength === 32) {
      //   return value;
      // }
      const hash = await Bytes.hashOf({ bytes: value, algorithm: "SHA-256" });
      const baseDir = getBlobPath();
      await ByteStores.storeBlob({ baseDir, hash, data: value });
      return hash;
    },
  });
  return replaced;
};

export const unswizzleFromStore = (value: unknown) => {
  const replaced = replaceValues({
    value,
    matchType: (v) => v instanceof ArrayBuffer,
    replacement: async (value) => {
      if (value.byteLength !== 32) {
        return value;
      }
      const baseDir = getBlobPath();
      const data = await ByteStores.getBlob({ baseDir, hash: value });
      if (isUndefined(data)) {
        return value;
      }
      return data;
    },
  });
  return replaced;
};

export const Swizzles = {
  swizzleAndStore,
  unswizzleFromStore,
};
