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
public class MakeRoomController{
	@Autowired
	PatientSaveRepository	patientsaverepository;
	@Autowired
	RoomRepository		roomrepository;
	@Autowired
	SaveRoomRepository	saveroomrepository;

	@ResponseBody
	@RequestMapping(path = "/ID_Patient/{pid}/ID_Room/{id2}/dateIn/{dateIn}/dateOut/{dateOut}", method = RequestMethod.GET)

    public String Saveroom(@PathVariable Long pid,@PathVariable Long id2,@PathVariable String dateIn,@PathVariable String dateOut) throws ParseException {

		PatientSave patient = this.patientsaverepository.findByPid(pid);
	 		Room room = this.roomrepository.findOne(id2);

	 		DateFormat newDate = new SimpleDateFormat("yyyy-MM-dd");
	 		Date x = newDate.parse(dateIn);
	 		Date y = newDate.parse(dateOut);

	 		SaveRoom saveroom = new SaveRoom(patient,room,x,y);
	 		this.saveroomrepository.save(saveroom);

	 		return "{\"status\":\"SaveRoom\"}";

		}
	}
