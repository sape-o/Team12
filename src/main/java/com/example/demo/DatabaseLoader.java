package com.example.demo;

import java.util.Set;
import java.util.HashSet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import com.example.demo.PatientAppoinmentLatter;
import org.springframework.stereotype.Controller;

//Pak
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
@Component

public class DatabaseLoader implements CommandLineRunner {
	private final UserLoginRepository userLoginRepository;

	private PatientSaveRepository patientSaveRepository;
	//	@Autowired PatientRepository patientRepository;
	//-----AE-------//
	@Autowired
	private PatientRepository repository;
   	private PharmacyListRepository pharmacyListRepository;
	private PharmacyLetterRepository pharmacyLetterRepository;
	private ListLetterRepository listLetterRepository;
//------------//
	@Autowired
	private RoomRepository  roomRepository;
	@Autowired
	private NurseRepository nurseRepository;
	private PatientAppoinmentLatterRepository paRepository;

	@Autowired
	private DiagnoseRepository diagnoseRepository;
	@Autowired
	SentPatientRepository sentPatientRepository;



	@Autowired
	public DatabaseLoader(NurseRepository nurseRepository,SentPatientRepository sentPatientRepository,
						 UserLoginRepository userLoginRepository,
						 PatientSaveRepository patientSaveRepository,
						 RoomRepository roomRepository,
						 PatientRepository repository, 
						 PatientAppoinmentLatterRepository paRepository,
						 PharmacyListRepository pharmacyListRepository,
						 PharmacyLetterRepository pharmacyLetterRepository,
						 ListLetterRepository listLetterRepository){
		this.userLoginRepository = userLoginRepository;
		this.patientSaveRepository = patientSaveRepository;
		this.roomRepository = roomRepository;
		this.repository = repository;
		this.paRepository = paRepository;
		this.nurseRepository = nurseRepository;
		this.sentPatientRepository = sentPatientRepository;
		//-----AE-------//
		this.repository = repository;
		this.pharmacyListRepository = pharmacyListRepository;
		this.pharmacyLetterRepository = pharmacyLetterRepository;
		this.listLetterRepository = listLetterRepository;
		//------------//
	}
	@Override
	public void run(String... strings) throws Exception {

		DateFormat newdate = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss");
		Date d1 = newdate.parse("26-02-2018 11:55:11");
		Date d2 = newdate.parse("01-01-2018 22:55:22");
		Date d3 = newdate.parse("11-02-2018 22:22:22");

		UserLogin userLogin = new UserLogin("tewich","1","Tewich","Promkong","1409901527796","Nurse");
		this.userLoginRepository.save(userLogin);
		UserLogin userLogin1 = new UserLogin("doctor","1234","janyutthana","wiruswa","1234567891234","Doctor");
		this.userLoginRepository.save(userLogin1);

		UserLogin userLogin2 = new UserLogin("oreo","oreo","hideki","hiroshi","1234567891234","Employee");
		this.userLoginRepository.save(userLogin2);
		UserLogin userLogin3 = new UserLogin("Financier","1","Guy","Promkong","1234567891234","Financier");
		this.userLoginRepository.save(userLogin3);
		UserLogin userLogin4 = new UserLogin("boss","1","Mom"," Promkong","1234567891234","หัวหน้าแผนก");
		this.userLoginRepository.save(userLogin4);
		UserLogin userLogin5 = new UserLogin("food","1","Dad"," Promkong","1234567891234","นักโภชนาการ");
		this.userLoginRepository.save(userLogin5);


		PatientSave patientSave = new PatientSave("tewich","Promkong","1409901525547","20","male","174","49","B","119",
				"Doctor","Single","+66934430113","cold","cold ",userLogin);
		PatientSave patientSave1 = new PatientSave("Phakphum"," Phinyodom","1409901525542","20","male","174","49","O","119",
				"Gamer","Single","+66898616466","cancer","cancer",userLogin1);
		PatientSave patientSave2 = new PatientSave("Lalisa"," Manoban","1409901525541","20","female","174","49","O","119",
				"Gamer","Married","+66898616455","diabetes","diabetes ",userLogin2);
		this.patientSaveRepository.save(patientSave);
		this.patientSaveRepository.save(patientSave1);
		this.patientSaveRepository.save(patientSave2);



		SentPatient  sent1 = new SentPatient(d3,"Banphaeo_Hospita",patientSave,userLogin);
		this.sentPatientRepository.save(sent1);

		Diagnose dn1 = new Diagnose(d1, "ตรวจเลือด1", "orange","ตรวจน้ำไขสันหลัง1","ตรวจเชื้อ1","ตรวจเพาะเชื้อ1", "x-sray1", "UltraSound1", "mri1","ตัดชิ้นเนื้อตรวจ1","ตรวจศพ1",patientSave,userLogin1,"คนไข้01","แพทย์01" );
		Diagnose dn2 = new Diagnose(d2, "ตรวจเลือด2", "orange","ตรวจน้ำไขสันหลัง2","ตรวจเชื้อ2","ตรวจเพาะเชื้อ2", "x-sray2", "UltraSound2", "mri2","ตัดชิ้นเนื้อตรวจ2","ตรวจศพ2",patientSave1,userLogin2,"คนไข้02","แพทย์02" );
		this.diagnoseRepository.save(dn1);
		this.diagnoseRepository.save(dn2);

		Room m1 = new Room("รวมชาย","1","เตียงธรรมดา",300);
		Room m2 = new Room("รวมชาย","2","เตียงธรรมดา",300);
		Room m3 = new Room("รวมชาย","3","เตียงไฟฟ้า",300);
		Room m4 = new Room("รวมชาย","4","เตียงไฟฟ้า",300);
		Room m5 = new Room("รวมชาย","5","เตียงธรรมดา",300);
		Room m6 = new Room("รวมชาย","6","เตียงไฟฟ้า",300);
		Room m7 = new Room("รวมชาย","7","เตียงไฟฟ้า",300);
		Room m8 = new Room("รวมชาย","8","เตียงธรรมดา",300);

		Room f1 = new Room("รวมหญิง","1","เตียงธรรมดา",300);
		Room f2 = new Room("รวมหญิง","2","เตียงธรรมดา",300);
		Room f3 = new Room("รวมหญิง","3","เตียงไฟฟ้า",300);
		Room f4 = new Room("รวมหญิง","4","เตียงไฟฟ้า",300);
		Room f5 = new Room("รวมหญิง","5","เตียงธรรมดา",300);
		Room f6 = new Room("รวมหญิง","6","เตียงไฟฟ้า",300);
		Room f7 = new Room("รวมหญิง","7","เตียงไฟฟ้า",300);
		Room f8 = new Room("รวมหญิง","8","เตียงธรรมดา",300);

		Room s1 = new Room("ห้องพิเศษ","1","เตียงไฟฟ้า",4000);
		Room s2 = new Room("ห้องพิเศษ","2","เตียงไฟฟ้า",4000);
		Room s3 = new Room("ห้องพิเศษ","3","เตียงไฟฟ้า",4000);
		Room s4 = new Room("ห้องพิเศษ","4","เตียงไฟฟ้า",4000);
		Room s5 = new Room("ห้องพิเศษ","5","เตียงไฟฟ้า",4000);
		Room s6 = new Room("ห้องพิเศษ","6","เตียงไฟฟ้า",4000);
		Room s7 = new Room("ห้องพิเศษ","7","เตียงไฟฟ้า",4000);
		Room s8 = new Room("ห้องพิเศษ","8","เตียงไฟฟ้า",4000);
		this.roomRepository.save(m1);
		this.roomRepository.save(m2);
		this.roomRepository.save(m3);
		this.roomRepository.save(m4);
		this.roomRepository.save(m5);
		this.roomRepository.save(m6);
		this.roomRepository.save(m7);
		this.roomRepository.save(m8);

		this.roomRepository.save(f1);
		this.roomRepository.save(f2);
		this.roomRepository.save(f3);
		this.roomRepository.save(f4);
		this.roomRepository.save(f5);
		this.roomRepository.save(f6);
		this.roomRepository.save(f7);
		this.roomRepository.save(f8);

		this.roomRepository.save(s1);
		this.roomRepository.save(s2);
		this.roomRepository.save(s3);
		this.roomRepository.save(s4);
		this.roomRepository.save(s5);
		this.roomRepository.save(s6);
		this.roomRepository.save(s7);
		this.roomRepository.save(s8);

		//--------------AE----------------//
			// Ya
		PharmacyList ya1 = new PharmacyList("Para", 10);
		PharmacyList ya2 = new PharmacyList("Vitamin C++", 5);
		PharmacyList ya3 = new PharmacyList("Alcohol 120%", 50);
		PharmacyList ya4 = new PharmacyList("Vitamin A", 10);
		PharmacyList ya5 = new PharmacyList("Vitamin B", 15);
		PharmacyList ya6 = new PharmacyList("Vitamin E", 20);
		this.pharmacyListRepository.save(ya1);
		this.pharmacyListRepository.save(ya2);
		this.pharmacyListRepository.save(ya3);
		this.pharmacyListRepository.save(ya4);
		this.pharmacyListRepository.save(ya5);
		this.pharmacyListRepository.save(ya6);
		// Ya and Amount
		ListLetter lya1 = new ListLetter(ya1,3);
		ListLetter lya2 = new ListLetter(ya2,5);
		ListLetter lya3 = new ListLetter(ya3,3);
		ListLetter lya4 = new ListLetter(ya4,4);
		ListLetter lya5 = new ListLetter(ya5,6);
		ListLetter lya6 = new ListLetter(ya6,7);
		this.listLetterRepository.save(lya1);
		this.listLetterRepository.save(lya2);
		this.listLetterRepository.save(lya3);
		this.listLetterRepository.save(lya4);
		this.listLetterRepository.save(lya5);
		this.listLetterRepository.save(lya6);
		// Put Ya and amout obj to baiYa
		Set<ListLetter> lyaSet = new HashSet<ListLetter>();
		lyaSet.add(lya1);
		lyaSet.add(lya2);
		lyaSet.add(lya3);
		lyaSet.add(lya4);
		lyaSet.add(lya5);
		lyaSet.add(lya6);
		// baiYa
		Set<PharmacyLetter>emptySetl = new HashSet<PharmacyLetter>();
        Set<PharmacyLetter>baiYa = new HashSet<PharmacyLetter>();
       	PharmacyLetter pl = new PharmacyLetter("Mr.janyutthana","wiruswa","ยาแก้ปวด","3 เม็ด","ดื่มน้ำเยอะๆ",lyaSet);
		pl.setPatient(patientSave);
        this.pharmacyLetterRepository.save(pl);

		PatientAppoinmentLatter p = new PatientAppoinmentLatter("Mr.janyutthana","wiruswa","ทันตกรรม",null,null,"ทานข้าวมาก่อน","อุดฟันบน");
		p.setPatient(patientSave);
		this.paRepository.save(p); 
//-----------------------------------//


		Nurse n1 = new Nurse("นายสมปอง","อิ่มทิพ","ward");
		this.nurseRepository.save(n1);
		Nurse n2 = new Nurse("นายสมิง","รักดี","ward");
		this.nurseRepository.save(n2);
		Nurse n3 = new Nurse("นางเสวย","พองพอดี","ward");
		this.nurseRepository.save(n3);
	}
}
