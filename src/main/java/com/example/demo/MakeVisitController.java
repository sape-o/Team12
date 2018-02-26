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
public class MakeVisitController{
	@Autowired
	PatientSaveRepository	patientsaverepository;

	@Autowired
	RoomRepository		roomrepository;

	@Autowired
	SaveRoomRepository	saveroomrepository;

	@Autowired
	UserLoginRepository userloginrepository;

	@Autowired
	VisitRepository visitrepository;

	@ResponseBody
	@RequestMapping(path = "/ID_SaveRoom/{sid}/firstname/{firstname}/lastname/{lastname}/perID/{perID}/tel/{tel}/user/{user}", method = RequestMethod.GET)

    public String Visit(@PathVariable Long sid,@PathVariable Long user,@PathVariable String firstname,
													 @PathVariable String lastname,@PathVariable String perID,@PathVariable String tel)
													 throws ParseException {

			SaveRoom saveroom = this.saveroomrepository.findOne(sid);
			Date date = new Date();
			UserLogin userlogin = this.userloginrepository.findOne(user);
			//DateFormat newDate = new SimpleDateFormat("yyyy-MM-dd");
	 		//Date x = newDate.parse(dateIn);

	 		Visit visit = new Visit(saveroom,userlogin,firstname,lastname,perID,tel,date);
	 		this.visitrepository.save(visit);

	 		return "{\"status\":\"Save_Visit_Finish\"}";

		}
	}
