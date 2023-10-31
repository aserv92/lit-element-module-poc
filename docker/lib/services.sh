#!/usr/bin/env bash

set -euo pipefail

# Associative array mapping service names to host names
declare -A SERVICE_HOST_MAP
SERVICE_HOST_MAP["app"]=web
export SERVICE_HOST_MAP

# Associative array mapping service names to TCP ports
declare -A SERVICE_PORT_MAP
SERVICE_PORT_MAP["app"]=8080
export SERVICE_PORT_MAP
