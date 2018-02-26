package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.*;

import java.util.Date;

import com.example.demo.PatientSave;
import lombok.Data;
import lombok.Setter;
import java.util.Set;

@Data
@Entity
public class PatientAppoinmentLatter {

	private @Id @GeneratedValue Long id;
	private String FirstNameDocter;
	private String LastNameDocter;
	private String Department;
	private Date DateOfAppointment;
	private Date TimeOfAppointment;
	private String Practice;
	private String Comment;

	@Setter
	@ManyToOne
    private PatientSave patient;

	private PatientAppoinmentLatter() {}

	public PatientAppoinmentLatter(String FirstNameDocter, String LastNameDocter, String Department , Date DateOfAppointment , Date TimeOfAppointment,String Practice,String Comment) {
		this.FirstNameDocter = FirstNameDocter;
		this.LastNameDocter = LastNameDocter;
		this.Department = Department;
		this.DateOfAppointment = DateOfAppointment;
		this.TimeOfAppointment = TimeOfAppointment;
		this.Practice = Practice;
		this.Comment = Comment;
	}
}