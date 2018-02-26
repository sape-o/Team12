package com.example.demo;

        import org.springframework.data.repository.CrudRepository;
        import org.springframework.data.rest.core.annotation.RepositoryRestResource;
        import org.springframework.data.rest.core.config.Projection;
        import java.util.Date;
        //edit
@Projection(name = "Getsaveroom", types = { SaveRoom.class })
interface Getsaveroom {

   Long getId();
	 Date getDateIn();
	 Date getDateOut();
   PatientSave getPatientsave();
   Room getRoom();
}
