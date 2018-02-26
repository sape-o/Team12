package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.config.Projection;

@Projection(name = "GetNurse", types = { Nurse.class })
interface GetNurse {

    Long getId();
    String getFirstName();
    String getLastName();
    String getWard();

}
