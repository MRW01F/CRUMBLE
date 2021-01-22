package com.programming.tech.CRUMBLE.repository;

import com.programming.tech.CRUMBLE.model.Community;
import com.programming.tech.CRUMBLE.model.Post;
//import com.programming.tech.CRUMBLE.model.Subreddit;
import com.programming.tech.CRUMBLE.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
    List<Post> findAllByCommunity(Community community);

    List<Post> findByUser(User user);
}
