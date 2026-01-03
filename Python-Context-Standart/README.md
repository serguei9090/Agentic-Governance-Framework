# **Python Agent Context Standard**

**Status:** 🚧 Beta (Reflex/Ansible Optimized)
**Version:** 1.0.0
**Architect:** Antigravity Agent

## **Overview**

This repository contains the **Python Standard** for initializing AI-driven software projects, specifically optimized for **Reflex (Web)** and **Ansible (Automation)** workflows.

It mirrors the governance level of the React standard but adapts the toolchain for the Python ecosystem (Ruff, MyPy, Pytest, Playwright).

## **Core Capabilities**

1.  **Strict Governance:** Agents cannot write code without checking `agentContext.md` first.
2.  **Uncompromising Type Safety:** Enforces strict `MyPy` checks to prevent runtime errors.
3.  **Reflex UI Patterns:** Pre-defined Atomic Design structures for building pure-Python web apps.
4.  **Operational:** Includes "Agentic Workflows" for Releases and Security Audits.

## **Quick Start**

To apply this governance to a new project:

1.  Copy the `AgentSetUpProject` folder to your new repo.
2.  Run the Agent Directive: "Initialize Project Context using `AgentSetUpProject/agentContext.md`".
3.  The Agent will scaffold your `.agent/rules/` and file structure automatically.

## **Reference Implementation**

*   **[Project Spec: Reflex Ansible Manager](ReflexAnsibleProject.md)** - A sample project definition demonstrating how to build an Ansible Management UI using this standard.
