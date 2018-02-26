package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class PharmacyList {


    @Id
    @GeneratedValue
    private Long id;
    private String pharmacyName;
    private Integer price;

    private PharmacyList() {}

    public PharmacyList(String pharmacyName, Integer price) {
        this.pharmacyName = pharmacyName;
        this.price = price;
    }
}