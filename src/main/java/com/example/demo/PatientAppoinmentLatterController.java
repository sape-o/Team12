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
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.text.ParseException;

@Controller
public class PatientAppoinmentLatterController {

    @Autowired PatientSaveRepository patientSaveRepository;
    @Autowired PatientAppoinmentLatterRepository patientAppoinmentLatterRepository;

    @ResponseBody
    @RequestMapping(path = "/saveBainut/{id}/{fD}/{lD}/{dept}/{date}/{time}/{prac}/{cmnt}", method = RequestMethod.GET)
    public String saveBainut(@PathVariable Long id,
                        @PathVariable String fD,
                        @PathVariable String lD,
                        @PathVariable String dept,
                        @PathVariable String date,
                        @PathVariable String time,
                        @PathVariable String prac,
                        @PathVariable String cmnt
     
                        )throws ParseException {

	    DateFormat newDate = new SimpleDateFormat("yyyy-MM-dd");
            Date xx = newDate.parse(date);
        DateFormat newTime = new SimpleDateFormat("hh:mm"); 
            Date xxx = newTime.parse(time);

        PatientSave p = this.patientSaveRepository.findOne(id);
        PatientAppoinmentLatter pal = new PatientAppoinmentLatter(fD, lD, dept , xx, xxx, prac, cmnt);
		pal.setPatient(p);
        this.patientAppoinmentLatterRepository.save(pal);

        return "{\"status\":\"Saved\"}";
    }

	@ResponseBody
    @RequestMapping(path = "/findBaiNutByPatientSaveId/{id}", method = RequestMethod.GET)
    public ResponseEntity fBainut(@PathVariable Long id) {
        PatientSave p = this.patientSaveRepository.findOne(id);
		return new ResponseEntity<>(this.patientAppoinmentLatterRepository.findByPatient(p), HttpStatus.OK);
    }
}