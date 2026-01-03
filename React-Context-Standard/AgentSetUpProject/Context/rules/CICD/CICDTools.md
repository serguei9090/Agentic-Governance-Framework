# **CI/CD Infrastructure Manifest**

**Instructions for the Agent:**
Read this file to understand the Target Operational Environment. Only generate pipeline code for checked `[x]` items.

## **0. The Master Switch**
(Select ONE only)
- [ ] **Level 0: NONE** (Standalone / Local only)
- [ ] **Level 1: CI ONLY** (Linting + Tests checks)
- [ ] **Level 2: FULL CI/CD** (Build + Deploy)

---

## **1. Containerization & Build**
- [ ] **Docker** (`Dockerfile` + `.dockerignore`)
- [ ] **Podman**
- [ ] **Mobile** (React Native / Expo EAS)
- [ ] **Desktop** (Electron Builder / Tauri)

## **2. Orchestration (The Runner)**
- [ ] **GitHub Actions** (`.github/workflows`)
- [ ] **GitLab CI** (`.gitlab-ci.yml`)
- [ ] **Jenkins** (`Jenkinsfile`)
- [ ] **Azure DevOps** (`azure-pipelines.yml`)

## **3. Deployment Target (If Level 2)**
- [ ] **Kubernetes** (Helm Charts)
- [ ] **AWS ECS / Fargate**
- [ ] **Vercel / Netlify** (Static Web)
- [ ] **Google Play / Apple App Store** (Mobile)
- [ ] **On-Premise / VPS** (SSH + SCP)

## **4. Observability**
- [ ] **Prometheus + Grafana**
- [ ] **Datadog**
- [ ] **ELK Stack**
- [ ] **Sentry** (Error Tracking)
