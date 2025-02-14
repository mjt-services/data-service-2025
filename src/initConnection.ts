import { Messages } from "@mjt-engine/message";
import type { Env } from "./Env";

import { assertValue } from "@mjt-engine/assert";
import type { DataConnectionMap } from "@mjt-services/data-common-2025";
import { getEnv } from "./getEnv";
import { dataGetListener } from "./listener/dataGetListener";
import { dataGetManyListener } from "./listener/dataGetManyListener";
import { dataPutListener } from "./listener/dataPutListener";
import { dataRemoveListener } from "./listener/dataRemoveListener";
import { dataSearchListener } from "./listener/dataSearchListener";

export const initConnection = async () => {
  const env = getEnv();
  const url = assertValue(env.NATS_URL);
  console.log("NATS_URL", url);

  await Messages.createConnection<DataConnectionMap, Env>({
    subscribers: {
      "data.get": dataGetListener,
      "data.getMany": dataGetManyListener,
      "data.search": dataSearchListener,
      "data.put": dataPutListener,
      "data.remove": dataRemoveListener,
    },
    options: { log: console.log },
    server: [url],
    token: env.NATS_AUTH_TOKEN,
    env,
  });
  console.log("initConnection: init complete");
};
