package com.example.demo;

import lombok.Data;

import javax.persistence.*;
import java.util.Set;
import java.util.Date;

@Data
@Entity
@Table(name = "diagnose")
public class Diagnose {
    @Id
    @GeneratedValue
    private Long did;
    private Date datetime;
	private String blood;
    private String urin;
    private String spinal_cord;
    private String infection;
    private String microbiological_culture;
    private String x_sray;
    private String ultraSound;
    private String mri;
    private String biopsy;
    private String autopsy;

    private String d_patient;
   private String d_doctor;

    @ManyToOne
    @JoinColumn(name = "PatientSave_id")
    private PatientSave patientSave;
    
    @ManyToOne
    @JoinColumn(name = "UserLogin_id")
    private UserLogin userLogin;

    


    private Diagnose(){}

    public Diagnose(Date datetime, String blood, String urin, String spinal_cord, String infection,
                    String microbiological_culture, String x_sray, String ultraSound, String mri,
                    String biopsy, String autopsy, PatientSave patientSave, UserLogin userLogin,String d_patient,String d_doctor){
        
        this.datetime = datetime;
        this.blood = blood;
        this.urin = urin;
        this.spinal_cord = spinal_cord;
        this.infection = infection;
        this.microbiological_culture = microbiological_culture;
        this.x_sray = x_sray;
        this.ultraSound = ultraSound;
        this.mri = mri;
        this.biopsy = biopsy;
        this.autopsy = autopsy;
        this.userLogin = userLogin;
        this.patientSave = patientSave;
        this.d_patient = d_patient;
        this.d_doctor = d_doctor;
     
        
    }
}
