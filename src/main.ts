import { getConnection } from "./_connection";
import { getEnv } from "./getEnv";
import { flushAllObjectStores } from "./object-store/file/flushAllObjectStores";

// Main function to start the service
export const main = async () => {
  await getConnection();
  const flushIntervalSeconds = getEnv().FLUSH_INTERVAL_SECONDS ?? 5;
  console.log(`Flush interval is ${flushIntervalSeconds} seconds`);
  setInterval(flushAllObjectStores, flushIntervalSeconds * 1000);
};
