#!/usr/bin/env bash
# path: ./dev-tunnel.sh  (project root, alongside package.json)
#
# Runs the Vite dev server AND exposes it via a free, no-signup Cloudflare
# Quick Tunnel — for showing the site to someone remotely without deploying.
# The URL is random (*.trycloudflare.com), temporary, and dies when you stop
# this script. Not for production — just for quick "hey look at this" links.
#
# Requires: cloudflared installed.
#   macOS:   brew install cloudflared
#   Linux:   see https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/downloads/
#   Windows: winget install cloudflare.cloudflared

set -e

PORT=5173

if ! command -v cloudflared &> /dev/null; then
  echo "cloudflared not found. Install it first — see comments at the top of this script."
  exit 1
fi

echo "Starting Vite dev server on port $PORT..."
bun run dev -- --port $PORT &
VITE_PID=$!

# give vite a moment to boot before the tunnel tries to attach
sleep 2

echo "Starting Cloudflare Quick Tunnel (no login required)..."
cloudflared tunnel --url http://localhost:$PORT &
TUNNEL_PID=$!

# the tunnel URL prints to cloudflared's own stderr/stdout above —
# look for a line like: https://random-words-here.trycloudflare.com

cleanup() {
  echo ""
  echo "Shutting down..."
  kill $VITE_PID $TUNNEL_PID 2>/dev/null
  exit 0
}
trap cleanup INT TERM

wait