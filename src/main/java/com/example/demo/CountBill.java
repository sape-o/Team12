package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.validation.constraints.Pattern;

import lombok.Data;

@Data
@Entity
public class CountBill {

    @Id @GeneratedValue
    private String id;
    private Integer cost;
    @Pattern(regexp = "^[a-zA-Z\\s]{2,20}$", message = "unexpected name format")
    private String familyName;
    @Pattern(regexp = "^0[689]-\\d{4}-\\d{4}$", message = "unexpected phone format")
    private String familyPhone;
    @Pattern(regexp = "^\\w*$", message = "unexpected line format")
    private String familyLine;
    @Pattern(regexp = "^(Bangkok|Kasikorn|Krungthai)$", message = "unexpected bank format")
    private String familyBankName;
    @Pattern(regexp = "^\\d{10}$", message = "unexpected account format")
    private String familyBankAccount;

    // @ManyToOne
    // private UserLogin financer;

    @ManyToOne
    private PatientSave patient;

    @OneToOne
    private CountBank bank;

    @OneToOne
    private SaveRoom room;

    private CountBill() {}

    public CountBill(Integer cost, PatientSave patient, CountBank bank, SaveRoom room) {
        this.cost = cost;
        this.patient = patient;
        this.bank = bank;
        this.room = room;
    }

    public CountBill(Integer cost, String familyName, String familyPhone, String familyLine, String familyBankName, String familyBankAccount, PatientSave patient, SaveRoom room) {
        this.cost = cost;
        this.familyName = familyName;
        this.familyPhone = familyPhone;
        this.familyLine = familyLine;
        this.familyBankName = familyBankName;
        this.familyBankAccount = familyBankAccount;
        this.patient = patient;
        this.room = room;
    }
}