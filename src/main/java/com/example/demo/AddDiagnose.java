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
public class AddDiagnose {

    @Autowired
    DiagnoseRepository diagnoseRepository;
   /* @Autowired
    UserRepository userRepository;*/
    @Autowired
    PatientSaveRepository patientSaveRepository;
    @Autowired
    UserLoginRepository userLoginRepository;

    @ResponseBody
    @RequestMapping(path = "/pid/{pid}/lid/{lid}/blood/{blood}/urin/{urin}/spinal_cord/{spinal_cord}/infection/{infection}/microbiological_culture/{microbiological_culture}/x_sray/{x_sray}/ultraSound/{ultraSound}/mri/{mri}/biopsy/{biopsy}/autopsy/{autopsy}/d_patient/{d_patient}/d_doctor/{d_doctor}", method = RequestMethod.GET)
    public String Diagnose (@PathVariable Long pid,
                            @PathVariable Long lid,
        
                            @PathVariable String blood,
                            @PathVariable String urin,
                            @PathVariable String spinal_cord,
                            @PathVariable String infection,
                            @PathVariable String microbiological_culture,
                            @PathVariable String x_sray,
                            @PathVariable String ultraSound,
                            @PathVariable String mri,
                            @PathVariable String biopsy,
                            @PathVariable String autopsy,
                            
                            @PathVariable String d_patient,
                            @PathVariable String d_doctor


    ) {
        Date datetime = new Date();
        UserLogin userLogin = this.userLoginRepository.findById(lid);
		PatientSave patientSave = this.patientSaveRepository.findByPid(pid);
       // Diagnose diagnose = this.diagnoseRepository.findByDid(did);

        Diagnose diagnose = new Diagnose(datetime,blood,urin,spinal_cord,infection,microbiological_culture,x_sray,ultraSound,mri,biopsy,autopsy,patientSave,userLogin,d_patient,d_doctor);
        this.diagnoseRepository.save(diagnose);

     
    

        	return "SavedList";
    }



}