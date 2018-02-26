package com.example.demo;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity

public class UserLogin {

    @Id
    @GeneratedValue long id;

    private String userId;  //ไอดี
    private String userPassword;    //รหัส
    private String userFirstName;   //ชื่อ
    private String userLastName;    //นาสกุล
    private String userPersonId;    //หมายเลขบัตรประชาชน
    private String userRole;    //สถานะ

    private UserLogin(){}

    public UserLogin(String userId, String userPassword, String userFirstName, String userLastName, String userPersonId, String userRole){

        this.userId = userId;
        this.userPassword = userPassword;
        this.userFirstName = userFirstName;
        this.userLastName = userLastName;
        this.userPersonId = userPersonId;
        this.userRole = userRole;


    }
}
