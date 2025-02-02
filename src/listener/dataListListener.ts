import type { ConnectionListener } from "@mjt-engine/message";
import type { DataConnectionMap } from "@mjt-services/data-common-2025";
import { getDbStoreData } from "../data-store/getDbStoreData";


export const dataListListener: ConnectionListener<
  DataConnectionMap, "data.list"
> = async (props) => {
  const { dbStore, count, query } = props.detail.body;
  const dataMap = await getDbStoreData(dbStore);
  const keys = Object.keys(dataMap);
  return keys.slice(0, count);
};
