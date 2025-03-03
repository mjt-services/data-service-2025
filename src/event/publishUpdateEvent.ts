import {
  isChildObject,
  type ChildUpdateSubject,
  type DATA_EVENT_MAP,
  type ObjectUpdateSubject,
  type UpdateSubject,
} from "@mjt-services/data-common-2025";
import { getConnection } from "../_connection";

export const publishUpdateEvent = async (value: unknown) => {
  if (!isChildObject(value)) {
    return;
  }
  const { parentId, id } = value;
  const con = await getConnection();
  con.publish<UpdateSubject, typeof DATA_EVENT_MAP>({
    payload: undefined,
    subject: `update.${parentId}`,
  });
  con.publish<ChildUpdateSubject, typeof DATA_EVENT_MAP>({
    payload: undefined,
    subject: `child_update.${parentId}`,
  });
  con.publish<ObjectUpdateSubject, typeof DATA_EVENT_MAP>({
    payload: undefined,
    subject: `object_update.${value}`,
  });
};
