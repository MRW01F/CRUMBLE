package com.programming.tech.CRUMBLE.repository;

import com.programming.tech.CRUMBLE.model.Community;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CommunityRepository extends JpaRepository<Community, Long> {

    Optional<Community> findByName(String CommunityName);
    Optional<Community> findById(Long CommunityId);
}
