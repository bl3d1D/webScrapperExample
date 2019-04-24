package com.example.Start.Repositories;

import com.example.Start.Entities.Category;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {

    Category findByTitle(String title);

    Boolean existsByTitle(String title);
    
    List<Category> findAll();
}
