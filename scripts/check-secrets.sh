#!/usr/bin/env bash
set -euo pipefail

# Simple secret-checker: fails if known env tokens or API keys appear in tracked files
echo "Running repository secret checks..."

BAD=0

echo "Checking for literal key-like strings in tracked source files..."

# Build an allowlist of paths to ignore (built output, public assets, node modules)
IGNORED_PATHS='^(dist/|public_html/|public/|node_modules/|\.history/|package-lock.json$|package.json$|yarn.lock$)'

# Helper to search only tracked files excluding ignored paths
search_files() {
  git ls-files | grep -Ev "$IGNORED_PATHS" | xargs -r grep -nE "$1" || true
}

# Detect literal EmailJS-like tokens (service_XXXX, template_XXXX) appearing in source files
svc_matches=$(git ls-files | grep -Ev "$IGNORED_PATHS" | xargs -r grep -nE "(\"|')service_[0-9a-zA-Z_-]{4,}(\"|')" || true)
tmpl_matches=$(git ls-files | grep -Ev "$IGNORED_PATHS" | xargs -r grep -nE "(\"|')template_[0-9a-zA-Z_-]{4,}(\"|')" || true)

if [ -n "$svc_matches" ]; then
  echo "Found literal EmailJS service token(s) in repository:";
  echo "$svc_matches"
  BAD=1
fi

if [ -n "$tmpl_matches" ]; then
  echo "Found literal EmailJS template token(s) in repository:";
  echo "$tmpl_matches"
  BAD=1
fi

# Generic long quoted token (>=16 chars) — exclude import.meta.env references and data URIs
long_matches=$(git ls-files | grep -Ev "$IGNORED_PATHS" | xargs -r grep -nE '"[A-Za-z0-9_+/=]{20,}"' || true)
if [ -n "$long_matches" ]; then
  # filter out lines that contain import.meta.env or data:image/ (base64 assets)
  filtered=$(echo "$long_matches" | grep -v "import.meta.env" | grep -v "data:image/" || true)
  if [ -n "$filtered" ]; then
    echo "Found long quoted token(s) that may be secrets (excluding import.meta.env and data URIs):";
    echo "$filtered"
    BAD=1
  fi
fi

if [ "$BAD" -ne 0 ]; then
  echo "Secret check failed. Remove secrets or add to .gitignore before committing."
  exit 1
fi

echo "Secret checks passed."
