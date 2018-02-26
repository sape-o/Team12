package com.example.demo;

// import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.NotEmpty;

import lombok.Data;

@Data
@Entity
public class ServeDessert {

    @Id @GeneratedValue
    private Long id;
    
    @NotNull
    @NotEmpty
    @Size(min = 3, max = 100, message = "must be between 3 and 100 characters")
    @Pattern(regexp = "\\D*", message="must match the name")
    private String name;

    // @OneToMany
    // private Set<ServeMenu> menu;

    private ServeDessert() {}

    public ServeDessert(String name) {
        this.name = name;
    }
}