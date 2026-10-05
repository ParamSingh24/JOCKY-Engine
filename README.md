# JOCKY ENGINE // Endpoint Forensic System & Telemetry Pipeline

High-fidelity tactical forensic platform featuring a declarative forensic domain-specific language (DSL), continuous build variation pipeline, and a real-time incident response web dashboard.

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
                      |  - JOCKY DSL Parsing & Plan Building  |
                      |  - Live Host Process Enumeration      |
                      |  - Active TCP/UDP Socket Inspection   |
                      |  - Winreg Persistence Hive Extraction |
                      |  - Forensic Artifact Normalization    |
                      +-------------------+-------------------+
                                          |
                                          | HTTP POST /api/telemetry
                                          v
+-----------------------------------------------------------------------------------+
|                        JOCKY Forensic Web Dashboard                               |
|                          (Next.js 14 + Tailwind CSS)                              |
|                                                                                   |
|  * Live Process IDs & VAD Anomaly Inspector (RWX Detection, Integrity Level)      |
|  * Network Sockets & Foreign C2 Monitor (Protocols, Endpoints, Byte Counters)     |
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

### 2. Execute the JOCKY Parser & Execution Engine
In a second terminal:
```powershell
python jocky_compiler.py
```

**What this demonstrates:**
1. **JOCKY Script Parsing**: Reads `rules/endpoint_forensics.jocky` and validates the investigation directives.
2. **Investigation Plan Construction**: Builds the forensic execution pipeline and target mapping.
3. **Live Endpoint Reconnaissance**: Collects real processes, open network sockets, and registry keys from the local machine.
4. **Artifact Normalization & Ingestion**: Formats the telemetry into a standardized schema and sends it to `/api/telemetry`, updating all dashboard counters and tables in real-time.

*Fast mode (to skip demonstration delays):*
```powershell
python jocky_compiler.py --fast
```

---

### 3. Demonstrate Continuous Build Variation & Integrity
In the terminal:
```powershell
python build_agent.py
```
**What this demonstrates:**
- Packages the agent deployment template (`dist/jocky_collector_x64.bin`).
- Injects a unique build identifier, timestamp, and entropy salt.
- Produces a distinct cryptographic SHA-256 signature on every build, establishing the foundation for future native execution backend generation.

---

## MVP Evaluation Positioning (Presentation Script)

> *"Our Round 1 MVP demonstrates the complete JOCKY investigation workflow. We created a custom declarative forensic language that defines what evidence should be collected. The JOCKY execution engine parses these rules and orchestrates live endpoint collection for processes, network connections, and persistence artifacts. The resulting telemetry is transmitted to our centralized real-time dashboard, where investigators can monitor the endpoint without manually switching between multiple tools. We also demonstrate continuous build variation and artifact hash differentiation as a foundation for our future native execution backend.*
>
> *The current MVP focuses on proving the architecture and investigation workflow. Advanced kernel-level and native execution capabilities are part of our future architecture."*
