import { isDefined } from "@mjt-engine/object";
import { QdrantClient } from "@qdrant/js-client-rest";
import { getEnv } from "../getEnv";

let _client: QdrantClient | undefined = undefined;
export const getQdrantClient = () => {
  if (isDefined(_client)) {
    return _client;
  }

  const url = getEnv().QDRANT_URL;
  _client = new QdrantClient({
    url,
  });
  return _client;
};
