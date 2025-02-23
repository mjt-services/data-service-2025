import { getConnection } from "./_connection";

// Main function to start the service
export const main = async () => {
  await getConnection();
};
