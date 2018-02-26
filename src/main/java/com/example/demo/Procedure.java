package com.example.demo;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.*;
import javax.persistence.OneToOne;
import javax.persistence.OneToMany;
import java.util.*;
import lombok.Data;
import com.example.demo.*;
import java.util.Set;
import javax.validation.constraints.*;

@Data
@Entity
@Table(name = "Procedure")
public class Procedure {

	@Id
	@GeneratedValue
	private Long id;
	@NotNull
	private Date time;
	@NotNull @Pattern(regexp = "\\w*")
  private String job;

	@NotNull
	@OneToOne
	private Patient patient;

	@NotNull
	@OneToOne
	private Nurse nurse;



	private Procedure(){}

	public Procedure(Nurse nurse,Date time, String job,Patient patient) {
		this.nurse = nurse;
		this.time = time;
		this.job = job;
		this.patient = patient;

	}
}
