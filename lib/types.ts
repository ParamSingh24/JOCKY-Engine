export interface ProcessTelemetry {
  pid: number;
  ppid: number;
  name: string;
  path: string;
  user: string;
  integrity: 'SYSTEM' | 'HIGH' | 'MEDIUM' | 'LOW' | 'PROTECTED_LIGHT';
  threads: number;
  memoryBase: string;
  memorySize: string;
  status: 'NORMAL' | 'SUSPICIOUS_INJECTION' | 'SUSPICIOUS_EXECUTION' | 'PERSISTENCE_SPAWN' | 'TARGET_MONITORED';
  anomaly: string;
  sha256: string;
  threatLevel: 'CLEAN' | 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
}
