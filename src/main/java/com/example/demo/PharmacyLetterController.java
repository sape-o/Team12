package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import java.util.*;

@Controller
public class PharmacyLetterController {

   @Autowired PatientSaveRepository patientSaveRepository;
   @Autowired PharmacyLetterRepository pharmacyLatterRepository;

   @ResponseBody
   @RequestMapping(path = "/findBaiYaByPatientSaveId/{id}", method = RequestMethod.GET)
   public ResponseEntity fBaiya(@PathVariable Long id) {
        PatientSave p = this.patientSaveRepository.findOne(id);
		return new ResponseEntity<>(this.pharmacyLatterRepository.findByPatient(p), HttpStatus.OK);
   }
}
