package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import javax.validation.constraints.*;

import java.util.Date;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;

@Controller



public class PatientSaveController {

    @Autowired
    PatientSaveRepository patientSaveRepository;
    @Autowired
    UserLoginRepository userLoginRepository;
    @Autowired
    SentPatientRepository sentPatientRepository;




    @ResponseBody
    @RequestMapping(path = "/firstName/{firstName}/patientLastName/{patientLastName}/patientPersonId/{patientPersonId}/patientAge/{patientAge}/patientSexx/{patientSexx}/patientHight/{patientHight}/patientWeight/{patientWeight}" +
            "/patientBloodtype/{patientBloodtype}/patientAddress/{patientAddress}/patientCareer/{patientCareer}/patientStatus/{patientStatus}/patientPhone/{patientPhone}/patientSymptom/{patientSymptom}" +
            "/allergy/{allergy}/userLogin/{id}",method = RequestMethod.GET)

    public String creat( @PathVariable String firstName, @PathVariable String patientLastName, @PathVariable String patientPersonId, @PathVariable String patientAge, @PathVariable String patientSexx,
                         @PathVariable String patientHight,
                         @PathVariable String patientWeight, @PathVariable String patientBloodtype, @PathVariable String patientAddress, @PathVariable String patientCareer, @PathVariable String patientStatus,
                         @PathVariable String patientPhone, @PathVariable String patientSymptom, @PathVariable String allergy, @PathVariable String id){

        UserLogin userLogin = this.userLoginRepository.findByUserId(id);


        PatientSave creat = new PatientSave(firstName, patientLastName, patientPersonId, patientAge,patientSexx, patientHight, patientWeight, patientBloodtype, patientAddress,
                patientCareer, patientStatus, patientPhone, patientSymptom, allergy, userLogin);
        this.patientSaveRepository.save(creat);
        return "save";

    }

    
    @ResponseBody
    @RequestMapping(path = "/hostdate/{hostdate}/thostdate/{thostdate}/namehost/{namehost}/patientSave/{pid}/userLogin/{id}",method = RequestMethod.GET)

    public String creatSent (@PathVariable String hostdate,@PathVariable String thostdate, @PathVariable String namehost, @PathVariable Long pid, @PathVariable String id) throws ParseException {


        DateFormat newDate = new SimpleDateFormat("yyyy-MM-dd HH:mm");
        Date datetime = newDate.parse(hostdate+" "+thostdate);

        PatientSave patientSave = this.patientSaveRepository.findByPid(pid);
        UserLogin userLogin1 = this.userLoginRepository.findByUserId(id);

        SentPatient creatSent = new SentPatient(datetime, namehost, patientSave, userLogin1);
        this.sentPatientRepository.save(creatSent);
        return "save";
    }
}
