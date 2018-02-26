package com.example.demo;


import lombok.Data;
import javax.validation.constraints.*;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.util.Date;

@Data
@Entity
public class SentPatient {

    @Id @GeneratedValue Long sid;

    @NotNull
    private Date hostdate;

    @NotNull    @Pattern(regexp = "\\w{8,40}")
    private String namehost;

    //@NotNull
    @ManyToOne
    private PatientSave patientSave;

    //@NotNull
    @ManyToOne
    private UserLogin userLogin;

    private SentPatient(){}

    public SentPatient(Date hostdate, String namehost, PatientSave pid, UserLogin id){
        this.hostdate = hostdate;
        this.namehost = namehost;
        this.patientSave = pid;
        this.userLogin = id;

    }
}
