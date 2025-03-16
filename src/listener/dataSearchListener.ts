import type { ConnectionListener } from "@mjt-engine/message";
import type { DataConnectionMap } from "@mjt-services/data-common-2025";
import { fromObjectStoreDataQueryToResults } from "../object-store/query/fromObjectStoreDataQueryToResults";
import { Swizzles } from "../byte-store/Swizzles";

export const dataSearchListener: ConnectionListener<
  DataConnectionMap,
  "data.search"
> = async (props) => {
  const rawResults = await fromObjectStoreDataQueryToResults(props.detail.body);
  const unswizzled = await Swizzles.unswizzleFromStore(rawResults);
  return unswizzled;
};
