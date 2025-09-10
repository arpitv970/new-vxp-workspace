---
title:  TS Package (Client-Side Wrapper)
---

This package is the thin client used by your Next.js app (or any web client). It should provide:

* Initialization with a `VoiceSDKConfig`.
* A unified API for mic input, playback, interruptions, and realtime events.
* Pub/sub or WebSocket hooks for signaling and session updates.

### Example config interface

```ts
export interface VoiceSDKConfig {
  transportMode: 'openai' | 'customrtc';
  aiMode?: 'gpt-realtime' | 'custom';
  backendUrl: string; // for signaling / control calls
  apiKey?: string; // only used in openai mode (client-limited)
  pubSubChannel?: string; // optional
  sttProvider?: string; // optional in custom mode
  ttsProvider?: string; // optional in custom mode
}
```

### Responsibilities

* In **OpenAI** mode, instantiate the OpenAI Realtime transport (see docs) and forward audio chunks as PCM16.
* In **Custom** mode, use `navigator.mediaDevices.getUserMedia`, `RTCPeerConnection`, and a signaling channel (WebSocket/Redis-backed). Manage ICE candidates and data channels for events/interruptions.
* Emit events to your React UI for UX (VUs, waveform, transcription updates).

