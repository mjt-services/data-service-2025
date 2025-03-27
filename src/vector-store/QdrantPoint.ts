
export type QdrantPoint = {
  id: string | number;
  vector: number[];
  payload: Record<string, unknown> |
  { [key: string]: unknown; } |
  null |
  undefined;
};
