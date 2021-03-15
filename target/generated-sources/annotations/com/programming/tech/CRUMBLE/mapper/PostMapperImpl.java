package com.programming.tech.CRUMBLE.mapper;

import com.programming.tech.CRUMBLE.dto.PostRequest;
import com.programming.tech.CRUMBLE.dto.PostResponse;
import com.programming.tech.CRUMBLE.model.Community;
import com.programming.tech.CRUMBLE.model.Post;
import com.programming.tech.CRUMBLE.model.Post.PostBuilder;
import com.programming.tech.CRUMBLE.model.User;
import javax.annotation.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2021-03-13T07:44:53+0530",
    comments = "version: 1.3.1.Final, compiler: javac, environment: Java 14.0.2 (Oracle Corporation)"
)
@Component
public class PostMapperImpl extends PostMapper {

    @Override
    public Post map(PostRequest postRequest, Community community, User user) {
        if ( postRequest == null && community == null && user == null ) {
            return null;
        }

        PostBuilder post = Post.builder();

        if ( postRequest != null ) {
            post.description( postRequest.getDescription() );
            post.postId( postRequest.getPostId() );
            post.postName( postRequest.getPostName() );
            post.url( postRequest.getUrl() );
        }
        if ( community != null ) {
            post.community( community );
        }
        if ( user != null ) {
            post.user( user );
        }
        post.createdDate( java.time.Instant.now() );
        post.voteCount( 0 );

        return post.build();
    }

    @Override
    public PostResponse mapToDto(Post post) {
        if ( post == null ) {
            return null;
        }

        PostResponse postResponse = new PostResponse();

        postResponse.setCommunityName( postCommunityName( post ) );
        postResponse.setId( post.getPostId() );
        postResponse.setUserName( postUserUsername( post ) );
        postResponse.setPostName( post.getPostName() );
        postResponse.setUrl( post.getUrl() );
        postResponse.setDescription( post.getDescription() );
        postResponse.setVoteCount( post.getVoteCount() );

        postResponse.setDuration( getDuration(post) );
        postResponse.setDownVote( isPostDownVoted(post) );
        postResponse.setCommentCount( commentCount(post) );
        postResponse.setUpVote( isPostUpVoted(post) );

        return postResponse;
    }

    private String postCommunityName(Post post) {
        if ( post == null ) {
            return null;
        }
        Community community = post.getCommunity();
        if ( community == null ) {
            return null;
        }
        String name = community.getName();
        if ( name == null ) {
            return null;
        }
        return name;
    }

    private String postUserUsername(Post post) {
        if ( post == null ) {
            return null;
        }
        User user = post.getUser();
        if ( user == null ) {
            return null;
        }
        String username = user.getUsername();
        if ( username == null ) {
            return null;
        }
        return username;
    }
}
