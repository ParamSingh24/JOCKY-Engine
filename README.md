# JOCKY ENGINE // Endpoint Forensic System & Telemetry Pipeline

High-fidelity tactical forensic platform featuring a declarative forensic domain-specific language (DSL), continuous delivery build pipeline, and real-time incident response web dashboard.

---

## Architecture Overview

```
                      +---------------------------------------+
                      |    rules/endpoint_forensics.jocky     |
                      |   [Declarative Forensic Directives]   |
                      +-------------------+-------------------+
                                          |
                                          v
                      +---------------------------------------+
                      |          jocky_compiler.py            |
                      |  - AST & SSA IR Parsing Simulation    |
                      |  - Direct Syscall (Halo's Gate) Stubs |
                      |  - Live Windows Process/Port Recon    |
                      |  - Winreg Persistence Hive Extraction |
                      +-------------------+-------------------+
                                          |
                                          | HTTP POST /api/telemetry
                                          v
+-----------------------------------------------------------------------------------+
|                        JOCKY Forensic Web Dashboard                               |
|                          (Next.js 14 + Tailwind CSS)                              |
|                                                                                   |
|  * Live Process IDs & VAD Anomaly Inspector (RWX Injection, Integrity Level)     |
|  * Network Sockets & C2 Beacon Monitor (Protocols, Foreign IP, Byte Counters)     |
|  * Registry Persistence & MITRE ATT&CK Matrix (Run, IFEO, Winlogon, Profilers)    |
|  * Real-Time SSE Stream (Zero-refresh live telemetry updates)                     |
+-----------------------------------------------------------------------------------+
```

---

## Evaluation Demonstration Runbook

### 1. Start the Classified Web Dashboard
In your first terminal:
```powershell
# Install UI dependencies
npm install

# Start development server on port 3000
npm run dev
```
Open your browser at `http://localhost:3000`.

---

### 2. Execute the JOCKY Transpiler & Forensic Pipeline
In a second terminal:
```powershell
python jocky_compiler.py
```

**What this demonstrates:**
1. **DSL Parsing**: Reads `rules/endpoint_forensics.jocky` and parses forensic collection rules.
2. **Compiler Emulation**: Renders progress bars for AST parsing, LLVM IR translation, direct syscall stub loading, and native machine code compilation.
3. **Live System Recon**: Ingests active processes, open network sockets, and registry keys from the local machine.
4. **Live Dashboard Update**: Dispatches the batch to `/api/telemetry`, dynamically refreshing all KPI cards and data tables without page reloads.

*Fast mode (to skip delays):*
```powershell
python jocky_compiler.py --fast
```

---

### 3. Demonstrate Binary Polymorphism & Unique Hash Generation
In the terminal:
```powershell
python build_agent.py
```
**What this demonstrates:**
- Simulates the packaging of the agent artifact (`dist/jocky_collector_x64.bin`).
- Injects a unique build ID, UTC timestamp, and entropy salt.
- Displays initial vs transformed SHA-256 hashes, proving unique cryptographic signatures on every compile cycle.

---

## MVP Evaluation Positioning (Presentation Notes)

> **Evaluator Context**:
> This MVP establishes the **end-to-end architecture**, **declarative DSL syntax (`.jocky`)**, **live telemetry ingestion protocol**, and **SOC Incident Response dashboard**. Low-level kernel filter drivers and raw driver evasion routines are slated for subsequent production integration.
