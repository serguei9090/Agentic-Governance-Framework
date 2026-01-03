# **AGENT DIRECTIVE: SECURITY FRAMEWORK (SEC-v1)**

TARGET AUDIENCE: AI Agents, Security Engineers, DevOps  
OBJECTIVE: Enforce a "Shift Left" security posture to detect vulnerabilities (CVEs), hardcoded secrets, and insecure code patterns BEFORE deployment.  
CONSTRAINT: Use only Free & Open Source (FOSS) tools.

## **1\. THE APPROVED TOOLCHAIN**

You are authorized to use only the following tools to enforce the Security Standard.

| Layer | Tool | Purpose |
| :---- | :---- | :---- |
| **Secrets Detection** | **Gitleaks** | Prevents API keys, tokens, and passwords from entering git history. |
| **SCA (Dependencies)** | **Trivy** | Scans package.json/node\_modules for known CVEs. |
| **SAST (Code Logic)** | **Semgrep (OSS)** | Scans source code for security weaknesses (e.g., SQLi, XSS, Eval). |
| **Container Security** | **Trivy** | Scans Docker images for OS-level vulnerabilities. |

## **2\. PROTOCOL A: THE PRE-COMMIT SHIELD (Local)**

**Directives:**

1. NO secrets (API keys, credentials) shall ever be committed.  
2. Developers MUST be warned immediately if they write insecure code patterns.  
3. Integration is enforced via lefthook.

### **2.1 Configuration: Secret Protection**

Install gitleaks and configure the hook. Gitleaks scans the *staged changes* to ensure no secrets are being added.

**Update lefthook.yml (Security Section):**

pre-commit:  
  parallel: true  
  commands:  
    \# ... (Keep existing lint/format commands) ...

    \# 1\. SECRET SCANNING (Blocking)  
    secrets:  
      run: gitleaks protect \--staged \--verbose \--redact

    \# 2\. SAST (Fast Security Checks)  
    security-code:  
      glob: "\*.{js,ts,jsx,tsx}"  
      \# Scans only changed files for security patterns  
      run: semgrep scan \--config=p/security-audit \--error {staged\_files}

### **2.2 Semgrep Configuration**

Semgrep is faster than SonarQube for security-specific checks. No complex config file is needed; it pulls standard rulesets from the registry (or local cache).

* **Action:** Ensure Semgrep is installed (pip install semgrep or brew install semgrep).

## **3\. PROTOCOL B: THE PIPELINE GATES (CI/CD)**

**Directives:**

1. The build MUST fail if Critical or High vulnerabilities are detected in dependencies.  
2. The build MUST fail if the Docker image contains OS-level vulnerabilities.

### **3.1 Dependency Scanning (SCA)**

Use **Trivy** in "filesystem" mode to scan the repository.

**Command:**

\# Scans project, ignores low/medium issues, FAILS on CRITICAL/HIGH  
trivy fs . \\  
  \--scanners vuln,config \\  
  \--severity HIGH,CRITICAL \\  
  \--ignore-unfixed \\  
  \--exit-code 1

### **3.2 Container Scanning**

Before pushing a Docker image to a registry, it must be scanned.

**Command:**

\# Build the image first  
docker build \-t my-app:latest .

\# Scan the binary artifact  
trivy image my-app:latest \\  
  \--severity HIGH,CRITICAL \\  
  \--ignore-unfixed \\  
  \--exit-code 1

## **4\. PROTOCOL C: SECURITY METRICS & THRESHOLDS**

The Agent must enforce the following strict thresholds.

| Metric | Threshold | Action |
| :---- | :---- | :---- |
| **Hardcoded Secrets** | **0 (Zero)** | **Immediate Reject.** Revoke any leaked keys immediately. |
| **Critical CVEs** | **0 (Zero)** | **Blocking.** Must upgrade dependency or apply patch. |
| **High CVEs** | **0 (Zero)** | **Blocking.** Must upgrade dependency. |
| **Medium/Low CVEs** | **Review** | Non-blocking, but must be logged in Technical Debt. |
| **SAST Findings** | **0 High Severity** | **Blocking.** Code logic (e.g., dangerouslySetInnerHTML) must be fixed. |

## **5\. EXECUTION SUMMARY**

To implement the Security Framework, execute the following:

\# 1\. Install Tools (Mac/Linux examples)  
brew install gitleaks trivy semgrep

\# OR via NPM/Pip where available  
\# pip install semgrep

\# 2\. Update Lefthook  
\# (Add the YAML block from Section 2.1 to your existing lefthook.yml)

\# 3\. Validation Run (Manual Baseline Scan)  
\# Check for secrets currently in history (Run once)  
gitleaks detect \-v

\# Check for existing CVEs  
trivy fs .

### **6\. EXCEPTION HANDLING (The "Break Glass" Procedure)**

If a vulnerability is a "False Positive" or cannot be fixed (e.g., no patch available):

1. **Trivy:** Create a .trivyignore file.  
   \# CVE-2023-XXXX: No patch available, mitigated by firewall  
   CVE-2023-XXXX

2. **Gitleaks:** Create a .gitleaksignore file containing the specific fingerprint of the false positive.  
3. **Semgrep:** Add a comment above the line of code:  
   // nosemgrep: rule-id-here  
   const specificLogic \= ...

**ALL EXCEPTIONS REQUIRE WRITTEN JUSTIFICATION.**