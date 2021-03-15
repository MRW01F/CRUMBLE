package com.programming.tech.CRUMBLE.mapper;

import com.programming.tech.CRUMBLE.dto.CommunityDto;
import com.programming.tech.CRUMBLE.dto.CommunityDto.CommunityDtoBuilder;
import com.programming.tech.CRUMBLE.model.Community;
import com.programming.tech.CRUMBLE.model.Community.CommunityBuilder;
import javax.annotation.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2021-03-13T07:44:53+0530",
    comments = "version: 1.3.1.Final, compiler: javac, environment: Java 14.0.2 (Oracle Corporation)"
)
@Component
public class CommunityMapperImpl implements CommunityMapper {

    @Override
    public CommunityDto mapCommunityToDto(Community community) {
        if ( community == null ) {
            return null;
        }

        CommunityDtoBuilder communityDto = CommunityDto.builder();

        communityDto.id( community.getId() );
        communityDto.name( community.getName() );
        communityDto.description( community.getDescription() );

        communityDto.numberOfPosts( mapPosts(community.getPosts()) );

        return communityDto.build();
    }

    @Override
    public Community mapDtoToCommunity(CommunityDto communityDto) {
        if ( communityDto == null ) {
            return null;
        }

        CommunityBuilder community = Community.builder();

        community.id( communityDto.getId() );
        community.name( communityDto.getName() );
        community.description( communityDto.getDescription() );

        return community.build();
    }
}
