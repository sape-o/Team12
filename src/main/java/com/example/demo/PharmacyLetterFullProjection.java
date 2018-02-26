package com.example.demo;

import org.springframework.data.rest.core.config.Projection;
import java.util.Set;

// Pal Pull ListLetter
@Projection(types = {PatientSave.class})
public interface PharmacyLetterFullProjection {
    Set<PharmacyLetter> getPal();
}