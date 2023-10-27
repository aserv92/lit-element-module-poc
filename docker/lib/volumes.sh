#!/usr/bin/env bash

set -euo pipefail

. submodules/docker/lib/base_volumes.sh

# Associative array mapping Docker Volume names to paths. Extends array defined in Submodules Docker volumes script.
VOLUMES["lit-element-module-poc_project"]="$(pwd)"
export VOLUMES

# Associative array mapping Docker Volume targets to types. Extends array defined in Submodules Docker volumes script.
VOLUME_TYPES["lit-element-module-poc_project"]=$DIRECTORY
export VOLUME_TYPES

export PROJECT_VOLUME="lit-element-module-poc_project"
