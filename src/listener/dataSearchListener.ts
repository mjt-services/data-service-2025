import type { ConnectionListener } from "@mjt-engine/message";
import type {
  DataConnectionMap,
} from "@mjt-services/data-common-2025";
import { fromObjectStoreDataQueryToResults } from "../object-store/query/fromObjectStoreDataQueryToResults";

export const dataSearchListener: ConnectionListener<
  DataConnectionMap,
  "data.search"
> = async (props) => {
  const results = await fromObjectStoreDataQueryToResults(props.detail.body);
  return results;
};


