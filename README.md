# SaaS Workout

<div align="center" style="display: flex; justify-content: center; gap: 8px; flex-wrap: wrap;">
  <a href="https://pnpm.io" target="_blank">
    <img alt="pnpm" src="https://img.shields.io/badge/pnpm-230059?style=for-the-badge&logo=pnpm&logoColor=white" />
  </a>
  <a href="https://nestjs.com" target="_blank">
    <img alt="NestJS" src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" />
  </a>
  <a href="https://tanstack.com/start" target="_blank">
    <img alt="TanStack Start" src="https://img.shields.io/badge/TanStack-Start-FF4154?style=for-the-badge" />
  </a>
  <a href="https://tanstack.com/query" target="_blank">
    <img alt="TanStack Query" src="https://img.shields.io/badge/TanStack-Query-FF4154?style=for-the-badge" />
  </a>
  <a href="https://astro.build" target="_blank">
    <img alt="Astro" src="https://img.shields.io/badge/Astro-0B0D17?style=for-the-badge&logo=astro&logoColor=white" />
  </a>
  <a href="https://tailwindcss.com" target="_blank">
    <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  </a>
  <a href="https://ui.shadcn.com" target="_blank">
    <img alt="Shadcn-UI" src="https://img.shields.io/badge/Shadcn-UI-FF4785?style=for-the-badge" />
  </a>
  <a href="https://www.postgresql.org" target="_blank">
    <img alt="PostgreSQL" src="https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white" />
  </a>
  <a href="https://typeorm.io" target="_blank">
    <img alt="TypeORM" src="https://img.shields.io/badge/TypeORM-336791?style=for-the-badge&logo=typeorm&logoColor=white" />
  </a>
</div>

---

## About The Project

SaaS Workout is a platform designed for workout enthusiasts to connect, share, and track their fitness journey. Think of it as a dedicated Discord server, but supercharged with features specifically for fitness buffs. Whether you're a seasoned gym-goer or just starting out, this platform provides the tools and community to keep you motivated.

## Features

- **Community Driven:** Connect with other workout enthusiasts.
- **Track Progress:** Log your workouts and track your progress over time.
- **Share Workouts:** Share your favorite workout routines with the community.
- **Real-time Chat:** Discuss and share in real-time.

## Tech Stack

This project leverages a powerful and modern tech stack to deliver a seamless experience.

- **Monorepo:** [pnpm](https://pnpm.io)
- **Backend:** [NestJS](https://nestjs.com)
- **Frontend:** [React](https://react.dev), [TanStack Start](https://tanstack.com/start), [TanStack Query](https://tanstack.com/query), [Astro](https://astro.build)
- **Styling:** [Tailwind CSS](https://tailwindcss.com), [Shadcn-UI](https://ui.shadcn.com)
- **Database:** [PostgreSQL](https://www.postgresql.org), [TypeORM](https://typeorm.io)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

-   **Node.js:** v20.0.0 or higher
-   **pnpm:** v9.0.0 or higher

### Installation

1.  **Clone the repo:**
    ```sh
    git clone https://github.com/arpitv970/saas-workout.git
    cd saas-workout
    ```
2.  **Install dependencies:**
    ```sh
    pnpm install
    ```

### Usage

You can run all the apps concurrently or individually.

-   **Run all apps:**
    ```sh
    pnpm dev:all
    ```
-   **Run individual apps:**
    -   **Backend:** `pnpm dev:backend`
    -   **Main App:** `pnpm dev:app`
    -   **Marketing Website:** `pnpm dev:web`
    -   **Docs:** `pnpm dev:docs`

## Project Structure

This project is a monorepo managed with [pnpm workspaces](https://pnpm.io/workspaces), with the following structure:

-   `apps/app`: The main web application (React/TanStack Start).
-   `apps/backend`: The backend service (NestJS).
-   `apps/docs`: The documentation for the project (Astro with Starlight).
-   `apps/web`: The marketing website (Astro).

## Contributing

Contributions are welcome! Please see our [Contributing Guide](CONTRIBUTING.md) for more details.

## Roadmap

For a more detailed roadmap, see our [Notion page](https://www.notion.so/simple-notebook/Level-Up-Workout-tracker-1da567e4eb97805db2a1c875881999ca?source=copy_link).

But we do have some repo level things needed to be fixed asap!
- [ ] Implemenation of `Changeset`
- [ ] Using `Biome` as sole linter, formatter in single config across the project
- [ ] Templates for PRs, and Issues

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributors

A heartfelt thank you to all the amazing people who have contributed to this project. We appreciate your time and effort to make this project better.
