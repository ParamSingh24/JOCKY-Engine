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

export interface NetworkPortTelemetry {
  protocol: 'TCP' | 'UDP';
  localAddress: string;
  localPort: number;
  foreignAddress: string;
  foreignPort: number;
  state: 'LISTENING' | 'ESTABLISHED' | 'ACTIVE' | 'TIME_WAIT' | 'CLOSE_WAIT';
  pid: number;
  processName: string;
  service: string;
  risk: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW' | 'VERIFIED_SECURE';
  country: string;
  bytesSent: string;
  bytesRecv: string;
}
