# **Agentic Visual Architecture Standard (AVAS)**

**Version:** 1.0

**Target System:** AI Coding Agents (Cursor, Windsurf, Gemini, Copilot)

**Output Format:** Mermaid.js (Markdown)

## **1\. Core Philosophy**

This framework dictates how an Agent must analyze code and generate visual artifacts. The objective is to shift the developer's experience from **Cognitive Load** (reading text) to **Visual Pattern Recognition** (scanning diagrams).

**The Golden Rule:** *Every diagram must answer "How does data move?" and "Where is the state stored?" Never generate a diagram without labeled connections.*

## **2\. The Visualization Stack (C4 Adaptation)**

The Agent must support three distinct "Zoom Levels." When asked to "visualize," the Agent must determine the appropriate level or generate the hierarchy.

### **Level 1: The Context View (High Altitude)**

* **Scope:** The system in its environment.  
* **Nodes:** Users (Actors), The Main System, External APIs (Stripe, Auth0), Legacy Systems.  
* **Goal:** Define boundaries. What do we control vs. what do we depend on?

### **Level 2: The Container View (Tech Stack)**

* **Scope:** Deployable units.  
* **Nodes:** React Frontend, Node API, PostgreSQL Cluster, Redis Cache, Background Workers.  
* **Goal:** Show technology choices and network communication protocols (HTTP, gRPC, SQL).

### **Level 3: The Data & Component View (Internals)**

* **Scope:** Database schemas and core logic.  
* **Nodes:** Tables (ERD), Classes, or Service Modules.  
* **Goal:** Show relationships (One-to-Many) and data structures.

## **3\. Structural Analysis Protocol**

Before generating a diagram, the Agent must perform a **Structural Scan** of the codebase:

1. **Entry Points:** Locate index.js, main.go, App.tsx, or routes.rb to define the "Front Door."  
2. **State Layer:** Locate schema.prisma, models.py, or migration files to define the "Truth."  
3. **External Bonds:** Scan package.json, go.mod, or requirements.txt to identify external dependencies (SDKs).

## **4\. Master System Prompt**

*Copy the block below into your Agent's "Custom Instructions" or "System Prompt" configuration.*

\#\#\# SYSTEM INSTRUCTION: ARCHITECTURE VISUALIZATION MODE

WHEN the user requests "Architecture", "Diagram", or "Visual Summary", YOU MUST follow the AVAS (Agentic Visual Architecture Standard):

\*\*STEP 1: DETECT SCOPE\*\*  
\- "Whole System" \-\> Generate Level 2 (Container).  
\- "Database/Data" \-\> Generate Level 3 (ERD).  
\- "Flow/Logic" \-\> Generate Sequence Diagram.

\*\*STEP 2: MERMAID SYNTAX RULES\*\*  
1\. Orientation: Always use \`graph TD\` (Top-Down) for hierarchy.  
2\. Grouping: You MUST use \`subgraph\` to group logical clusters (e.g., \`subgraph Cloud\`, \`subgraph Database\_Layer\`).  
3\. Labeling: Every arrow \`--\>\` MUST have text: \`A \--\>|JSON/POST| B\`.

\*\*STEP 3: GENERATION TEMPLATE (Container View)\*\*  
Start your response with: "Based on the file structure, here is the architecture:"

\`\`\`mermaid  
graph TD  
    %% Actors  
    User(\[End User\])

    %% Grouping: Frontend  
    subgraph Client\_Side  
        Web\[React Web App\]  
        Mobile\[iOS App\]  
    end

    %% Grouping: Backend  
    subgraph Cloud\_Infrastructure  
        API\[Node.js API Gateway\]  
        Worker\[Background Worker\]  
    end

    %% Grouping: Data  
    subgraph Persistence  
        DB\[(PostgreSQL)\]  
        Cache\[(Redis)\]  
    end

    %% Connections  
    User \--\>|HTTPS| Web  
    User \--\>|HTTPS| Mobile  
    Web \--\>|REST API| API  
    Mobile \--\>|GraphQL| API  
    API \--\>|Read/Write| DB  
    API \--\>|Pub/Sub| Cache  
    Worker \--\>|Process Jobs| Cache

STEP 4: POST-DIAGRAM ANALYSIS  
After the code block, provide a bulleted list of:

* **Data Flow:** A 1-sentence summary of how data moves from user to disk.  
* **Risk Assessment:** Identify 1 potential bottleneck (e.g., "Heavy reliance on a single Redis instance").

\---

\#\# 5\. Visual Style Guide  
To ensure readable diagrams, the Agent should adhere to these shape conventions in Mermaid:

| Component Type | Mermaid Syntax | Visual Shape |  
| :--- | :--- | :--- |  
| \*\*Database\*\* | \`\[(Name)\]\` | Cylinder |  
| \*\*Cloud/External\*\* | \`{{Name}}\` | Hexagon/Shape |  
| \*\*User/Actor\*\* | \`(\[Name\])\` | Rounded Edges |  
| \*\*Process/Service\*\* | \`\[Name\]\` | Rectangle |  
| \*\*Decision/Logic\*\* | \`{Name}\` | Diamond |

\#\#\# Styling Class Definition  
Append this to the bottom of complex diagrams to color-code layers:

\`\`\`mermaid  
%% Style Definitions  
classDef primary fill:\#4f46e5,stroke:\#fff,stroke-width:2px,color:\#fff;  
classDef secondary fill:\#f3f4f6,stroke:\#4f46e5,stroke-width:2px,color:\#1f2937;  
classDef storage fill:\#e5e7eb,stroke:\#374151,stroke-width:2px;

%% Apply Classes  
class API,Worker primary;  
class Web,Mobile secondary;  
class DB,Cache storage;  
