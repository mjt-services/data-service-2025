import { getQdrantClient } from "./vector-store/getQdrantClient";

export const initQdrantCollection = async (collection: string) => {
  const client = getQdrantClient();
  const exists = await client.collectionExists(collection);

  if (exists) {
    console.log(`Collection ${collection} already exists`);
    return;
  }
  console.log(`Creating collection ${collection}`);
  await client.createCollection(collection, {
    vectors: {
      size: 768,
      distance: "Cosine",
    },
  });
};
