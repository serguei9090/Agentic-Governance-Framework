# Relations & Dependencies

## Architecture Map

```mermaid
graph TD
    subgraph UI [packages/ui]
        Tokens[Design Tokens] --> Primitives[Primitive Components]
        Primitives --> Features[Feature Layouts]
    end

    subgraph Core [packages/core]
        Services[Business Services] --> Logic[Pure Logic/Utils]
        Features --> Services
    end

    subgraph Backend [External]
        Services --> API[REST/GraphQL API]
        API --> DB[(Database)]
    end
```

## Boundaries
1.  **UI Layer:** NEVER communicates directly with the Database.
2.  **UI Layer:** SHOULD minimize direct API calls; prefer routing through Core Services.
3.  **Core Layer:** Should be UI-agnostic (no React imports if possible, plain TS/JS).
