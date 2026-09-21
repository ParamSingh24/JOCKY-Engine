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
