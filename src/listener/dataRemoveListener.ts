import type { ConnectionListener } from "@mjt-engine/message";
import type { DataConnectionMap } from "@mjt-services/data-common-2025";
import { getDbStoreData } from "../data-store/getDbStoreData";
import { idbValidKeyToString } from "../data-store/idbValidKeyToString";
import { writeDbStoreData } from "../data-store/writeDbStoreData";


export const dataRemoveListener: ConnectionListener<
  DataConnectionMap, "data.remove"
> = async (props) => {
  const { dbStore, query } = props.detail.body;
  const dataMap = await getDbStoreData(dbStore);
  if (query instanceof IDBKeyRange) {
    throw new Error("IDBKeyRange not supported");
  }
  const stringKey = await idbValidKeyToString(query);
  delete dataMap[stringKey];
  await writeDbStoreData(dbStore, dataMap);
  return { success: true };
};
