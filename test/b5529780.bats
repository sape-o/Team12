#!/usr/bin/env bats



@test "not null" {
    json=$(curl -X POST -H "Content-Type:application/json" -d '{"firstNameDocter":"Mr.janyutthana","lastNameDocter":"wiruswa"}' \
    http://localhost:8080/api/pharmacyLetters)

    echo $json | grep "href"

}



@test "null" {
    json=$(curl -X POST -H "Content-Type:application/json" -d '{"lastNameDocter":"wiruswa"}' \
    http://localhost:8080/api/pharmacyLetters)

    echo $json | grep "may not be null"

}



@test "no Mr." {
    json=$(curl -X POST -H "Content-Type:application/json" -d '{"firstNameDocter":"janyutthana","lastNameDocter":"wiruswa"}' \
    http://localhost:8080/api/pharmacyLetters)

    echo $json | grep "must match"

}


@test "name number error" {
    json=$(curl -X POST -H "Content-Type:application/json" -d '{"firstNameDocter":"5554","lastNameDocter":"wiruswa"}' \
    http://localhost:8080/api/pharmacyLetters)

    echo $json | grep "must match"

}

@test "all null" {
    json=$(curl -X POST -H "Content-Type:application/json" -d '{"}' \
    http://localhost:8080/api/pharmacyLetters)

    echo $json | grep "end-of-input "

}
