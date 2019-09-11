package com.example.Start.Repositories;

import com.example.Start.Entities.Notification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NotificationRepository extends JpaRepository<Notification, Long> {

    Notification findByTitle(String title);
    
    Boolean existsByTitle(String title);

    List<Notification> findByCategoryId(Long id);
}