import type { ConnectionListener } from "@mjt-engine/message";
import type { DataConnectionMap } from "@mjt-services/data-common-2025";
import { getDbStoreData } from "../data-store/getDbStoreData";
import { idbValidKeyToString } from "../data-store/idbValidKeyToString";


export const dataGetListener: ConnectionListener<
  DataConnectionMap, "data.get"
> = async (props) => {
  const { dbStore, key } = props.detail.body;
  const dataMap = await getDbStoreData(dbStore);
  const stringKey = await idbValidKeyToString(key);
  return dataMap[stringKey];
};
