import { Messages } from "@mjt-engine/message";
import type { Env } from "./Env";

import { assertValue } from "@mjt-engine/assert";
import { getEnv } from "./getEnv";
import { dataAddListener } from "./listener/dataAddListener";
import { tunnelRemoveListener } from "./tunnelRemoveListener";
import { tunnelResolveListener } from "./tunnelResolveListener";
import type { DataConnectionMap } from "@mjt-services/data-common-2025";

export const initConnection = async () => {
  const env = getEnv();
  const url = assertValue(env.NATS_URL);
  console.log("NATS_URL", url);

  await Messages.createConnection<DataConnectionMap, Env>({
    subscribers: {
      "data.add": dataAddListener,
      // "tunnel.remove": tunnelRemoveListener,
      // "tunnel.resolve": tunnelResolveListener,
    },
    options: { log: console.log },
    server: [url],
    token: env.NATS_AUTH_TOKEN,
    env,
  });
  console.log("initConnection: init complete");
};
