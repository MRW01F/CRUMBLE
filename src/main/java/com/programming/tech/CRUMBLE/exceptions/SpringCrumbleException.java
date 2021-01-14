package com.programming.tech.CRUMBLE.exceptions;

public class SpringCrumbleException extends RuntimeException {
    public SpringCrumbleException(String exMessage, Exception exception) {
        super(exMessage, exception);
    }

    public SpringCrumbleException(String exMessage) {
        super(exMessage);
    }
}
