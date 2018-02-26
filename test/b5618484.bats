@test "B5618484: positive test cases" {

    json=$(curl --silent --request POST \
        --header "Content-Type: application/json" \
        --data "@data/c1.json" \
        http://localhost:8080/api/countBills)

    echo $json | grep "06-1234-5678"
}

@test "B5618484: unexpected phone format" {

    json=$(curl --silent --request POST \
        --header "Content-Type: application/json" \
        --data "@data/c2.json" \
        http://localhost:8080/api/countBills)

    echo $json | grep "unexpected phone format"
}

@test "B5618484: unexpected name format" {

    json=$(curl --silent --request POST \
        --header "Content-Type: application/json" \
        --data "@data/c3.json" \
        http://localhost:8080/api/countBills)

    echo $json | grep "unexpected name format"
}

@test "B5618484: unexpected account format" {

    json=$(curl --silent --request POST \
        --header "Content-Type: application/json" \
        --data "@data/c4.json" \
        http://localhost:8080/api/countBills)

    echo $json | grep "unexpected account format"
}

@test "B5618484: unexpected bank format" {

    json=$(curl --silent --request POST \
        --header "Content-Type: application/json" \
        --data "@data/c5.json" \
        http://localhost:8080/api/countBills)

    echo $json | grep "unexpected bank format"
}

@test "B5618484: unexpected line format" {

    json=$(curl --silent --request POST \
        --header "Content-Type: application/json" \
        --data "@data/c6.json" \
        http://localhost:8080/api/countBills)

    echo $json | grep "unexpected line format"
}