#!/usr/bin/env bash

testExitCode=0

cypress run

testExitCode=$(($testExitCode + $?))

if [ "$testExitCode" -ne "0" ]; then
    echo "\n***************************************************"
    echo "Cypress test failures!"
    echo "***************************************************\n"
    exit $testExitCode
fi