package com.example.Start.Repositories;

import com.example.Start.Entities.SubCategory;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SubcategoryRepository extends JpaRepository<SubCategory, Long> {

    SubCategory findByTitle(String title);

    Boolean existsByTitle(String title);
    
    List<SubCategory> findByCategoryId(Long id);
}