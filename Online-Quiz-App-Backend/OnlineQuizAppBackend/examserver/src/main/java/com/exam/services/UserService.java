package com.exam.services;

import java.util.Set;

import org.springframework.stereotype.Service;

import com.exam.model.User;

import com.exam.model.UserRole;

@Service
public interface UserService {
	
	public User createUser(User user,Set<UserRole>userRoles) throws Exception;

}
