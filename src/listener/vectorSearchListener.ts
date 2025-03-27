import type { ConnectionListener } from "@mjt-engine/message";
import type { DataConnectionMap } from "@mjt-services/data-common-2025";
import { getQdrantClient } from "../vector-store/getQdrantClient";
import { TEXT_VECTOR_COLLECTION_NAME } from "../vector-store/TEXT_VECTOR_COLLECTION_NAME";

import type { QdrantFilter } from "../vector-store/QdrantFilter";
export const vectorSearchListener: ConnectionListener<
  DataConnectionMap,
  "vector.search"
> = async (props) => {
  const { query, filter, limit, scoreThreshold } = props.detail.body;
  console.log("Vector put", { query, filter, limit, scoreThreshold });
  const client = getQdrantClient();

  const result = await client.search(TEXT_VECTOR_COLLECTION_NAME, {
    vector: Array.from(query),
    with_payload: true,
    score_threshold: scoreThreshold,
    limit: limit,
    filter: filter as QdrantFilter,
  });
  console.log("Search result", result);

  return result as unknown as DataConnectionMap["vector.search"]["response"];
};
