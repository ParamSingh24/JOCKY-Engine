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
  }
];

const initialPorts: NetworkPortTelemetry[] = [];
const initialPersistence: RegistryPersistenceTelemetry[] = [];
const initialLogs: ExtractionEventLog[] = [];

if (!global.__JOCKY_TELEMETRY_STORE__) {
  global.__JOCKY_TELEMETRY_STORE__ = {
    lastUpdated: new Date().toISOString(),
    batchCount: 1,
    latestBatchId: "JOCKY-INIT-BASELINE",
    processes: initialProcesses,
    ports: initialPorts,
    persistence: initialPersistence,
    logs: initialLogs,
    listeners: new Set()
  };
}

export const telemetryStore = global.__JOCKY_TELEMETRY_STORE__!;

export function getTelemetrySnapshot() {
  return {
    lastUpdated: telemetryStore.lastUpdated,
    batchCount: telemetryStore.batchCount,
    latestBatchId: telemetryStore.latestBatchId,
    processes: telemetryStore.processes,
    ports: telemetryStore.ports,
    persistence: telemetryStore.persistence,
    logs: telemetryStore.logs,
  };
}
