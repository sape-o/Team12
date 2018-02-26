package com.example.demo;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import lombok.Data;


@Data
@Entity
public class SaveRoom {

	@Id
	@GeneratedValue
	private Long id;
	private Date dateIn ;
	private Date dateOut ;

	@ManyToOne
	private PatientSave patientsave;

	@ManyToOne
	private Room room;


	private SaveRoom() {}

	public SaveRoom(PatientSave patientsave, Room room, Date dateIn, Date dateOut) {
		this.patientsave = patientsave;
		this.room = room;
		this.dateIn = dateIn;
		this.dateOut = dateOut;
	}
}
