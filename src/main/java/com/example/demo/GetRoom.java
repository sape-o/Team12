package com.example.demo;

        import org.springframework.data.repository.CrudRepository;
        import org.springframework.data.rest.core.annotation.RepositoryRestResource;
        import org.springframework.data.rest.core.config.Projection;

@Projection(name = "GetRoom", types = { Room.class })
interface GetRoom {

    Long getId();
    String getType_room();
    String getNumber_bed();
    String getFunction();
    Integer getPricebed();

}
