import type { ConnectionListener } from "@mjt-engine/message";
import type { DataConnectionMap } from "@mjt-services/data-common-2025";
import { getObjectStoreData } from "../object-store/file/getObjectStoreData";
import { writeObjectStoreData } from "../object-store/file/writeObjectStoreData";
import { queryToKeys } from "../object-store/query/queryToKeys";

export const dataRemoveListener: ConnectionListener<
  DataConnectionMap,
  "data.remove"
> = async (props) => {
  const { objectStore, query } = props.detail.body;
  const dataMap = await getObjectStoreData(objectStore);

  const keys = await queryToKeys(query);
  for (const key of keys) {
    delete dataMap[key];
  }
  await writeObjectStoreData(objectStore, dataMap);
  return { success: true };
};
