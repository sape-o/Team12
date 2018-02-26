#!/usr/bin/env bats

@test "+ B5803552 ระบบติดตามอาการผู้ป่วย" {
json=$(curl -X POST -H "Content-Type: application/json" \
-d '{"patientSave" : "http://localhost:8080/api/patientSaves/1" , "userLogin" : "http://localhost:8080/api/userLogins/2",
      "datetime" : "2018-02-10T18:48:03.481+0000",
      "sad" : "บางครั้ง",
      "worry" : "แย่",
      "happy" : "แย่",
      "pain" : "แย่",
      "tried" : "บางครั้ง",
      "squeamish" : "ค่อนข้างน่าเป็นห่วง",
      "sleepy" : "แย่",
      "anorexia" : "ค่อนข้างน่าเป็นห่วง",
      "tried2" : "บ่อย",
      "details" : "ดื่มน้ำมากๆ",
      "f_patient" : "tewich Promkong",
      "f_nurse" : "janyutthanawiruswa"}' \
http://localhost:8080/api/followPs)

    echo $json | grep "href"
}

@test "- sad NotNull B5803552 ระบบติดตามอาการผู้ป่วย" {
json=$(curl -X POST -H "Content-Type: application/json" \
-d '{"patientSave" : "http://localhost:8080/api/patientSaves/1" , "userLogin" : "http://localhost:8080/api/userLogins/2",
      "datetime" : "2018-02-10T18:48:03.481+0000",
     
      "worry" : "แย่",
      "happy" : "แย่",
      "pain" : "แย่",
      "tried" : "บางครั้ง",
      "squeamish" : "ค่อนข้างน่าเป็นห่วง",
      "sleepy" : "แย่",
      "anorexia" : "ค่อนข้างน่าเป็นห่วง",
      "tried2" : "บ่อย",
      "details" : "ดื่มน้ำมากๆ",
      "f_patient" : "tewich Promkong",
      "f_nurse" : "janyutthanawiruswa"}' \
http://localhost:8080/api/followPs)
   echo $json | grep "may not be null"

}

@test "- incorrect of type[String not Int] B5803552 ระบบติดตามอาการผู้ป่วย" {
json=$(curl -X POST -H "Content-Type: application/json" \
-d '{"patientSave" : "http://localhost:8080/api/patientSaves/1" , "userLogin" : "http://localhost:8080/api/userLogins/2",
      "datetime" : "2018-02-10T18:48:03.481+0000",
      "sad" : "1234",
      "worry" : "แย่",
      "happy" : "แย่",
      "pain" : "แย่",
      "tried" : "บางครั้ง",
      "squeamish" : "ค่อนข้างน่าเป็นห่วง",
      "sleepy" : "แย่",
      "anorexia" : "ค่อนข้างน่าเป็นห่วง",
      "tried2" : "บ่อย",
      "details" : "ดื่มน้ำมากๆ",
      "f_patient" : "tewich Promkong",
      "f_nurse" : "janyutthanawiruswa"}' \
http://localhost:8080/api/followPs)
    echo $json | grep "must match"


}

@test "- incorrect of data[too short] B5803552 ระบบติดตามอาการผู้ป่วย" {
json=$(curl -X POST -H "Content-Type: application/json" \
-d '{"patientSave" : "http://localhost:8080/api/patientSaves/1" , "userLogin" : "http://localhost:8080/api/userLogins/2",
      "datetime" : "2018-02-10T18:48:03.481+0000",
      "sad" : "บางครั้ง",
      "worry" : "A",
      "happy" : "แย่",
      "pain" : "แย่",
      "tried" : "บางครั้ง",
      "squeamish" : "ค่อนข้างน่าเป็นห่วง",
      "sleepy" : "แย่",
      "anorexia" : "ค่อนข้างน่าเป็นห่วง",
      "tried2" : "บ่อย",
      "details" : "ดื่มน้ำมากๆ",
      "f_patient" : "tewich Promkong",
      "f_nurse" : "janyutthanawiruswa"}' \
http://localhost:8080/api/followPs)
    echo $json | grep "must match"


}

@test "- incorrect of data[too long] B5803552 ระบบติดตามอาการผู้ป่วย" {
json=$(curl -X POST -H "Content-Type: application/json" \
-d '{"patientSave" : "http://localhost:8080/api/patientSaves/1" , "userLogin" : "http://localhost:8080/api/userLogins/2",
      "datetime" : "2018-02-10T18:48:03.481+0000",
      "sad" : "บางครั้ง",
      "worry" : "แย่",
      "happy" : "AAAAABBBBBCCCCCDDDDDFFFFF",
      "pain" : "แย่",
      "tried" : "บางครั้ง",
      "squeamish" : "ค่อนข้างน่าเป็นห่วง",
      "sleepy" : "แย่",
      "anorexia" : "ค่อนข้างน่าเป็นห่วง",
      "tried2" : "บ่อย",
      "details" : "ดื่มน้ำมากๆ",
      "f_patient" : "tewich Promkong",
      "f_nurse" : "janyutthanawiruswa"}' \
http://localhost:8080/api/followPs)
    echo $json | grep "must match"

}
