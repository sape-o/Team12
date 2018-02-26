package com.example.demo;

import lombok.Data;

import javax.persistence.*;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.validation.constraints.*;


@Data
@Entity

public class PatientSave {

    @Id
    @GeneratedValue
    private Long pid;

    @NotNull    @Pattern(regexp = "\\D*")
    private String firstName; //ชื่อ
    @NotNull    @Pattern(regexp = "\\D*")
    private String patientLastName; //นามสกุล
    @NotNull    @Pattern(regexp = "\\d{13}")
    private String patientPersonId; //รหัสบัตรประชาชน
    @NotNull    @Pattern(regexp = "\\d*")
    private String patientAge; //อายุ

    private String patientSexx;

    @NotNull    @Pattern(regexp = "\\d*")
    private String patientHight;    //สูง
    @NotNull    @Pattern(regexp = "\\d*")
    private String patientWeight;   //น้ำหนัก
    @NotNull
    private String patientBloodtype;    //กรุ๊ปเลือด
    @NotNull
    private String patientAddress;  //ที่อยู่
    @NotNull
    private String patientCareer;   //อาชีพ
    @NotNull
    private String patientStatus;   //สถานะ
    @NotNull    @Pattern(regexp = "[+66]\\d*")
    private String patientPhone;    //หมายเลขโทรศัพท์
    @NotNull
    private String patientSymptom;  //อาการ
    @NotNull
    private String allergy;


    @ManyToOne
    private UserLogin userLogin;



    private PatientSave(){}

    public PatientSave(String firstName
            , String patientLastName, String patientPersonId, String patientAge, String patientSexx
            , String patientHight, String patientWeight, String patientBloodtype, String patientAddress, String patientCareer,
                       String patientStatus, String patientPhone, String patientSymptom, String allergy,UserLogin id
    ){
        this.firstName = firstName;
        this.patientLastName = patientLastName;
        this.patientPersonId = patientPersonId;
        this.patientAge = patientAge;
        this.patientSexx = patientSexx;
        this.patientHight = patientHight;
        this.patientWeight = patientWeight;
        this.patientBloodtype = patientBloodtype;
        this.patientAddress = patientAddress;
        this.patientCareer = patientCareer;
        this.patientStatus = patientStatus;
        this.patientPhone = patientPhone;
        this.patientSymptom = patientSymptom;
        this.allergy = allergy;
        this.userLogin = id;





    }
    public PatientSave(
        String firstName,
        String patientLastName,
        String patientPersonId,
        String patientAge, 
        String patientHight,
        String patientWeight, 
        String patientBloodtype,
        String patientAddress,
        String patientCareer,
        String patientStatus,
        String patientPhone,
        String patientSymptom,
        String allergy ) {
        this.firstName = firstName;
        this.patientLastName = patientLastName;
        this.patientPersonId = patientPersonId;
        this.patientAge = patientAge;
        this.patientHight = patientHight;
        this.patientWeight = patientWeight;
        this.patientBloodtype = patientBloodtype;
        this.patientAddress = patientAddress;
        this.patientCareer = patientCareer;
        this.patientStatus = patientStatus;
        this.patientPhone = patientPhone;
        this.patientSymptom = patientSymptom;
        this.allergy = allergy;
    }

}
