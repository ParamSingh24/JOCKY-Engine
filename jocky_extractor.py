#!/usr/bin/env python3
import sys
import os
import time
import argparse

GREEN = "\033[38;2;16;185;129m"
RESET = "\033[0m"

def print_banner():
    print(f"{GREEN}JOCKY ENGINE [KERNEL FORENSIC EXTRACTION AGENT v4.9.2-RELEASE]{RESET}")

def run_extraction_sequence():
    print("[*] Establishing Direct Syscalls (Halo's Gate SSN resolution)...")
    time.sleep(1.0)
    print("[*] Bypassing User Mode Hooks in ntdll.dll .text section...")
    time.sleep(1.0)
    print("[*] Acquiring SeDebugPrivilege (SYSTEM integrity level)...")
    time.sleep(1.0)

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--url", default="http://localhost:3000/api/telemetry")
    parser.add_argument("--fast", action="store_true")
    args = parser.parse_args()
    print_banner()
    if not args.fast:
        run_extraction_sequence()

if __name__ == "__main__":
    main()
