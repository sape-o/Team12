package com.example.demo;

import org.springframework.data.repository.query.Param;
import org.springframework.data.repository.CrudRepository;

public interface CountBankRepository extends CrudRepository<CountBank, Long> {

    // http://localhost:8080/api/countBanks/search/findByIdCard?IdCard=0000000000001
    CountBank findByIdCard(
        @Param("IdCard") String idCard 
    );

    // http://localhost:8080/api/countBanks/search/findByName?Name=Akane
    CountBank findByName(
        @Param("Name") String name 
    );
}