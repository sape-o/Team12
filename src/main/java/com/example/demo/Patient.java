package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.*;
import javax.persistence.OneToMany;
import java.util.Set;
import java.util.HashSet;
import lombok.Getter;
import lombok.Setter;

import lombok.Data;

@Data
@Entity
public class Patient {

	private @Id @GeneratedValue Long id;
	private String firstName;
	private String lastName;
	private String birthDay;
	private int age;
	private String bloodType;
	private String nationality;
	private String rr1;
	
	@Setter
	@OneToMany
    private Set<PatientAppoinmentLatter> pal;
	@Setter
	@OneToMany
    private Set<PharmacyLetter> yal;

	private Patient() {}

	public Patient(String firstName, String lastName,String birthDay,int age, String bloodType, String nationality,String rr1, Set<PatientAppoinmentLatter> pal,Set<PharmacyLetter> yal) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.birthDay = birthDay;
		this.age = age;
		this.bloodType = bloodType;
		this.nationality = nationality;
		this.rr1 = rr1;
		this.pal = pal;
		this.yal = yal;
	}
}