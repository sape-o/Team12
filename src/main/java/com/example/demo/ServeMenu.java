package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import java.util.Date;

import lombok.Data;

@Data
@Entity
public class ServeMenu {

    @Id @GeneratedValue
	private Long id;
    private Date meal;

    @ManyToOne
    private ServeDish dish;

    @ManyToOne
    private ServeDrink drink;

    @ManyToOne
    private ServeDessert dessert;
    
    @ManyToOne
    private UserLogin dietitian;

    @ManyToOne
    private PatientSave patient;

    private ServeMenu() {}

    public ServeMenu(ServeDish dish, ServeDrink drink, ServeDessert dessert, UserLogin dietitian, PatientSave patient) { 
        this.meal = new Date();
        this.dish = dish;
        this.drink = drink;
        this.dessert = dessert;
        this.dietitian = dietitian;
        this.patient = patient;
    }
}