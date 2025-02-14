import type { ConnectionListener } from "@mjt-engine/message";
import { isDefined } from "@mjt-engine/object";
import { Ids, type DataConnectionMap } from "@mjt-services/data-common-2025";
import { getObjectStoresData } from "../object-store/file/getObjectStoresData";

export const dataGetManyListener: ConnectionListener<
  DataConnectionMap,
  "data.getMany"
> = async (props) => {
  const { objectStore, keys } = props.detail.body;
  const stores = [objectStore, ...keys.map((k) => Ids.toObjectStore(k))].filter(
    isDefined
  );
  const dataMap = await getObjectStoresData(stores);
  return keys.map((key) => dataMap[key]).filter(isDefined);
};
