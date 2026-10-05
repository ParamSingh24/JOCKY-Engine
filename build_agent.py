#!/usr/bin/env python3
"""
===============================================================================
JOCKY ENGINE // CONTINUOUS DELIVERY BUILD & HASH TRANSFORMATION PIPELINE
===============================================================================
Demonstrates the build pipeline that packages the JOCKY agent, injects
unique entropy/watermarking, and produces verifiable unique SHA-256 binary
hashes on every compile cycle.
"""

import os
import sys
import time
import hashlib
import random
import string
import shutil
from datetime import datetime

# ANSI colors
GREEN = "\033[38;2;16;185;129m"
BRIGHT_GREEN = "\033[38;2;52;211;153m"
DARK_GRAY = "\033[38;2;100;116;139m"
GRAY = "\033[38;2;148;163;184m"
WHITE = "\033[38;2;241;245;249m"
CYAN = "\033[38;2;6;182;212m"
YELLOW = "\033[38;2;245;158;11m"
DIM = "\033[2m"
BOLD = "\033[1m"
RESET = "\033[0m"

def compute_sha256(filepath):
    if not os.path.exists(filepath):
        return None
    h = hashlib.sha256()
    with open(filepath, "rb") as f:
        while chunk := f.read(65536):
            h.update(chunk)
    return h.hexdigest()

def main():
    print(f"\n{DARK_GRAY}+===============================================================================+{RESET}")
    print(f"{DARK_GRAY}|{RESET}  {BOLD}{WHITE}JOCKY AGENT BUILD PIPELINE{RESET} {BRIGHT_GREEN}[HASH TRANSFORMATION DEMO]{RESET}              {DARK_GRAY}|{RESET}")
    print(f"{DARK_GRAY}+===============================================================================+{RESET}\n")

    dist_dir = os.path.join(os.path.dirname(__file__), "dist")
    os.makedirs(dist_dir, exist_ok=True)
    target_bin = os.path.join(dist_dir, "jocky_collector_x64.bin")

    # Step 1: Base binary compilation template
    base_template = b"\x4D\x5A\x90\x00\x03\x00\x00\x00\x04\x00\x00\x00\xFF\xFF\x00\x00" + b"JOCKY_CORE_FORENSIC_COLLECTOR_V4_9_2"
    with open(target_bin, "wb") as f:
        f.write(base_template)

    old_hash = compute_sha256(target_bin)
    print(f"{DARK_GRAY}[*]{RESET} Base Binary Template Generated: {WHITE}dist/jocky_collector_x64.bin{RESET}")
    print(f"{DARK_GRAY}[*]{RESET} {BOLD}Initial Template SHA-256:{RESET} {YELLOW}{old_hash}{RESET}\n")

    time.sleep(0.6)
    print(f"{DARK_GRAY}[>]{RESET} {BOLD}{WHITE}Applying Build Watermark & Entropy Transformation...{RESET}")

    # Step 2: Inject unique build signature & entropy bytes
    build_id = f"BUILD-{''.join(random.choices(string.ascii_uppercase + string.digits, k=10))}"
    build_timestamp = datetime.utcnow().isoformat()
    entropy_bytes = os.urandom(32)

    watermark_block = f"\n\n[JOCKY_METADATA]\nID={build_id}\nTIMESTAMP={build_timestamp}\nSALT=".encode("utf-8") + entropy_bytes

    with open(target_bin, "ab") as f:
        f.write(watermark_block)

    time.sleep(0.6)
    new_hash = compute_sha256(target_bin)

    print(f"{GREEN}[+]{RESET} Build ID: {CYAN}{build_id}{RESET}")
    print(f"{GREEN}[+]{RESET} Build Timestamp: {GRAY}{build_timestamp} UTC{RESET}")
    print(f"{GREEN}[+]{RESET} Injected Entropy Salt: {DARK_GRAY}{entropy_bytes.hex()[:32]}...{RESET}")
    print(f"{GREEN}[+]{RESET} {BOLD}New Transformed SHA-256:{RESET} {BRIGHT_GREEN}{new_hash}{RESET}\n")

    print(f"{BRIGHT_GREEN}+===============================================================================+{RESET}")
    print(f"{BRIGHT_GREEN}|{RESET}  {BOLD}{WHITE}VERIFICATION: HASH VARIATION SUCCESSFUL{RESET}                                    {BRIGHT_GREEN}|{RESET}")
    print(f"{BRIGHT_GREEN}|{RESET}  {DIM}Every compilation produces a cryptographically unique binary signature.{RESET}     {BRIGHT_GREEN}|{RESET}")
    print(f"{BRIGHT_GREEN}+===============================================================================+{RESET}\n")

if __name__ == "__main__":
    main()
