package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import java.util.*;

@Controller
public class ListLetterController {

    @Autowired PatientRepository patientRepository;
    @Autowired PharmacyListRepository pharmacyListRepository;
    @Autowired ListLetterRepository listLetterRepository;
    @Autowired PharmacyLetterRepository pharmacyLetterRepository;

    @ResponseBody
    @RequestMapping(path = "/saveJudYa/{id}/{fD}/{lD}/{ya}/{date}/{time}/{prac}", method = RequestMethod.GET)
    public String saveJudYa(@PathVariable Long id,
                            @PathVariable String fD,
                            @PathVariable String lD,
                            @PathVariable String ya,
                            @PathVariable String date,
                            @PathVariable String time,
                            @PathVariable String prac) {
        String[] arraySelected = ya.split("(?<=\\G\\d,\\d),");
        // Set of listYa
        Set<ListLetter> lyaSet = new HashSet<>();
        ListLetter lL;
        for(String eachYa : arraySelected){
            String[] yaArray = eachYa.split(",");
            // Find Ya First
            PharmacyList pl = this.pharmacyListRepository.findOne(Long.parseLong(yaArray[0]));
            // Save Ya and Amount
            lL = new ListLetter(pl, Integer.parseInt(yaArray[1]));
            this.listLetterRepository.save(lL);
            // Put Ya and Amount obj to baiYa
            lyaSet.add(lL);
        }
		// baiYa
       	PharmacyLetter pl = new PharmacyLetter(fD,lD,date,time,prac,lyaSet);
        this.pharmacyLetterRepository.save(pl);

        Patient p = this.patientRepository.findOne(id);
        // Get existed baiYa
        Set<PharmacyLetter>baiYa = new HashSet<PharmacyLetter>(p.getYal());
        baiYa.add(pl);
        p.setYal(baiYa);

        this.patientRepository.save(p);
        return "{\"status\":\"Saved\"}";
    }
}
