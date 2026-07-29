#!/usr/bin/env bash
set -euo pipefail

# Build the Vite site, copy output into `public_html`, and create a zip for Hostinger upload.
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

echo "Running build..."
npm run build

echo "Preparing public_html..."
rm -rf public_html/*
cp -R dist/* public_html/

ZIP_NAME="hostinger_deploy_$(date +%Y%m%d).zip"
echo "Creating $ZIP_NAME..."
zip -r "$ZIP_NAME" public_html/*

echo "Package ready: $ROOT_DIR/$ZIP_NAME"
