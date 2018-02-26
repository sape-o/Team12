package com.example.demo;

// import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface ServeMenuRepository extends CrudRepository<ServeMenu, Long> {
    // @Query("select u from ServeDish u where u.name = ?1")
    // ServeDish findByName(String name);
}