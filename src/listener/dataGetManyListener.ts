import type { ConnectionListener } from "@mjt-engine/message";
import { isDefined } from "@mjt-engine/object";
import type { DataConnectionMap } from "@mjt-services/data-common-2025";
import { getObjectStoreData } from "../object-store/file/getObjectStoreData";


export const dataGetManyListener: ConnectionListener<
  DataConnectionMap, "data.getMany"
> = async (props) => {
  const { objectStore, keys } = props.detail.body;
  const dataMap = await getObjectStoreData(objectStore);
  return keys.map((key) => dataMap[key]).filter(isDefined);
};
