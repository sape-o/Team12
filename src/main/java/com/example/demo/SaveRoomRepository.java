package com.example.demo;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

//@RepositoryRestResource(exported = false)
@RepositoryRestResource(excerptProjection = Getsaveroom.class)
public interface SaveRoomRepository extends CrudRepository<SaveRoom, Long> {
}
