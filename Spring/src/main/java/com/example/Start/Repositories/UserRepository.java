package com.example.Start.Repositories;

import com.example.Start.Entities.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<Users, Long> {
    Optional<Users> findByEmail(String email);

    Optional<Users> findByUsernameOrEmail(String username, String email);

    List<Users> findByIdIn(List<Long> userIds);

    Optional<Users> findByUsername(String username);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);

    Optional<Users> findById(Long id);
}