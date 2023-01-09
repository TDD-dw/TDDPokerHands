#!/bin/bash

mob-start() { git checkout -b "$@" && git push origin "$@" --set-upstream && mob start --include-uncommitted-changes; }