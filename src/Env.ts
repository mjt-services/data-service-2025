export type Env = Partial<{
  NATS_URL: string;
  NATS_AUTH_TOKEN: string;
  FLUSH_INTERVAL_SECONDS: string;
  DATA_PATH: string;
  QDRANT_URL: string;
}>;
