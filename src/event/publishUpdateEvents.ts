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
  const con = await getConnection();
  if (isEntity(value)) {
    const { id } = value;
    con.publish<ObjectUpdateSubject, typeof DATA_EVENT_MAP>({
      payload: value,
      subject: `object_update.${id}`,
    });
  }
  if (isChildObject(value)) {
    const { parentId } = value;
    // TODO  remove deprecated update event
    con.publish<UpdateSubject, typeof DATA_EVENT_MAP>({
      payload: undefined,
      subject: `update.${parentId}`,
    });
    con.publish<ChildUpdateSubject, typeof DATA_EVENT_MAP>({
      payload: undefined,
      subject: `child_update.${parentId}`,
    });
  }
};
