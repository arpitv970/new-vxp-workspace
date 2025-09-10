---
title: Backend Architecture
---


All authoritative logic lives here.

### Key services

* **AI Orchestration** — central coordinator (decides GPT-Realtime vs custom pipeline).
* **STT/TTS Adapters** — provider-agnostic wrapper to route audio <-> text.
* **Knowledge Base** — ingestion, embeddings, vector store, retriever (RAG).
* **Tracing & Logging** — save transcripts, events, and spans to Postgres/Elasticsearch.
* **Signaling Service** — WebSocket or Redis-based signaling for custom WebRTC mode.

### Persistence & Pub/Sub

* Postgres for structured data (conversations, sessions).
* Vector DB (Pinecone, Milvus) for embeddings.
* Redis Pub/Sub for realtime notifications and signaling when needed.

