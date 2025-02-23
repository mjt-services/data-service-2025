import {
  isChildObject,
  type DATA_EVENT_MAP,
  type UpdateSubject,
} from "@mjt-services/data-common-2025";
import { getConnection } from "../_connection";

export const publishUpdateEvent = async (value: unknown) => {
  if (!isChildObject(value)) {
    return;
  }
  const { parentId } = value;
  const con = await getConnection();
  con.publish<UpdateSubject, typeof DATA_EVENT_MAP>({
    payload: undefined,
    subject: `update.${parentId}`,
  });
};
