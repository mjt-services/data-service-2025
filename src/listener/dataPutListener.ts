import type { ConnectionListener } from "@mjt-engine/message";
import type { DataConnectionMap } from "@mjt-services/data-common-2025";
import { getObjectStoreData } from "../object-store/file/getObjectStoreData";
import { writeObjectStoreData } from "../object-store/file/writeObjectStoreData";

export const dataPutListener: ConnectionListener<
  DataConnectionMap,
  "data.put"
> = async (props) => {
  const { objectStore, key, value } = props.detail.body;
  const dataMap = await getObjectStoreData(objectStore);
  dataMap[key] = value;
  await writeObjectStoreData(objectStore, dataMap);
  return key;
};
