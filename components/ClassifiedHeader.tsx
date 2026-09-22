'use client';

import React from 'react';
import { Shield, Radio } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';

interface HeaderProps {
  latestBatchId: string;
  isStreaming: boolean;
  onTriggerTestBurst: () => void;
  isLoading: boolean;
}

export function ClassifiedHeader({
  latestBatchId,
  isStreaming,
  onTriggerTestBurst,
  isLoading,
}: HeaderProps) {
  return (
    <header className="border-b border-zinc-200 dark:border-slate-800/90 bg-white/95 dark:bg-[#0b0d13]/95 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-full mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3.5">
          <Shield className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
          <h1 className="text-xl font-bold font-mono">JOCKY ENGINE</h1>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
