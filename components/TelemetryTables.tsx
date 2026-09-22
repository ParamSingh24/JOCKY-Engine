'use client';

import React, { useState } from 'react';
import { ProcessTelemetry, NetworkPortTelemetry, RegistryPersistenceTelemetry, ExtractionEventLog } from '@/lib/types';

interface TelemetryTablesProps {
  processes: ProcessTelemetry[];
  ports: NetworkPortTelemetry[];
  persistence: RegistryPersistenceTelemetry[];
  logs: ExtractionEventLog[];
  latestPayloadJson?: any;
}

export function TelemetryTables({
  processes,
  ports,
  persistence,
  logs,
  latestPayloadJson
}: TelemetryTablesProps) {
  const [activeTab, setActiveTab] = useState<'processes' | 'ports' | 'persistence' | 'logs' | 'json'>('processes');

  return (
    <div className="w-full bg-white dark:bg-[#0e1118]/85 border border-zinc-200 dark:border-slate-800 rounded-lg">
      <div className="flex border-b border-zinc-200 dark:border-slate-800 p-2 space-x-2 font-mono">
        <button onClick={() => setActiveTab('processes')}>Processes ({processes.length})</button>
        <button onClick={() => setActiveTab('ports')}>Ports ({ports.length})</button>
      </div>
    </div>
  );
}
