# Contributing to SaaS Workout

First off, thank you for considering contributing to SaaS Workout! It's people like you that make the open-source community such an amazing place to learn, inspire, and create.

## How Can I Contribute?

### Reporting Bugs

If you come across a bug, please open an issue on GitHub. Please include as much detail as possible, including steps to reproduce the bug. Before opening a new issue, please search existing issues to avoid duplicates.

### Suggesting Enhancements

If you have an idea for a new feature or an enhancement to an existing one, please open an issue on GitHub with the label "enhancement".

## Getting Started

### Prerequisites
- Node.js v18 or later
- pnpm v7 or later

### Setup
```bash
# Clone the repository
git clone https://github.com/arpitv970/saas-workout.git
cd saas-workout

# Install dependencies
pnpm install

# Build all packages
pnpm -r build
```

### Running the development servers

To start all the development servers at once, run:

```bash
pnpm run dev:all
```

This will start the backend, web, docs, and app servers concurrently.

## Development Workflow

### Building

After making code changes, you can build all packages by running:

```bash
pnpm -r build
```

This compiles TypeScript into `dist/` directories for each package.

#### Building a specific package

If you are working on a single package, you can build it individually. For example, to build the backend:

```bash
pnpm run build:backend
```

### Testing

Run the full test suite with:

```bash
pnpm -r test
```

#### Testing a specific package

To run tests for a specific package, you can use the scripts in the root `package.json`. For example, to run tests for the backend:

```bash
pnpm run test:backend
```

### Code style

- Maintain existing TypeScript style.
- Ensure that `pnpm -r build` completes without errors.
- Run `pnpm -r lint` to check formatting and unused imports.

## Submitting a Pull Request

1. Fork the repository and create a branch with a descriptive name (e.g., `fix/missing-error`, `feat/new-tool`).
2. Ensure your branch is up to date with `main`.
3. Make your changes, add or update tests, and ensure that:
   ```bash
   pnpm -r build && pnpm -r test && pnpm -r lint
   ```
4. Commit your changes using Conventional Commits (e.g., `feat:`, `fix:`, `docs:`).
5. Push your branch to your fork and open a pull request against the `main` branch.
6. In the pull request description, link any related issues and summarize your changes.

### Review process
- All pull requests require at least one approving review from a maintainer.
- Automated checks (build, test) must pass before merging.
- We use squash merging; each pull request results in a single commit on `main`.

## Styleguides

We use Prettier and ESLint to maintain a consistent code style. Please make sure your contributions adhere to the style guides by running `pnpm -r lint`.
