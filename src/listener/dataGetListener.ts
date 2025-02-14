import type { ConnectionListener } from "@mjt-engine/message";
import { isDefined, isUndefined } from "@mjt-engine/object";
import { Ids, type DataConnectionMap } from "@mjt-services/data-common-2025";
import { getObjectStoreData } from "../object-store/file/getObjectStoreData";

export const dataGetListener: ConnectionListener<
  DataConnectionMap,
  "data.get"
> = async (props) => {
  const { objectStore, key } = props.detail.body;

  const realizedObjectStore = isDefined(objectStore)
    ? objectStore
    : Ids.toObjectStore(key);
  if (isUndefined(realizedObjectStore)) {
    throw new Error(
      "ObjectStore must be defined or value must have an id field"
    );
  }

  const dataMap = await getObjectStoreData(realizedObjectStore);
  return dataMap[key];
};
