package com.example.Start.Repositories;

import com.example.Start.Entities.UserPosts;
import com.example.Start.Entities.User_Notification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserPostsRepository extends JpaRepository<UserPosts, Long> {

    List<UserPosts> findByUsername(String username);
}

