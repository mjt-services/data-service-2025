import type { ConnectionListener } from "@mjt-engine/message";
import { isDefined } from "@mjt-engine/object";
import { Ids, type DataConnectionMap } from "@mjt-services/data-common-2025";
import { getObjectStoresData } from "../object-store/file/getObjectStoresData";
import { Swizzles } from "../byte-store/Swizzles";

export const dataGetManyListener: ConnectionListener<
  DataConnectionMap,
  "data.getMany"
> = async (props) => {
  const { objectStore, keys } = props.detail.body;
  const stores = [objectStore, ...keys.map((k) => Ids.toObjectStore(k))].filter(
    isDefined
  );
  const dataMap = await getObjectStoresData(stores);
  const result = await Promise.all(
    keys
      .map((key) => dataMap[key])
      .filter(isDefined)
      .map((value) => Swizzles.unswizzleFromStore(value))
  );
  return result;
};
