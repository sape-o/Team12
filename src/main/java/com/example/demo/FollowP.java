package com.example.demo;

import lombok.Data;

import javax.persistence.*;
import java.util.Set;
import java.util.Date;

import javax.validation.constraints.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

@Data
@Entity
@Table(name = "FollowP")
public class FollowP {
    @Id
    @GeneratedValue
    private Long id;

    @NotNull
    private Date datetime;
    
    @NotNull@Pattern(regexp = "\\D+") //test : not null, test : incorrect of type 
	private String sad;

    @NotNull@Pattern(regexp = "\\D{2,20}")//incorrect of data[too short]
    private String worry;

   @NotNull @Pattern(regexp = "\\D{2,20}")//incorrect of data[too long]
    private String happy;
    @NotNull@Pattern(regexp = "\\D{2,20}")
    private String pain;
    @NotNull@Pattern(regexp = "\\D{2,20}")
    private String tried;
    @NotNull@Pattern(regexp = "\\D{2,20}")
    private String squeamish;
    @NotNull@Pattern(regexp = "\\D{2,20}")
    private String sleepy;
    @NotNull@Pattern(regexp = "\\D{2,20}")
    private String anorexia;
    @NotNull@Pattern(regexp = "\\D{2,20}")
    private String tried2;
    @NotNull@Pattern(regexp = "\\D{2,20}")
    private String details;
   
      private String f_patient;
     private String f_nurse;
   
  

    @ManyToOne
    @JoinColumn(name = "PatientSave_id")
    private PatientSave patientSave;
    

    @ManyToOne
    @JoinColumn(name = "UserLogin_id")
    private UserLogin userLogin;

   /* @ManyToOne
    @JoinColumn(name = "SaveRoom_id")
    private SaveRoom saveRoom;*/

    


    private FollowP(){}

    public FollowP(Date datetime, String sad, String worry, String happy, String pain,
                    String tried, String squeamish, String sleepy, String anorexia,String tried2,String details, 
                   PatientSave patientSave, UserLogin userLogin,String f_patient,String f_nurse){
    
        this.datetime = datetime;
        this.sad = sad;
        this.worry = worry;
        this.happy = happy;
        this.pain = pain;
        this.tried = tried;
        this.squeamish = squeamish;
        this.sleepy = sleepy;
        this.anorexia = anorexia;
        this.tried2 = tried2;
        this.details = details;

        
        this.userLogin = userLogin;
        this.patientSave = patientSave;
        this.f_patient = f_patient;
        this.f_nurse = f_nurse;
        
    }
}
