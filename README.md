# [MJT Services](https://github.com/mjt-services) Data Service 2025

This service provides a data service for the MJT Services platform. It is based on [@mjt-engine/idb](https://github.com/mjt-engine/idb) in terms of interface design, which itself is a wrapper around the [IndexedDB API](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API).

## Environment Configuration

The `.env` file is used to configure environment variables for the project. You should create a `.env` file in the root directory of the project. You can use the following example as a template:

```properties
IMAGE_TAG=mjtdev/data:latest
NAME=data
NETWORK_NAME=mq_network
NATS_URL=ws://mq:9222
NATS_AUTH_TOKEN=<your_nats_auth_token_here>
```

Make sure to replace `your_nats_auth_token_here` with your actual NATS authentication token.


For detailed documentation, please visit the [project documentation](https://mjt-services.github.io/data-service-2025/).