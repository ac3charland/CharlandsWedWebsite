#!/usr/bin/env bash

testExitCode=0

pkill -f "(chrome)?(--headless)"
backstop $1 --config=backstop/backstop-config.js --filter=$2
testExitCode=$(($testExitCode + $?))

if [ "$testExitCode" -ne "0" ]; then
    echo "\n***************************************************"
    echo "Backstop test failures!"
    echo "***************************************************\n"
    exit $testExitCode
fi
