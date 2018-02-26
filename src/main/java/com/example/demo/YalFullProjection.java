package com.example.demo;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.rest.core.config.Projection;
import java.util.Set;

@Projection(types = {ListLetter.class})
public interface YalFullProjection {
	Integer getAmout();
    @Value("#{target.getPharmacyList().getPharmacyName()}")
    String getName();
    //Set<PharmacyList> getPharmacyList();
}