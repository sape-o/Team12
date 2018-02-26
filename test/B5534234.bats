#!/usr/bin/env bats


@test "B5534234 test input data" {
    json=$(curl -X POST -H "Content-Type: application/json" -d '{"nurse" : "http://localhost:8080/api/nurses/1", "time" : "2018-02-11T15:22:22.000+0000", "job" : "refd","patient" : "http://localhost:8080/api/patients/1" }' http://localhost:8080/api/procedures)

	echo "$json" | grep "href"
}

@test "B5534234 test patient null" {
    json=$(curl -X POST -H "Content-Type: application/json" -d '{"nurse" : "http://localhost:8080/api/nurses/1", "time" : "2018-02-11T15:22:22.000+0000", "job" : "refd","patient" : null }' http://localhost:8080/api/procedures)

	echo "$json" | grep "may not be null"
}

@test "B5534234 test time null" {
    json=$(curl -X POST -H "Content-Type: application/json" -d '{"nurse" : "http://localhost:8080/api/nurses/1", "time" : null, "job" : "refd","patient" : "http://localhost:8080/api/patients/1" }' http://localhost:8080/api/procedures)

	echo "$json" | grep "may not be null"
}

@test "B5534234 test nurse null" {
    json=$(curl -X POST -H "Content-Type: application/json" -d '{"nurse" : null, "time" : "2018-02-11T15:22:22.000+0000", "job" : "refd","patient" : "http://localhost:8080/api/patients/1" }' http://localhost:8080/api/procedures)

	echo "$json" | grep "may not be null"
}

@test "B5534234 test input data wrong" {
    json=$(curl -X POST -H "Content-Type: application/json" -d '{"nurse" : "http://localhost:8080/api/nurses/1", "time" : "2018-02-11T15:22:22.000+0000", "job" : "ผมคนไทย","patient" : "http://localhost:8080/api/patients/1" }' http://localhost:8080/api/procedures)

	echo "$json" | grep "must match"
}
