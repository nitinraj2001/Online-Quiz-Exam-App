package com.exam.helper;

public class UserWithSameUsernameFoundException extends Exception {

	private static final long serialVersionUID = 1L;
	
	public UserWithSameUsernameFoundException(String username) {
        super(String.format("User with id '%s' is already exist try with different username!!", username));
    }
}
