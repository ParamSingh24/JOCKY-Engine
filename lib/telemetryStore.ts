import { TelemetryBatch, ProcessTelemetry, NetworkPortTelemetry, RegistryPersistenceTelemetry, ExtractionEventLog } from './types';

declare global {
  var __JOCKY_TELEMETRY_STORE__: {
    lastUpdated: string;
    batchCount: number;
    latestBatchId: string;
    processes: ProcessTelemetry[];
    ports: NetworkPortTelemetry[];
    persistence: RegistryPersistenceTelemetry[];
    logs: ExtractionEventLog[];
    listeners: Set<(data: any) => void>;
  } | undefined;
}

const initialProcesses: ProcessTelemetry[] = [
  {
    pid: 8412,
    ppid: 1024,
    name: "svchost.exe",
    path: "C:\\Windows\\System32\\svchost.exe",
    user: "NT AUTHORITY\\SYSTEM",
    integrity: "SYSTEM",
    threads: 34,
    memoryBase: "0x7FF64A100000",
    memorySize: "48.2 MB",
    status: "SUSPICIOUS_INJECTION",
    anomaly: "Reflective DLL injected into unbacked VAD allocation (RWX)",
    sha256: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
    threatLevel: "CRITICAL"
  },
  {
    pid: 4920,
    ppid: 8412,
    name: "conhost.exe",
    path: "C:\\Windows\\System32\\conhost.exe",
    user: "NT AUTHORITY\\SYSTEM",
    integrity: "SYSTEM",
    threads: 4,
    memoryBase: "0x7FF7B12C0000",
    memorySize: "8.4 MB",
    status: "NORMAL",
    anomaly: "Standard console host allocation",
    sha256: "8f4e2c65a1098ef7321e1a4980bc9d1f3b0e14a278912e756c4d0a92147f89ab",
    threatLevel: "CLEAN"
  },
  {
    pid: 11304,
    ppid: 3440,
    name: "powershell.exe",
    path: "C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe",
    user: "CORP\\Administrator",
    integrity: "HIGH",
    threads: 18,
    memoryBase: "0x7FF628B00000",
    memorySize: "112.6 MB",
    status: "SUSPICIOUS_EXECUTION",
    anomaly: "EncodedCommand detected with base64 download cradle (-w hidden -nop)",
    sha256: "3a7bd3e2360a3d29eea436fcfb7e44c735d117c42d1c1835420b6b9942dd4f1b",
    threatLevel: "HIGH"
  },
  {
    pid: 6128,
    ppid: 780,
    name: "spoolsv.exe",
    path: "C:\\Windows\\System32\\spoolsv.exe",
    user: "NT AUTHORITY\\SYSTEM",
    integrity: "SYSTEM",
    threads: 22,
    memoryBase: "0x7FF619A00000",
    memorySize: "14.1 MB",
    status: "NORMAL",
    anomaly: "Print Spooler service baseline nominal",
    sha256: "5c92da90a14e9f3b259d3a778e1208fb347c6a99214810eeaf1288c934b12aa3",
    threatLevel: "CLEAN"
  }
];

const initialPorts: NetworkPortTelemetry[] = [
  {
    protocol: "TCP",
    localAddress: "0.0.0.0",
    localPort: 4444,
    foreignAddress: "194.26.29.112",
    foreignPort: 53530,
    state: "ESTABLISHED",
    pid: 8412,
    processName: "svchost.exe",
    service: "CobaltStrike Beacon / Meterpreter Listener",
    risk: "CRITICAL",
    country: "RO",
    bytesSent: "2,419,008 B",
    bytesRecv: "512,400 B"
  },
  {
    protocol: "TCP",
    localAddress: "127.0.0.1",
    localPort: 9050,
    foreignAddress: "0.0.0.0",
    foreignPort: 0,
    state: "LISTENING",
    pid: 14088,
    processName: "rundll32.exe",
    service: "SOCKS5 Proxy / TOR Hidden Gateway",
    risk: "HIGH",
    country: "LOOPBACK",
    bytesSent: "0 B",
    bytesRecv: "0 B"
  }
];

const initialPersistence: RegistryPersistenceTelemetry[] = [
  {
    hive: "HKLM",
    keyPath: "SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run",
    valueName: "WindowsSecurityTelemetryHost",
    valueType: "REG_SZ",
    data: "C:\\ProgramData\\WindowsDiagnostics\\telemetry_agent.exe --silent --kernel-hook",
    classification: "MALICIOUS_PERSISTENCE",
    mitreId: "T1547.001",
    severity: "CRITICAL",
    lastModified: "2026-09-25 15:42:10 UTC"
  }
];
