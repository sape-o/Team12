package com.example.demo;

        import org.springframework.data.repository.CrudRepository;
        import org.springframework.data.repository.query.Param;

public interface UserLoginRepository extends CrudRepository<UserLogin, Long> {

    UserLogin findByUserIdAndUserPassword(
            @Param("UserId") String userId,
            @Param("UserPassword") String userPassword

    );
    UserLogin findById(
            @Param("Id") Long id
    );

    UserLogin findByUserId(
            @Param("UserId") String userId

    );

}
