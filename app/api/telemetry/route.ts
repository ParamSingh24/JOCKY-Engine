import { NextRequest, NextResponse } from 'next/server';
import { getTelemetrySnapshot } from '@/lib/telemetryStore';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const data = getTelemetrySnapshot();
    return NextResponse.json({
      success: true,
      data,
      serverTime: new Date().toISOString(),
      engine: "JOCKY-ENGINE-v4.9.2-WIN64"
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({
      success: false,
      error: message
    }, { status: 500 });
  }
}
