package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class CountController {

	@Autowired CountBillRepository billRepository;
	@Autowired PharmacyLetterRepository medicineFromRepository;
	@Autowired RoomRepository roomRepository;
	@Autowired SaveRoomRepository roomFormRepository;

	@Autowired UserLoginRepository financerRepository;
	@Autowired PatientSaveRepository patientRepository;
	@Autowired CountBankRepository bankRepository;

	@ResponseBody
	@RequestMapping(path = "/patient_id/{patientId}/sum/{sum}/bank_id/{bankId}/room_id/{roomID}", method = RequestMethod.GET)
	public String count(@PathVariable Long patientId, @PathVariable Integer sum,  @PathVariable Long bankId, @PathVariable Long roomID) {
		
		CountBank bank = this.bankRepository.findOne(bankId);
		SaveRoom room = this.roomFormRepository.findOne(roomID);
		PatientSave patient = this.patientRepository.findOne(patientId);
        this.billRepository.save(new CountBill(sum, patient, bank, room));
		return "{\"status\":\"counted\"}";
	}

	@ResponseBody
	@RequestMapping(path = "/bank_id/{bankId}/id_card/{idCard}/name/{name}/line/{line}", method = RequestMethod.GET)
	public String count2(@PathVariable Long bankId, @PathVariable String idCard, @PathVariable String name, @PathVariable Integer line) {
				
		this.bankRepository.save(new CountBank(bankId, idCard, name, line));
		return "{\"status\":\"counted\"}";
	}
	// http://localhost:8080/bank_id/1/id_card/0000000000001/name/Akane/line/9

	@ResponseBody
	@RequestMapping(path = "/family_name/{familyName}/family_phone/{familyPhone}/family_line/{familyLine}/family_bank_name/{familyBankName}/family_bank_account/{familyBankAccount}/patient_id/{patientId}/cost/{cost}/room_id/{roomID}", method = RequestMethod.GET)
	public String count3(@PathVariable String familyName, @PathVariable String familyPhone, @PathVariable String familyLine, @PathVariable String familyBankName, @PathVariable String familyBankAccount, @PathVariable Long patientId, @PathVariable Integer cost, @PathVariable Long roomID) {
				
		PatientSave patient = this.patientRepository.findOne(patientId);
		SaveRoom room = this.roomFormRepository.findOne(roomID);
		// CountBill temp = new CountBill(cost, familyName, familyPhone, familyLine, familyBankName, familyBankAccount, patient);
		this.billRepository.save(new CountBill(cost, familyName, familyPhone, familyLine, familyBankName, familyBankAccount, patient, room));
		return "{\"status\":\"counted\"}";
	}
}
