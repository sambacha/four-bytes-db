#!/bin/bash
wget --version || exit 1 && echo "WGET not found, install GNU CoreUtils"
echo "Downloading Known Hashes Script..."
sh known-hashes-py.sh
python3 --version || exit 1 && echo "python3 not found"
echo "Downloading known hashes update..."
python3 download_known_hashes.py known_hashes.py
