---
title: SIP and WebRTC Integration
---

* Use **Plivo** (or other SIP trunks) to bridge from PSTN to WebRTC in India.
* Route incoming SIP calls -> Plivo -> your signaling service -> WebRTC peer or orchestrator.

Notes:

* Ensure RTCP and codecs alignment (PCM16/L16 is common with realtime LMs).
* Compliance & local telephony regulations should be verified for your target regions.

