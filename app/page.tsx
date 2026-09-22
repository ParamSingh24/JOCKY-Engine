'use client';

import React, { useState } from 'react';
import { ClassifiedHeader } from '@/components/ClassifiedHeader';
import { StatsOverview } from '@/components/StatsOverview';
import { TelemetryTables } from '@/components/TelemetryTables';
import { ProcessTelemetry, NetworkPortTelemetry, RegistryPersistenceTelemetry, ExtractionEventLog } from '@/lib/types';

export default function DashboardPage() {
  const [processes, setProcesses] = useState<ProcessTelemetry[]>([]);
  const [ports, setPorts] = useState<NetworkPortTelemetry[]>([]);
  const [persistence, setPersistence] = useState<RegistryPersistenceTelemetry[]>([]);
  const [logs, setLogs] = useState<ExtractionEventLog[]>([]);

  return (
    <div className="min-h-screen bg-radial-vignette">
      <main className="p-6">
        <StatsOverview processes={processes} ports={ports} persistence={persistence} batchCount={1} />
        <TelemetryTables processes={processes} ports={ports} persistence={persistence} logs={logs} />
      </main>
    </div>
  );
}
