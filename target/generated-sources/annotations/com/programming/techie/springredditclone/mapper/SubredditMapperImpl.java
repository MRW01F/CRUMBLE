package com.programming.techie.springredditclone.mapper;

import com.programming.techie.springredditclone.dto.SubredditDto;
import com.programming.techie.springredditclone.dto.SubredditDto.SubredditDtoBuilder;
import com.programming.techie.springredditclone.model.Subreddit;
import com.programming.techie.springredditclone.model.Subreddit.SubredditBuilder;
import javax.annotation.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2020-10-29T19:27:41+0530",
    comments = "version: 1.3.1.Final, compiler: javac, environment: Java 11.0.8 (JetBrains s.r.o.)"
)
@Component
public class SubredditMapperImpl implements SubredditMapper {

    @Override
    public SubredditDto mapSubredditToDto(Subreddit subreddit) {
        if ( subreddit == null ) {
            return null;
        }

        SubredditDtoBuilder subredditDto = SubredditDto.builder();

        subredditDto.id( subreddit.getId() );
        subredditDto.name( subreddit.getName() );
        subredditDto.description( subreddit.getDescription() );

        subredditDto.numberOfPosts( mapPosts(subreddit.getPosts()) );

        return subredditDto.build();
    }

    @Override
    public Subreddit mapDtoToSubreddit(SubredditDto subredditDto) {
        if ( subredditDto == null ) {
            return null;
        }

        SubredditBuilder subreddit = Subreddit.builder();

        subreddit.id( subredditDto.getId() );
        subreddit.name( subredditDto.getName() );
        subreddit.description( subredditDto.getDescription() );

        return subreddit.build();
    }
}
