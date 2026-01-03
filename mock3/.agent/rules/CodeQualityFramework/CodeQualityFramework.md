# **AGENT DIRECTIVE: CODE QUALITY FRAMEWORK (CQF-v1)**

TARGET AUDIENCE: AI Agents, DevOps Engineers, Senior Developers  
OBJECTIVE: Enforce enterprise-grade code maintainability, reduce cyclomatic complexity, and standardize output without external security tools.  
CONSTRAINT: Use only Free & Open Source (FOSS) tools.

## **1\. THE APPROVED TOOLCHAIN**

You are authorized to use only the following tools to enforce the Quality Standard.

| Layer | Tool | Configuration Strategy |
| :---- | :---- | :---- |
| **Logic & Bugs** | **ESLint** \+ **eslint-plugin-sonarjs** | Use sonarjs locally to catch "Code Smells" before CI. |
| **Formatting** | **Prettier** | Non-negotiable style enforcement. |
| **Git Hooks** | **Lefthook** | Replaces Husky. Native Go binary. Runs parallel checks. |
| **Commit Standard** | **Commitlint** | Enforces "Conventional Commits" (e.g., feat:, fix:). |
| **Quality Server** | **SonarQube (Community)** | Centralized dashboard for "Technical Debt" and "Quality Gates". |

## **2\. PROTOCOL A: THE LOCAL GUARDRAILS (Pre-Commit)**

**Directives:**

1. Code MUST be formatted (Prettier) and Linted (ESLint) before it enters the repository.  
2. Developers MUST NOT be allowed to commit "dirty" code.  
3. This is enforced via lefthook configured in lefthook.yml.

### **2.1 Configuration: The Speed-Optimized Hook**

Create lefthook.yml in the root. Note the use of parallel: true for enterprise speed.

\# lefthook.yml  
pre-commit:  
  parallel: true  
  commands:  
    \# 1\. LOGIC CHECK (Fail on bugs/complexity)  
    lint:  
      glob: "\*.{js,ts,jsx,tsx}"  
      run: npx eslint {staged\_files}  
      
    \# 2\. STYLE CHECK (Fail on ugly code)  
    format:  
      glob: "\*.{js,ts,jsx,tsx,json,css,md}"  
      run: npx prettier \--check {staged\_files}

    \# 3\. UNIT TESTS (Fast Fail \- only related tests)  
    test:  
      glob: "\*.{js,ts,jsx,tsx}"  
      run: npm run test \-- \--findRelatedTests {staged\_files}

    \# 4\. PRE-PUSH REPORT (Geneate artifacts)
    report:
      run: npm run lint:report && npm run test:report

commit-msg:  
  commands:  
    \# 4\. HISTORY STANDARD (Fail on bad messages)  
    commitlint:  
      run: npx commitlint \--edit {1}

### **2.2 Configuration: The Logic Enforcer**

Update eslint.config.js to include SonarJS. This brings enterprise-grade bug detection to the local editor.

// eslint.config.js  
import sonarjs from "eslint-plugin-sonarjs";  
import js from "@eslint/js";

export default \[  
  js.configs.recommended,  
  {  
    plugins: { sonarjs },  
    rules: {  
      // CRITICAL: Fail if functions are too hard to read  
      "sonarjs/cognitive-complexity": \["error", 15\],  
      // CRITICAL: Fail if code is copy-pasted  
      "sonarjs/no-identical-expressions": "error",  
      // CRITICAL: Fail on "Code Smells"  
      "sonarjs/no-collapsible-if": "error",  
      "sonarjs/no-inverted-boolean-check": "error",  
    }  
  }  
\];

## **3\. PROTOCOL B: THE CENTRAL AUTHORITY (The Server)**

**Directives:**

1. All code MUST be scanned by a SonarQube Community instance.  
2. The "Quality Gate" MUST be set to **Hard Fail** on the metrics defined in Section 4\.

### **3.1 Infrastructure: Docker Composition**

Create docker-compose.yml to host the Quality Dashboard.

version: "3"  
services:  
  sonarqube:  
    image: sonarqube:community  
    container\_name: sonarqube\_quality  
    restart: always  
    environment:  
      \- SONAR\_JDBC\_URL=jdbc:postgresql://db:5432/sonar  
      \- SONAR\_JDBC\_USERNAME=sonar  
      \- SONAR\_JDBC\_PASSWORD=sonar  
    ports:  
      \- "9000:9000"  
    volumes:  
      \- sonar\_data:/opt/sonarqube/data  
      \- sonar\_extensions:/opt/sonarqube/extensions  
      \- sonar\_logs:/opt/sonarqube/logs  
    depends\_on:  
      \- db  
    networks:  
      \- qualnet

  db:  
    image: postgres:15  
    container\_name: postgres\_sonar  
    restart: always  
    environment:  
      \- POSTGRES\_USER=sonar  
      \- POSTGRES\_PASSWORD=sonar  
      \- POSTGRES\_DB=sonar  
    volumes:  
      \- postgres\_data:/var/lib/postgresql/data  
    networks:  
      \- qualnet

networks:  
  qualnet:

volumes:  
  sonar\_data:  
  sonar\_extensions:  
  sonar\_logs:  
  postgres\_data:

*Agent Note: On Linux hosts, you must execute sysctl \-w vm.max\_map\_count=262144 for SonarQube ElasticSearch to function.*

### **3.2 Configuration: The Scanner**

Create sonar-project.properties in the project root.

sonar.projectKey=my-enterprise-app  
sonar.projectName=Enterprise App Quality  
sonar.projectVersion=1.0

\# Source Code  
sonar.sources=src  
sonar.exclusions=\*\*/\*.test.js,\*\*/\*.spec.js,\*\*/node\_modules/\*\*,\*\*/dist/\*\*

\# Test Code  
sonar.tests=src  
sonar.test.inclusions=\*\*/\*.test.js,\*\*/\*.spec.js  
sonar.tests=src  
sonar.test.inclusions=\*\*/\*.test.js,\*\*/\*.spec.js  
sonar.javascript.lcov.reportPaths=reports/coverage/lcov.info
sonar.eslint.reportPaths=reports/lint.json

## **4\. PROTOCOL C: METRICS & THRESHOLDS**

The Agent must enforce the following thresholds. If the code does not meet these standards, the PR is rejected.

| Metric | Threshold | Reason |
| :---- | :---- | :---- |
| **Reliability Rating** | **A** | Zero bugs allowed. |
| **Maintainability Rating** | **A** | Code must be easy to change. |
| **Duplicated Lines** | **\< 3%** | Don't Repeat Yourself (DRY). |
| **Cyclomatic Complexity** | **\< 15 per function** | If you need 15 if/else statements, refactor it. |
| **Comment Density** | **10% \- 30%** | Code must be documented, but not over-commented. |
| **New Code Coverage** | **\> 80%** | New features must be tested. Legacy code is exempt until touched. |

## **5\. EXECUTION SUMMARY**

To implement this framework, run the following command sequence:

\# 1\. Install Toolchain  
npm install \--save-dev prettier eslint eslint-plugin-sonarjs @commitlint/{config-conventional,cli} lefthook

\# 2\. initialize Hooks  
npx lefthook install

\# 3\. Start Server  
docker-compose up \-d

\# 4\. Verify  
\# 4\. Verify  
npm run lint
# Or generate report: 
# npx eslint -f json -o ./reports/lint.json .  
