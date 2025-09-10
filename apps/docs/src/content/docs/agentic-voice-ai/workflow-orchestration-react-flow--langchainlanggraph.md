---
title: Workflow Orchestration (React Flow + LangChain/LangGraph)
---

* **React Flow**: UX for building graphs.
* **LangGraph / LangChain**: Run graph-based flows on backend when in custom mode.
* Nodes map to tools/adapters (DB query, web search, KB retrieval, call external APIs).

Example flow:

`[Trigger] -> [Speech-to-Text] -> [Retriever(RAG)] -> [LLM Decision Node] -> [TTS] -> [Output]`

