---
title: Security, Scalability, and Best Practices
---

* **Security**: Keep API keys server-side by design; if client needs short-lived tokens, mint them from the backend.
* **Encryption**: HTTPS/TLS for signaling; SRTP when possible for media.
* **Observability**: Trace requests across services; capture audio events and transcripts for auditing.
* **Testing**: Unit tests for TS package and adapters. E2E tests for orchestration (simulate real calls).
* **Scaling**: Containerize services; use autoscaling for orchestrator workers and media servers.

