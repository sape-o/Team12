package com.example.demo;
import lombok.Data;
import javax.persistence.*;
import java.util.Set;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Data
@Entity
public class Nurse {
  	@Id
	@GeneratedValue
	private Long id;
	private String firstName;
	private String lastName;
	private String ward;

  	@OneToOne
	private Schedule schedule;


  private Nurse() {}

	public Nurse(String firstName, String lastName, String ward) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.ward = ward;
	}
}
