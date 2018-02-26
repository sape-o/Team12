package com.example.demo;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;


//@RepositoryRestResource(exported = false)
@RepositoryRestResource(excerptProjection = GetPatient.class)
public interface PatientSaveRepository extends CrudRepository<PatientSave, Long> {
    PatientSave findByFirstName(
            @Param("FirstName") String firstName


    );

    PatientSave findByPid(
            @Param("Pid") Long pid


    );
}
