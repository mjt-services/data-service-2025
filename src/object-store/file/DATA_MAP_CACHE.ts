import { Caches } from "@mjt-engine/cache";
import type { DataMap } from "../type/DataMap";

export const DATA_MAP_CACHE = Caches.create<Promise<DataMap>>();
export const DIRTY_DATA_MAP_CACHE = Caches.create<boolean>();
