import { type ConnectionListener } from "@mjt-engine/message";
import { isDefined, isUndefined } from "@mjt-engine/object";
import { Ids, type DataConnectionMap } from "@mjt-services/data-common-2025";
import { getObjectStoreData } from "../object-store/file/getObjectStoreData";
import { writeObjectStoreData } from "../object-store/file/writeObjectStoreData";
import { extractIdFromObject } from "./ObjectWithIdField";
import { publishUpdateEvent } from "../event/publishUpdateEvent";

export const dataPutListener: ConnectionListener<
  DataConnectionMap,
  "data.put"
> = async (props) => {
  const { objectStore, key, value } = props.detail.body;
  const realizedKey = isDefined(key) ? key : extractIdFromObject(value);
  if (isUndefined(realizedKey)) {
    throw new Error("Key must be defined or value must have an id field");
  }
  const realizedObjectStore = isDefined(objectStore)
    ? objectStore
    : Ids.toObjectStore(realizedKey);
  if (isUndefined(realizedObjectStore)) {
    throw new Error(
      "ObjectStore must be defined or value must have an id field"
    );
  }
  const dataMap = await getObjectStoreData(realizedObjectStore);
  dataMap[realizedKey] = value;
  await writeObjectStoreData(realizedObjectStore, dataMap);
  await publishUpdateEvent(value);
  return realizedKey;
};
