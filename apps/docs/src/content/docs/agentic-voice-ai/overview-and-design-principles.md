---
title: Overview and Design Principles
order: 2
---
 This architecture resolves vendor lock-in and latency trade-offs by introducing a small, **NPM-publishable TS package** that acts as a client-side provider. It exposes a single, consistent API while allowing two transport modes:

* `openai` — uses OpenAI's Realtime transport layer (thin client) for PCM16 audio streams and interruption handling.
* `customrtc` — uses native WebRTC (RTCPeerConnection + signaling) with your backend as the orchestrator.

Core principles:

* **Modularity**: Config-driven toggles for transport (`'openai' | 'customrtc'`) and AI mode (`'gpt-realtime' | 'custom'`).
* **Backend control**: All agent business logic (prompts, orchestration, tracing) lives in NestJS.
* **Low latency**: Direct peer connections where possible, edge-deployed pub/sub, and careful signaling.
* **Pluggable adapters** for STT/TTS and vector stores for RAG.
