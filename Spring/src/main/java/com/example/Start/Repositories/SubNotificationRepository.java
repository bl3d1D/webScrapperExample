package com.example.Start.Repositories;

import com.example.Start.Entities.SubNotification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SubNotificationRepository extends JpaRepository<SubNotification, Long> {
    
    Optional<SubNotification> findById(Long id);

    SubNotification findByTitle(String title);

    Boolean existsByTitle(String title);

    List<SubNotification> findBySubcategoryId(Long id);
}