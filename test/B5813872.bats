#!/usr/bin/env bats

@test "B5813872 Input Data normal" {
  normal=$(curl -H "Content-Type: application/json" -X POST -d '{"saveroom":"http://localhost:8080/api/saveRooms/1","userlogin":"http://localhost:8080/api/userLogins/1","firstname":"oreo","lastname":"sapeO","perID":"1234567890123","tel":"0987654321","date":"2018-02-11T15:22:22.000+0000"}' http://localhost:8080/api/visits)
  echo $normal | grep "oreo"
}

@test "B5813872 fistname Is not notnull" {
  normal=$(curl -H "Content-Type: application/json" -X POST -d '{"saveroom":"http://localhost:8080/api/saveRooms/1","userlogin":"http://localhost:8080/api/userLogins/1","firstname":null,"lastname":"sapeO","perID":"1234567890123","tel":"0987654321","date":"2018-02-11T15:22:22.000+0000"}' http://localhost:8080/api/visits)
  echo $normal | grep "'may not be null"

}

@test "B5813872 Lastname can be only string" {
  normal=$(curl -H "Content-Type: application/json" -X POST -d '{"saveroom":"http://localhost:8080/api/saveRooms/1","userlogin":"http://localhost:8080/api/userLogins/1","firstname":"oreo","lastname":"12334","perID":"1234567890123","tel":"0987654321","date":"2018-02-11T15:22:22.000+0000"}' http://localhost:8080/api/visits)
  echo $normal | grep "must match"

}

@test "B5813872 Tel number == 0XXXX" {
  normal=$(curl -H "Content-Type: application/json" -X POST -d '{"saveroom":"http://localhost:8080/api/saveRooms/1","userlogin":"http://localhost:8080/api/userLogins/1","firstname":"oreo","lastname":"sapeO","perID":"1234567890123","tel":"1234567890","date":"2018-02-11T15:22:22.000+0000"}' http://localhost:8080/api/visits)
  echo $normal | grep "must match"
}

@test "B5813872 PerID is !=13" {
  normal=$(curl -H "Content-Type: application/json" -X POST -d '{"saveroom":"http://localhost:8080/api/saveRooms/1","userlogin":"http://localhost:8080/api/userLogins/1","firstname":"oreo","lastname":"sapeO","perID":"1","tel":"0987654321","date":"2018-02-11T15:22:22.000+0000"}' http://localhost:8080/api/visits)
  echo $normal | grep "must match"
}
