package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class CountBank {

    @Id
    @GeneratedValue
    private Long id;
    private String idCard;
    private String name;
    private Integer line;

    private CountBank() {
    }

    public CountBank(Long id, String idCard, String name, Integer line) {
        this.id = id;
        this.idCard = idCard;
        this.name = name;
        this.line = line;
    }

    public CountBank(String idCard, String name, Integer line) {
        this.idCard = idCard;
        this.name = name;
        this.line = line;
    }
}