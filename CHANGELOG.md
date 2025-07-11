# Changelog


## 2025-07-11
- bump deps, handle room udpates more gracefully to stop potential endless responses from daimons ([d86d554](https://github.com/mjt-services/data-service-2025/commit/d86d5540ee6dc0d076f3ec96cd5906849aa08dc6)) by user

## 2025-06-03
- read env from parent ([1ac2ea4](https://github.com/mjt-services/data-service-2025/commit/1ac2ea46f0caef50a14f9021ea4e1d2ad5c8996d)) by user
- convert to docker compose ([fba3444](https://github.com/mjt-services/data-service-2025/commit/fba3444e2ef4a943ecff49ea803f78a07bb1ae63)) by user

## 2025-03-27
- fixed bug in qdrant collection init exist check ([8ad20af](https://github.com/mjt-services/data-service-2025/commit/8ad20af3111163aa14b3603608440450fce91394)) by Matt Taylor
- vector put/search operation impl ([d430caf](https://github.com/mjt-services/data-service-2025/commit/d430cafcac3fa479a4d14d7567b93fd22b53b3d2)) by Matt Taylor

## 2025-03-26
- added vector operations ([70ef6e3](https://github.com/mjt-services/data-service-2025/commit/70ef6e349c5fe41e41b8e047d411dfdc811f556f)) by Matt Taylor

## 2025-03-16
- remove the swizzle migration code to stop double-swizzle ([5d13bdc](https://github.com/mjt-services/data-service-2025/commit/5d13bdce7ebb397e20fe347cd4f8aea700eee580)) by Matt Taylor
- fixed issues with data storage, all binary data now swizzeled ([be48345](https://github.com/mjt-services/data-service-2025/commit/be4834521a935e9de9a4de149bd9e05498fb3aa9)) by Matt Taylor
- byte stores and swizzling ([26c74e9](https://github.com/mjt-services/data-service-2025/commit/26c74e912efd473647360d4d4bee76dd9d495b8e)) by Matt Taylor

## 2025-03-06
- in-mem cache for data-maps, flushed to disk on interval ([bd32bf7](https://github.com/mjt-services/data-service-2025/commit/bd32bf710fc5017108a99cf02786ee9a36d76c30)) by Matt Taylor

## 2025-03-03
- temp files for writes to ensure consistent reads ([5dce271](https://github.com/mjt-services/data-service-2025/commit/5dce27172f8bcb8b71d6ab38e34823114b7370b0)) by Matt Taylor
- temp files for writes to ensure consistent reads ([f78fc28](https://github.com/mjt-services/data-service-2025/commit/f78fc285107870cc36e442a0776edf16c9a7cefd)) by Matt Taylor
- fix bug in update events WRT object events ([79f785d](https://github.com/mjt-services/data-service-2025/commit/79f785de876388792809aa3b35147b2a0b019490)) by Matt Taylor
- added update events for child/object update ([3731ec1](https://github.com/mjt-services/data-service-2025/commit/3731ec1397ade990d5d3e6c2f09e28663dae8d25)) by Matt Taylor
- added Entity type ([34d56ab](https://github.com/mjt-services/data-service-2025/commit/34d56abcd001e560b67ec1b6830002f86fb5c74a)) by Matt Taylor

## 2025-02-23
- bump deps to get stronger ChildObject typeguard ([4a6fa29](https://github.com/mjt-services/data-service-2025/commit/4a6fa29862d724564f68d983bf8572d36780f1d4)) by Matt Taylor
- bump-deps ([e614a50](https://github.com/mjt-services/data-service-2025/commit/e614a5065cd40fa9340d9ba115b8bc16c8536bd4)) by Matt Taylor
- publish update event on data.remove operation ([082a61e](https://github.com/mjt-services/data-service-2025/commit/082a61e77682ad473fec05cc6bf883ab59650677)) by Matt Taylor
- addition of update event publishing ([5ac3fce](https://github.com/mjt-services/data-service-2025/commit/5ac3fce7da76e2a62c82866e4f95ce6c9eea5b87)) by Matt Taylor

## 2025-02-21
- bump mjt-engine/message ([8ce2187](https://github.com/mjt-services/data-service-2025/commit/8ce21876bdc1728c94b830f1d3507d634be019b2)) by Matt Taylor
- bump mjt-engine/message ([9d3a9e5](https://github.com/mjt-services/data-service-2025/commit/9d3a9e5b85d895e0018d641c742144e6a0db2038)) by Matt Taylor

## 2025-02-20
- bump data-common dep ([394a713](https://github.com/mjt-services/data-service-2025/commit/394a71303a1e5db7a5e8fd5e9e4f90fa21fe5d9f)) by Matt Taylor

## 2025-02-18
- empty same as undefined for query ([7e8fd25](https://github.com/mjt-services/data-service-2025/commit/7e8fd25ecc69c2e0609d8983ea2836734bdd7da3)) by Matt Taylor

## 2025-02-17
- bump data-common ([4db875e](https://github.com/mjt-services/data-service-2025/commit/4db875e69a1e8049bab558ebf269736885d0cc43)) by Matt Taylor

## 2025-02-16
- various fixes to search and put operations ([56f29ca](https://github.com/mjt-services/data-service-2025/commit/56f29ca2ec7cd5031d7c15bb63132ca9f49b22d5)) by Matt Taylor

## 2025-02-15
- bump data-common to fix id parser ([04476d3](https://github.com/mjt-services/data-service-2025/commit/04476d3811e3329f22152b137b4a3238351c80d2)) by Matt Taylor

## 2025-02-14
- update run for prod ([92b280f](https://github.com/mjt-services/data-service-2025/commit/92b280fce9de181fa415d0b267e8490668e77c5f)) by Matt Taylor
- fix bad import ([e126074](https://github.com/mjt-services/data-service-2025/commit/e1260749beee4cf31367a5c200fd2bf315d2e7a2)) by Matt Taylor
- reworked operation implementations to make objectStore optional ([9c93eb0](https://github.com/mjt-services/data-service-2025/commit/9c93eb0dddb5d1cf966536820b2e3f29eb408227)) by Matt Taylor
- bump data-common to get udpated id functions ([94692fd](https://github.com/mjt-services/data-service-2025/commit/94692fde622e86725808e1b566d7a9c74658bf8c)) by Matt Taylor
- rework of data-service operations to allow for better search ([fc8130c](https://github.com/mjt-services/data-service-2025/commit/fc8130c68a17184e088a4d9ebd376542eb539089)) by Matt Taylor

## 2025-02-02
- remove dep on IDBKeyRange object ([e28fb0d](https://github.com/mjt-services/data-service-2025/commit/e28fb0d2d43a00e61b2c3ec3246607c5680ef079)) by Matt Taylor
- removed data.add ([894a3ff](https://github.com/mjt-services/data-service-2025/commit/894a3ffa4caa31a33839d06bbeb8ca6c2f512834)) by Matt Taylor
- added data dir to gitignore ([2d7889f](https://github.com/mjt-services/data-service-2025/commit/2d7889f3d8eb3f61173725ac5dd5d272c6b3cb60)) by Matt Taylor
- fix fs import issues ([eac2815](https://github.com/mjt-services/data-service-2025/commit/eac2815fc7538ffd433466d3ab0d53a4d4c3cf7d)) by Matt Taylor
- connect listeners to MQ subjects ([21413c3](https://github.com/mjt-services/data-service-2025/commit/21413c39d7c4b33bbb401bf3b6e8e4dce70d0485)) by Matt Taylor
- initial-commit ([7e7532f](https://github.com/mjt-services/data-service-2025/commit/7e7532f6b980d440f12d70bbe42a5f06b22eb0fe)) by Matt Taylor
