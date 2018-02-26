package com.example.demo;

import java.lang.Long;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.web.PagedResourcesAssembler;
import org.springframework.hateoas.PagedResources;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import java.util.concurrent.atomic.AtomicLong;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Controller
public class FollowPContronller {

    @Autowired
    FollowPRepository followPRepository;

    @Autowired
    PatientSaveRepository patientSaveRepository;
    @Autowired
    UserLoginRepository userLoginRepository;

    /*@Autowired
    SaveRoomRepository saveRoomRepository;*/

    @ResponseBody
    @RequestMapping(path = "/pid/{pid}/lid/{lid}/sad/{sad}/worry/{worry}/happy/{happy}/pain/{pain}/tried/{tried}/squeamish/{squeamish}/sleepy/{sleepy}/anorexia/{anorexia}/tried2/{tried2}/details/{details}/f_patient/{f_patient}/f_nurse/{f_nurse}", method = RequestMethod.GET)
    public String FollowP (@PathVariable Long pid,
                            @PathVariable Long lid,
                           // @PathVariable Long srid,
        
                            @PathVariable String sad,
                            @PathVariable String worry,
                            @PathVariable String happy,
                            @PathVariable String pain,
                            @PathVariable String tried,
                            @PathVariable String squeamish,
                            @PathVariable String sleepy,
                            @PathVariable String anorexia,
                            @PathVariable String tried2,
                            @PathVariable String details,
                            
                            @PathVariable String f_patient,
                            @PathVariable String f_nurse


    ) {
        Date datetime = new Date();
        UserLogin userLogin = this.userLoginRepository.findById(lid);
		PatientSave patientSave = this.patientSaveRepository.findByPid(pid);
        //SaveRoom saveRoom = this.saveRoomRepository.findBySRid(srid);

        FollowP followP = new FollowP(datetime,sad,worry,happy,pain,tried,squeamish,sleepy,anorexia,tried2,details,patientSave,userLogin,f_patient,f_nurse);
        this.followPRepository.save(followP);

    

        	return "SavedList";
    }
    //22-2-61.



}