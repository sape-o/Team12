package com.example.demo;

import lombok.Data;
import javax.persistence.*;
import java.util.Set;
import java.util.Date;
import javax.validation.constraints.*;

@Data
@Entity
@Table(name = "visit")
public class Visit {
    @Id
    @GeneratedValue
    private Long id;

    @NotNull    @Pattern(regexp = "\\w*")
    private String firstname;

    @NotNull    @Pattern(regexp = "\\D*")
    private String lastname;

    @NotNull    @Pattern(regexp = "\\d{13}")
    private String perID;

    @NotNull    @Pattern(regexp = "[0]\\d{9}")
    private String tel;
    @NotNull
    private Date date;

	@OneToOne
	private	SaveRoom saveroom;

  @ManyToOne
  private UserLogin userlogin;

    private Visit(){}

    public Visit(SaveRoom saveroom,UserLogin userlogin,String firstname,String lastname,String perID,String tel, Date date){
        this.saveroom = saveroom;
        this.userlogin = userlogin;
        this.firstname = firstname;
        this.lastname = lastname;
        this.perID = perID;
        this.tel = tel;
        this.date = date;
    }
}
