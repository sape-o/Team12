package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.config.Projection;

@Projection(name = "GetPatient", types = { PatientSave.class })
interface GetPatient {

     Long getPid();

     String getFirstName(); //ชื่อ
     String getPatientLastName(); //นามสกุล
     String getPatientPersonId(); //รหัสบัตรประชาชน
     String getPatientAge(); //อายุ
     String getPatientHight();    //สูง
     String getPatientWeight();   //น้ำหนัก
     String getPatientBloodtype();    //กรุ๊ปเลือด
     String getPatientAddress();  //ที่อยู่
     String getPatientCareer();   //อาชีพ
     String getPatientStatus();   //สถานะ
     String getPatientPhone();    //หมายเลขโทรศัพท์
     String getPatientSymptom();  //อาการ
     String getAllergy();


}
//test
