import React from 'react';
import { Cpu, Network, Database } from 'lucide-react';
import { ProcessTelemetry, NetworkPortTelemetry, RegistryPersistenceTelemetry } from '@/lib/types';

interface StatsProps {
  processes: ProcessTelemetry[];
  ports: NetworkPortTelemetry[];
  persistence: RegistryPersistenceTelemetry[];
  batchCount: number;
}

export function StatsOverview({ processes, ports, persistence, batchCount }: StatsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div className="bg-white dark:bg-[#0e1118]/85 border border-zinc-200 dark:border-slate-800 rounded-lg p-4">
        <span className="text-sm font-semibold text-zinc-500 uppercase">Processes</span>
        <div className="text-3xl font-black font-mono">{processes.length}</div>
      </div>
      <div className="bg-white dark:bg-[#0e1118]/85 border border-zinc-200 dark:border-slate-800 rounded-lg p-4">
        <span className="text-sm font-semibold text-zinc-500 uppercase">Ports</span>
        <div className="text-3xl font-black font-mono">{ports.length}</div>
      </div>
    </div>
  );
}
