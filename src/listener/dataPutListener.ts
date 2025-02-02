import type { ConnectionListener } from "@mjt-engine/message";
import type { DataConnectionMap } from "@mjt-services/data-common-2025";
import { getDbStoreData } from "../data-store/getDbStoreData";
import { idbValidKeyToString } from "../data-store/idbValidKeyToString";
import { writeDbStoreData } from "../data-store/writeDbStoreData";

export const dataPutListener: ConnectionListener<
  DataConnectionMap,
  "data.put"
> = async (props) => {
  const { dbStore, key, value } = props.detail.body;
  const dataMap = await getDbStoreData(dbStore);
  const stringKey = await idbValidKeyToString(key);
  dataMap[stringKey] = value;
  await writeDbStoreData(dbStore, dataMap);
  return stringKey;
};
