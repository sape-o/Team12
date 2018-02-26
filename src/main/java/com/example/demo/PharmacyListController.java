package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class PharmacyListController {

    @Autowired PharmacyListRepository pharmacyListRepository;


    @RequestMapping(path = "/api/pharmacyLists", method = RequestMethod.GET)
    public ResponseEntity getYa() {
        return new ResponseEntity<>(this.pharmacyListRepository.findAll(), HttpStatus.OK);
    }

}
