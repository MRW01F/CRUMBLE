package com.programming.tech.CRUMBLE.service;

import com.programming.tech.CRUMBLE.dto.CommunityDto;
import com.programming.tech.CRUMBLE.exceptions.SpringCrumbleException;
import com.programming.tech.CRUMBLE.repository.CommunityRepository;
import com.programming.tech.CRUMBLE.mapper.CommunityMapper;
import com.programming.tech.CRUMBLE.model.Community;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static java.util.stream.Collectors.toList;

@Service
@AllArgsConstructor
@Slf4j
public class CommunityService {

    private final CommunityRepository communityRepository;
    private final CommunityMapper communityMapper;

    @Transactional
    public CommunityDto save(CommunityDto communityDto) {
        Community save = communityRepository.save(communityMapper.mapDtoToCommunity(communityDto));
        communityDto.setId(save.getId());
        return communityDto;
    }

    @Transactional(readOnly = true)
    public List<CommunityDto> getAll() {
        return communityRepository.findAll()
                .stream()
                .map(communityMapper::mapCommunityToDto)
                .collect(toList());
    }

    public CommunityDto getCommunity(Long id) {
        Community community = communityRepository.findById(id)
                .orElseThrow(() -> new SpringCrumbleException("No community found with ID - " + id));
        return communityMapper.mapCommunityToDto(community);
    }
}
