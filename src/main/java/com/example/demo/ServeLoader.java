package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class ServeLoader implements CommandLineRunner {
	
	@Autowired private ServeDishRepository serveDishRepository;
	@Autowired private ServeDrinkRepository serveDrinkRepository;
	@Autowired private ServeDessertRepository serveDessertRepository;
	// @Autowired private ServeMenuRepository serveMenuRepository;
	@Autowired private UserLoginRepository userLoginRepository;
	@Autowired private PatientSaveRepository patientSaveRepository;
    
	@Override
	public void run(String... strings) throws Exception {
		
		this.serveDishRepository.save(new ServeDish("Chicken Galangal Soup"));
		this.serveDishRepository.save(new ServeDish("Boiled Vegetable Soup"));
		this.serveDishRepository.save(new ServeDish("Seafood Curry in Coconut"));

		this.serveDrinkRepository.save(new ServeDrink("Iced White Chocolate Mocha"));
		this.serveDrinkRepository.save(new ServeDrink("Organic Whole Milk"));
		this.serveDrinkRepository.save(new ServeDrink("Martini"));

		this.serveDessertRepository.save(new ServeDessert("Poppyseed Cake With Passion-fruit Curd"));
		this.serveDessertRepository.save(new ServeDessert("Butterfinger Cookie Dough Cheesecake Bars"));
		this.serveDessertRepository.save(new ServeDessert("Chocolate And Orange Cookies With Cream Cheese Filling"));

		this.userLoginRepository.save(new UserLogin("a", "a", "Tony", "Stark", "0000000000000", "Nutritionist"));
		this.userLoginRepository.save(new UserLogin("b", "b", "Wanda", "Maximoff", "0000000000000", "Financer"));

		this.patientSaveRepository.save(new PatientSave("Akane", "Tsunemori", "0000000000001", "0", "163", "49", "A", "0", "Inspector", "Single", "+6600000000", "Normal", "Milk")); 
		this.patientSaveRepository.save(new PatientSave("Jouji", "Saiga", "0000000000002", "0", "178", "69", "B", "0", "Analyst", "Married", "+6600000000", "Normal", "Banana"));
	}
}