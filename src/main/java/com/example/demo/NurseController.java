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
public class NurseController {

    @Autowired
    NurseRepository nurseRepository;
    @Autowired
    ScheduleRepository schedulerRepository;
    @ResponseBody
    @RequestMapping(path = "/ID/{id}/department/{department}/date/{date}/timeType/{timeType}",method = RequestMethod.GET)
    public String NurseController(@PathVariable Long id,@PathVariable String department,@PathVariable String date,@PathVariable String timeType) throws ParseException {

		  Nurse nurse = this.nurseRepository.findOne(id);

	 		DateFormat newDate = new SimpleDateFormat("yyyy-MM-dd");
	 		Date x = newDate.parse(date);


	 		Schedule scheduler = new Schedule(nurse,department,x,timeType);
	 		this.schedulerRepository.save(scheduler);

	 		return "{\"status\":\"scheduler_OK\"}";

		}
}
