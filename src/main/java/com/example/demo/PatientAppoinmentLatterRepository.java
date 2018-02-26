package com.example.demo;

import org.springframework.data.repository.CrudRepository;

import java.util.Set;

public interface PatientAppoinmentLatterRepository extends CrudRepository<PatientAppoinmentLatter, Long> {
		Set<PatientAppoinmentLatter> findByPatient(PatientSave p); 
}