#!/bin/bash

git checkout -b "$@" && git push origin "$@" --set-upstream && mob start --include-uncommitted-changes;
