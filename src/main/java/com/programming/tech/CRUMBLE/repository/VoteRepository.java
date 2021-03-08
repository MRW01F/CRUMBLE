package com.programming.tech.CRUMBLE.repository;

import com.programming.tech.CRUMBLE.model.Post;
import com.programming.tech.CRUMBLE.model.User;
import com.programming.tech.CRUMBLE.model.Vote;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface VoteRepository extends JpaRepository<Vote, Long> {
    Optional<Vote> findTopByPostAndUserOrderByVoteIdDesc(Post post, User currentUser);
}
