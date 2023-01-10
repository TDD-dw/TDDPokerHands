#!/bin/bash

set -e

mobStart() { git checkout -b "$@" && git push origin "$@" --set-upstream && mob start --include-uncommitted-changes; }
