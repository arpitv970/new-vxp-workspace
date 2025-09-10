---
title: Realtime and Low-Latency Considerations
---

* Prefer **direct peer connections** for audio when possible; use TURN only when necessary.
* Deploy Pub/Sub (Redis) closer to your clients (edge or regional replicas).
* Avoid extra hops: only route control through backend; allow audio RTP to flow peer-to-peer or through optimized media servers.
* **Interruption handling**:

  * OpenAI mode: rely on SDK's interruption primitives.
  * Custom mode: data channel or pub/sub signals to stop/start TTS and adjust context.

