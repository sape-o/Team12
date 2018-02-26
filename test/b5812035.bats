#!/usr/bin/env bats


@test "B5812035 test input data" {
    json=$(curl -X POST -H "Content-Type: application/json" -d '{"hostdate" : "2018-02-11T15:22:22.000+0000", "namehost" : "Banphaeo_Hospita", "pid" : "http://localhost:8080/api/patientSaves/1","id" : "http://localhost:8080/api/userLogins/1" }' http://localhost:8080/api/sentPatients)

	echo "$json" | grep "Banphaeo_Hospita"
}

@test "B5812035 test hostdate null" {
    json=$(curl -X POST -H "Content-Type: application/json" -d '{"hostdate" : null , "namehost" : "Banphaeo_Hospita" , "pid" : "http://localhost:8080/api/patientSaves/1","id" : "http://localhost:8080/api/userLogins/1" }' http://localhost:8080/api/sentPatients)

	echo "$json" | grep "may not be null"
}

@test "B5812035 test namehost Too short" {
    json=$(curl -X POST -H "Content-Type: application/json" -d '{"hostdate" : "2018-02-11T15:22:22.000+0000", "namehost" : "Buyt" , "pid" : "http://localhost:8080/api/patientSaves/1","id" : "http://localhost:8080/api/userLogins/1" }' http://localhost:8080/api/sentPatients)

	echo "$json" | grep "must match"
}

@test "B5812035 test namehost Too long" {
    json=$(curl -X POST -H "Content-Type: application/json" -d '{"hostdate" : "2018-02-11T15:22:22.000+0000", "namehost" : "Banphaeo_HospitaBanphaeo_HospitaBanphaeo_HospitaBanphaeo" , "pid" : "http://localhost:8080/api/patientSaves/1","id" : "http://localhost:8080/api/userLogins/1" }' http://localhost:8080/api/sentPatients)

	echo "$json" | grep "must match"
}

@test "B5812035 test input data wrong" {
    json=$(curl -X POST -H "Content-Type: application/json" -d '{"hostdate" : "2018-02-11T15:22:22.000+0000", "namehost" : "Banphaeo Hospita", "pid" : "http://localhost:8080/api/patientSaves/1","id" : "http://localhost:8080/api/userLogins/1" }' http://localhost:8080/api/sentPatients)

	echo "$json" | grep "must match"
}
