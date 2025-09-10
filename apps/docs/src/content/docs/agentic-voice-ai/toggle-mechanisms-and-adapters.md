---
title: Toggle Mechanisms and Adapters
---


* **Transport toggle** is client-configurable; the backend remains the single source of truth for behavior.
* **AI Mode toggle (`aiMode`)** switches between:

  * **`gpt-realtime`**: use OpenAI Realtime for streaming LM responses (no custom STT/TTS required).
  * **`custom`**: STT -> LLM orchestration -> TTS pipeline.

### Adapter Pattern (example)

```ts
@Injectable()
class STTService {
  constructor(private config: ConfigService) {}
  async transcribe(audio: Buffer): Promise<string> {
    switch (this.config.get('sttProvider')) {
      case 'deepgram':
        // call Deepgram SDK
      case 'whisper':
        // call self-hosted whisper endpoint
    }
  }
}
```

Adapters allow safe swapping of providers without changing orchestration logic.

