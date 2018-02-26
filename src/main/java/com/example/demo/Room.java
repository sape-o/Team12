package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "room")
public class Room {
    @Id
    @GeneratedValue
    private Long id;

    private String type_room;
    private String number_bed;
    private String function;
    private Integer pricebed;

    private Room() {}

    public Room(String type_room, String number_bed, String function, Integer pricebed) {
        this.type_room = type_room;
        this.number_bed = number_bed;
        this.function = function;
        this.pricebed = pricebed;
    }
}
