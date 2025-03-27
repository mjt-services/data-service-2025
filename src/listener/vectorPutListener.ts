import type { ConnectionListener } from "@mjt-engine/message";
import { toMany } from "@mjt-engine/object";
import type { DataConnectionMap } from "@mjt-services/data-common-2025";
import { getQdrantClient } from "../vector-store/getQdrantClient";
import type { QdrantPoint } from "../vector-store/QdrantPoint";
import { TEXT_VECTOR_COLLECTION_NAME } from "../vector-store/TEXT_VECTOR_COLLECTION_NAME";

export const vectorPutListener: ConnectionListener<
  DataConnectionMap,
  "vector.put"
> = async (props) => {
  const { point } = props.detail.body;
  console.log("Vector put", point);
  const client = getQdrantClient();
  const points: QdrantPoint[] = toMany(point).map((p) => {
    const { id, payload, vector } = p;
    return {
      id,
      payload: payload as Record<string, unknown>,
      vector: Array.from(vector),
    };
  });
  const result = await client.upsert(TEXT_VECTOR_COLLECTION_NAME, {
    wait: true,
    points: points,
  });
  console.log("Upsert result", result);
  return { success: result.status === "completed" };
};
