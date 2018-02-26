package com.example.demo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

//@RepositoryRestResource(exported = false)
@RepositoryRestResource(excerptProjection = GetRoom.class)
public interface RoomRepository extends CrudRepository<Room, Long> {}
