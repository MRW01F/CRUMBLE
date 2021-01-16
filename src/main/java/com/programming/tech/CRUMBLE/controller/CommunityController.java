package com.programming.tech.CRUMBLE.controller;

import com.programming.tech.CRUMBLE.dto.CommunityDto;
import com.programming.tech.CRUMBLE.service.CommunityService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/community")
@AllArgsConstructor
@Slf4j
public class CommunityController {

    private final CommunityService communityService;

    @PostMapping
    public ResponseEntity<CommunityDto> createCommunity(@RequestBody CommunityDto communityDto) {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(communityService.save(communityDto));
    }

    @GetMapping
    public ResponseEntity<List<CommunityDto>> getAllCommunity() {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(communityService.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<CommunityDto> getCommunity(@PathVariable Long id) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(communityService.getCommunity(id));
    }
}