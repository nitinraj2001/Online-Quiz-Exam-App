package com.exam.controller;

import java.security.Principal;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.exam.model.JwtRequest;
import com.exam.model.JwtResponse;
import com.exam.model.User;
import com.exam.services.impl.UserDetailsServiceImpl;
import com.exam.util.JwtUtils;


@RestController
@CrossOrigin("*")
public class AuthenticationController {
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private UserDetailsServiceImpl userDetailsServiceImpl;
	
	@Autowired
	private JwtUtils jwtUtil;
	
	@PostMapping("/generate-token")
	public ResponseEntity<?> generateToken(@RequestBody JwtRequest authrequest) throws Exception {
		
		System.out.println("AuthRequest data is: "+authrequest);
		
		try {System.out.println(this.userDetailsServiceImpl.loadUserByUsername(authrequest.getUsername()));
			
			System.out.println("user with name"+authrequest.getUsername()+" "+"has requested to access the data");
		   
			authenticate(authrequest.getUsername(),authrequest.getPassword());
		}
		
		catch(Exception e) {
			throw new Exception("Invalid username and password please try again!");
		}
		
		String token=jwtUtil.generateToken(authrequest.getUsername());
		
		return ResponseEntity.ok(new JwtResponse(token));
		
	}
	
	private void authenticate(String username,String password) throws Exception {
		try {
			this.authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username,password));
		}
		catch(DisabledException e) {
			throw new Exception("User is disabled "+e.getMessage());
		}
		catch(BadCredentialsException e) {
			throw new Exception("user credential is invalid!! please try with valid credentials "+e.getMessage());
		}
	}
	
	@GetMapping("/current-user")
	public User getCurrentUser(Principal principal) {
		return (User)this.userDetailsServiceImpl.loadUserByUsername(principal.getName());
	}
	
	@GetMapping("/jwt-token-status/{token}")
	public boolean isTokengetsExpiredOrNot(@PathVariable("token") String token) {
		return this.jwtUtil.extractExpiration(token).before(new Date());
	}

}
