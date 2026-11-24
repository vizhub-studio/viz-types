# viz-types

[![npm version](https://img.shields.io/npm/v/@vizhub/viz-types)](https://www.npmjs.com/package/@vizhub/viz-types)
[![CI](https://github.com/vizhub-studio/viz-types/actions/workflows/ci.yml/badge.svg)](https://github.com/vizhub-studio/viz-types/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Shared TypeScript types for the VizHub ecosystem. No runtime dependencies or runtime API.

## Installation

```sh
npm install @vizhub/viz-types
```

## Usage

```ts
import type { VizContent } from "@vizhub/viz-types";

const content: VizContent = {
  id: "example",
  files: {
    file1: {
      name: "index.html",
      text: "<body>Hello</body>",
    },
  },
};
```

## Public types

The authoritative declarations are in [src/index.ts](src/index.ts).

| Type                               | Purpose                                        |
| ---------------------------------- | ---------------------------------------------- |
| `FileCollection`                   | File names mapped to text content              |
| `VizFileId`, `VizFile`, `VizFiles` | Stable file IDs, file records, and collections |
| `VizId`                            | Visualization identifier                       |
| `VizLicense`                       | License identifier (SPDX convention)           |
| `VizTimestamp`                     | Unix timestamp in seconds                      |
| `VizChatId`, `VizChatMessageId`    | Chat and message identifiers                   |
| `VizChatMessageRole`               | `"user"` or `"assistant"`                      |
| `VizChatMessage`                   | Role, content, timestamp, and optional ID      |
| `VizChat`, `VizChats`              | Chat history, metadata, and collections        |
| `VizContent`                       | Visualization content and optional metadata    |

File collection keys in `VizFiles` are stable IDs, not filenames or array indices. This simplifies operational transformation with ShareDB when files are renamed or deleted.

`VizChat` includes optional `aiScratchpad`, `aiStatus`, and `currentChatDraft` fields. `VizContent` includes optional `title`, `height`, `license`, `isInteracting`, `runId`, and `chats` fields.

## Development

Use Node.js 22, 24, or 26 and npm.

```sh
npm ci
npm run format:check
npm run typecheck
npm test
npm run build
npm pack --dry-run
```

Run `npm run format` to apply formatting. Tests are compile-time contract fixtures, not runtime tests. GitHub Actions runs the checks on pull requests and pushes to main.

## Compatibility and releases

The package emits CommonJS JavaScript at `dist/index.js` and TypeScript declarations at `dist/index.d.ts`. All public exports are types; use `import type`. Keep the existing entry points and exported contracts compatible unless a deliberate breaking change is planned.

Before releasing, verify the package contents and test a consumer such as [viz-utils](https://github.com/vizhub-studio/viz-utils) using the packed tarball. For changes that warrant an npm release, bump the version using semantic versioning, publish with npm, and create a corresponding GitHub release. CI does not publish automatically.

## License

[MIT](LICENSE).
