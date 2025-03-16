export type Env = Partial<{
  NATS_URL: string;
  NATS_AUTH_TOKEN: string;
  FLUSH_INTERVAL_SECONDS: number;
  DATA_PATH: string;
}>;
