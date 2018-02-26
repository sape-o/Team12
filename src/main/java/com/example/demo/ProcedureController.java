package com.example.demo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.web.PagedResourcesAssembler;
import org.springframework.hateoas.PagedResources;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;
import org.springframework.stereotype.Controller;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.text.ParseException;


@Controller
public class ProcedureController {

    @Autowired
    ProcedureRepository procedurerepository;
	
	
	@Autowired
	PatientRepository patientrepository;
	
	@Autowired
	NurseRepository nurserepository;
	
	
    @ResponseBody
@RequestMapping(path = "/id_nurse/{id_nurse}/id_patient/{id_patient}/job/{job}/date/{date}",method = RequestMethod.GET)
	
	
    public String ProcedureController(@PathVariable Long id_nurse,@PathVariable Long id_patient,@PathVariable String job,@PathVariable String date) throws ParseException {

		    Nurse nurse = this.nurserepository.findOne(id_nurse);
			Patient patient = this.patientrepository.findOne(id_patient);
	 		DateFormat newDate = new SimpleDateFormat("yyyy-MM-dd");
	 		Date x = newDate.parse(date);

			Procedure procedure = new Procedure(nurse,x,job,patient);
			this.procedurerepository.save(procedure);
	 		return "{\"status\":\"finish\"}";

		}
}