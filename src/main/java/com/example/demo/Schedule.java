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

@Data
@Entity
@Table(name = "Schedule")
public class Schedule {

	@Id
	@GeneratedValue
	private Long id;
  private String department;
	private Date time;
  private String timeType;

	@OneToOne
	private Nurse nurse;



	private Schedule(){}

	public Schedule(Nurse nurse,String department, Date time, String timeType) {
		this.nurse = nurse;
		this.department = department;
		this.time = time;
		this.timeType = timeType;
	}
}
