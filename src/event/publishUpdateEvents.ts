import {
  isChildObject,
  isEntity,
  type ChildUpdateSubject,
  type DATA_EVENT_MAP,
  type ObjectUpdateSubject,
  type UpdateSubject,
} from "@mjt-services/data-common-2025";
import { getConnection } from "../_connection";

export const publishUpdateEvents = async (value: unknown) => {
  if (!isChildObject(value)) {
    return;
  }
  const { parentId } = value;
  const con = await getConnection();

  // TODO  remove deprecated update event
  con.publish<UpdateSubject, typeof DATA_EVENT_MAP>({
    payload: undefined,
    subject: `update.${parentId}`,
  });
  con.publish<ChildUpdateSubject, typeof DATA_EVENT_MAP>({
    payload: undefined,
    subject: `child_update.${parentId}`,
  });
  if (!isEntity(value)) {
    return;
  }
  const { id } = value;
  con.publish<ObjectUpdateSubject, typeof DATA_EVENT_MAP>({
    payload: undefined,
    subject: `object_update.${id}`,
  });
};
