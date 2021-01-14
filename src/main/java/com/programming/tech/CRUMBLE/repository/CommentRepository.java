package com.programming.tech.CRUMBLE.repository;

import com.programming.tech.CRUMBLE.model.Comment;
import com.programming.tech.CRUMBLE.model.Post;
import com.programming.tech.CRUMBLE.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
    List<Comment> findByPost(Post post);

    List<Comment> findAllByUser(User user);
}
