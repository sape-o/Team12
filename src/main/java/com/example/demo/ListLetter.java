package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import lombok.Data;

@Data
@Entity
public class ListLetter {


    @Id
    @GeneratedValue
    private Long id;
    
    @OneToOne
    private PharmacyList pharmacyList;
    private Integer amout;
    
    private ListLetter() {}

    public ListLetter(PharmacyList pharmacyList, Integer amout) {
        this.pharmacyList = pharmacyList;
        this.amout = amout;
    }
}