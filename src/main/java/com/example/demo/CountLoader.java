package com.example.demo;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class CountLoader implements CommandLineRunner {

	@Autowired CountBillRepository billRepository;
	@Autowired RoomRepository roomRepository;
	@Autowired SaveRoomRepository roomFormRepository;

	@Autowired UserLoginRepository financerRepository;
	@Autowired PatientSaveRepository patientRepository;
	@Autowired CountBankRepository bankRepository;

	@Override
	public void run(String... strings) throws Exception {
		this.bankRepository.save(new CountBank("0000000000001", "Akane", 1000000));
		this.bankRepository.save(new CountBank("0000000000002", "Jouji", 1000000));
	}
}