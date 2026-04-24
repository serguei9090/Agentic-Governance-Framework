# **Enterprise Universal AI-Agent Boilerplate**

**Status:** Production Ready
**Version:** 3.0.0
**Architect:** Antigravity Agent

## **Overview**
This repository contains the **Golden Standard** for initializing AI-driven software projects, regardless of the programming language or framework. It is a "Governance Engine" that ensures any AI Agent working on the project adheres to strict Enterprise Standards.

## **Core Capabilities**
1.  **Strict Governance:** Agents cannot write code without checking `agentContext.md` first.
2.  **Enterprise Frameworks:** Integrated Frameworks tailored via placeholders to the host project's tech stack.
3.  **Self-healing:** Includes "ProDoc" protocols for self-maintaining documentation.
4.  **Operational:** Includes "Agentic Workflows" for Hotfixes, Releases, Audits, Issue Writing, and Skill Creation.
5.  **Language Agnostic:** Uses placeholders (`[PKG_MANAGER]`, `[LINTER]`, `[TEST_RUNNER]`) that are resolved upon initialization.

## **Quick Start**
To apply this governance to a new project:

1.  Copy the `AgentSetUpProject` folder to your new repo.
2.  **Review the Checklist:** Open `startAgentProjectSetUp.md` and check/uncheck optional protocols.
3.  Run the Agent Directive: "Initialize Project Context using `AgentSetUpProject/agentContext.md`". Provide your technology stack details to the agent.
4.  The Agent will scaffold your `.agent/rules/` and file structure automatically, resolving all placeholders.
