package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.*;
import javax.validation.constraints.*;

import lombok.Data;
import lombok.Setter;
import java.util.Set;
import com.example.demo.PatientSave;

@Data
@Entity
public class PharmacyLetter {

	private @Id @GeneratedValue Long id;
	@NotNull @Pattern (regexp = "Mr.\\w*")
	private String firstNameDocter;
	private String lastNameDocter;
	private String timeTakePerDay;
	private String takeTime;
	private String comment;

	@Setter
	@ManyToOne
    private PatientSave patient;

	@OneToMany
	private Set<ListLetter> listLetter;

	private PharmacyLetter() {}

	public PharmacyLetter(String firstNameDocter, String lastNameDocter, String takeTime, String timeTakePerDay, String comment, Set<ListLetter> listLetter) {
		this.firstNameDocter = firstNameDocter;
		this.lastNameDocter = lastNameDocter;
		this.timeTakePerDay = timeTakePerDay;
		this.takeTime = takeTime;
		this.comment = comment;
		this.listLetter = listLetter;
	}
}