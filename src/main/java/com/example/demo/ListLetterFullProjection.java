package com.example.demo;

import org.springframework.data.rest.core.config.Projection;
import java.util.Set;

@Projection(types = {PharmacyLetter.class})
public interface ListLetterFullProjection {
	String getFirstNameDocter();
	String getLastNameDocter();
	String getTimeTakePerDay();
	String getTakeTime();
	String getComment();
    Set<ListLetter> getlistLetter();
}