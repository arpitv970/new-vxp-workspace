// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import mermaid from "astro-mermaid";

// https://astro.build/config
export default defineConfig({
  integrations: [
    // Mermaid diagrams in markdown
    mermaid({
      theme: "base",
    }),

    // Starlight for docs-like experience
    starlight({
      title: "Architecture v2.0",
      description:
        "A collection of structured project blueprints and documentation.",
      sidebar: [
        {
          label: "Agentic Voice AI",
          items: [
            { label: "Agentic Voice AI", slug: "agentic-voice-ai" },
            {
              label: "Overview & Design Principles",
              slug: "agentic-voice-ai/overview-and-design-principles",
            },
            {
              label: "TS Package Wrapper",
              slug: "agentic-voice-ai/ts-package-client-side-wrapper",
            },
            {
              label: "Frontend Integration",
              slug: "agentic-voice-ai/frontend-integration",
            },
            {
              label: "Backend Architecture",
              slug: "agentic-voice-ai/backend-architecture",
            },
            {
              label: "Toggle Mechanisms & Adapters",
              slug: "agentic-voice-ai/toggle-mechanisms-and-adapters",
            },
            {
              label: "Knowledge Base Implementation",
              slug: "agentic-voice-ai/knowledge-base-implementation",
            },
            {
              label: "Realtime & Low-Latency",
              slug: "agentic-voice-ai/realtime-and-low-latency-considerations",
            },
            {
              label: "SIP & WebRTC Integration",
              slug: "agentic-voice-ai/sip-and-webrtc-integration",
            },
            {
              label: "Workflow Orchestration",
              slug: "agentic-voice-ai/workflow-orchestration-react-flow--langchainlanggraph",
            },
            {
              label: "Security & Scalability",
              slug: "agentic-voice-ai/security-scalability-and-best-practices",
            },
            {
              label: "Overall Architecture",
              slug: "agentic-voice-ai/overall-architecture",
            },
            {
              label: "Implementation References",
              slug: "agentic-voice-ai/implementation-references-and-resources",
            },
            {
              label: "Actionable Next Steps",
              slug: "agentic-voice-ai/actionable-next-steps--todos",
            },
          ],
        },
      ],

      // Enable Prev/Next navigation at bottom of each page
      pagination: true,
    }),
  ],
});
