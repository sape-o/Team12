package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.Set;

@RepositoryRestResource(excerptProjection = ListLetterFullProjection.class)
public interface PharmacyLetterRepository extends CrudRepository<PharmacyLetter, Long> {
	Set<PharmacyLetter> findByPatient(PatientSave p); 
}