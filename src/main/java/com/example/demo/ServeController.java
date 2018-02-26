package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class ServeController {

    @Autowired ServeDishRepository serveDishRepository;
    @Autowired ServeDrinkRepository serveDrinkRepository;
    @Autowired ServeDessertRepository serveDessertRepository;
    @Autowired ServeMenuRepository serveMenuRepository;
    @Autowired UserLoginRepository uerLoginRepository;
    @Autowired PatientSaveRepository patientSaveRepository;

    @ResponseBody
    @RequestMapping(path = "/dish_id/{dishId}/drink_id/{drinkId}/dessert_id/{dessertId}/patient_id/{patientId}", method = RequestMethod.GET)
    public String serve(
        @PathVariable Long dishId,
        @PathVariable Long drinkId,
        @PathVariable Long dessertId,
        @PathVariable Long patientId
    ) {
        ServeDish dish = this.serveDishRepository.findOne(dishId);
        ServeDrink drink = this.serveDrinkRepository.findOne(drinkId);
        ServeDessert dessert = this.serveDessertRepository.findOne(dessertId);
        UserLogin nutritionist = this.uerLoginRepository.findOne(patientId);
        PatientSave patient = this.patientSaveRepository.findOne(patientId);
        ServeMenu menu = new ServeMenu(dish, drink, dessert, nutritionist, patient);
        this.serveMenuRepository.save(menu);
        return "{\"status\":\"served\"}";
    }
}