import type { ConnectionListener } from "@mjt-engine/message";
import type { DataConnectionMap } from "@mjt-services/data-common-2025";
import { dataPutListener } from "./dataPutListener";

export const dataAddListener: ConnectionListener<
  DataConnectionMap,
  "data.add"
> = async (props) => {
  return dataPutListener(props);
};
