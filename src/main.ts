import { getConnection } from "./_connection";
import { getEnv } from "./getEnv";
import { flushAllObjectStores } from "./object-store/file/flushAllObjectStores";
import { getQdrantClient } from "./vector-store/getQdrantClient";
import { TEXT_VECTOR_COLLECTION_NAME } from "./vector-store/TEXT_VECTOR_COLLECTION_NAME";

// Main function to start the service
export const main = async () => {
  await getConnection();
  const flushIntervalSeconds = Number(getEnv().FLUSH_INTERVAL_SECONDS) ?? 5;
  console.log(`Flush interval is ${flushIntervalSeconds} seconds`);
  setInterval(flushAllObjectStores, flushIntervalSeconds * 1000);

  await initQdrantCollection(TEXT_VECTOR_COLLECTION_NAME);
};

export const initQdrantCollection = async (collection: string) => {
  const client = getQdrantClient();
  const exists = await client.collectionExists(collection);
  if (exists) {
    console.log(`Collection ${collection} already exists`);
    return;
  }
  await client.createCollection(collection, {
    vectors: {
      size: 768,
      distance: "Cosine",
    },
  });
};
