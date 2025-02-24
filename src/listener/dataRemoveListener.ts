import type { ConnectionListener } from "@mjt-engine/message";
import { isDefined } from "@mjt-engine/object";
import { type DataConnectionMap } from "@mjt-services/data-common-2025";
import { getObjectStoreData } from "../object-store/file/getObjectStoreData";
import { writeObjectStoreData } from "../object-store/file/writeObjectStoreData";
import { queryToKeys } from "../object-store/query/queryToKeys";
import { queryToObjectStores } from "../object-store/query/queryToObjectStores";
import { publishUpdateEvent } from "../event/publishUpdateEvent";

export const dataRemoveListener: ConnectionListener<
  DataConnectionMap,
  "data.remove"
> = async (props) => {
  const { objectStore, query } = props.detail.body;

  const stores = [...queryToObjectStores(query), objectStore].filter(isDefined);
  for (const store of stores) {
    const dataMap = await getObjectStoreData(store);
    const keys = await queryToKeys(query);
    const deletedValues: unknown[] = [];
    for (const key of keys) {
      const valueMaybe = dataMap[key];
      if (isDefined(valueMaybe)) {
        deletedValues.push(valueMaybe);
      }
      delete dataMap[key];
    }

    await writeObjectStoreData(store, dataMap);

    for (const value of deletedValues) {
      await publishUpdateEvent(value);
    }
  }
  return { success: true };
};
