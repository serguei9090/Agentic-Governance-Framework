# AGENTS.md: The Source of Truth for Antigravity

This document serves as the absolute source of truth for all Agentic behaviors, rules, and capabilities within the Antigravity framework. 

## 1. The Triad
- **Antigravity**: The Orchestrator. Manages context, directs flow, and maintains architectural integrity.
- **Gemini CLI**: The Surgeon. Executes high-speed local edits (`@lint-agent`, `@doc-agent`, etc.).
- **Jules CLI**: The Autonomous Engineer. Handles deep refactorings and asynchronous tasks remotely.

## 2. Mandatory Protocols
- **The HAL Protocol**: Every session MUST verify the Hardware Abstraction Layer (`agents.yaml` and `scripts/hal-check.ps1`) before executing core workflows.
- **The TODO Protocol**: Any missing logic MUST be tracked using the `TODO(ID)` syntax and documented in `docs/TODOC/<ID>.md`.
- **The Telemetry Protocol**: All major autonomous actions must be logged in `docs/track/telemetry.csv` to enable `/self-evolve`.

## 3. Physical State & Tracking
State persistence is physically maintained in the following locations. If these files are missing, the framework is compromised.
- **Active Tasks**: `docs/track/TODO.md`
- **Jules Remote Tasks**: `docs/track/JULES.md`
- **Architectural Brain**: `docs/TODOC/`

*This file is monitored by the Code Gap Reviewer to prevent Architectural Drift.*
