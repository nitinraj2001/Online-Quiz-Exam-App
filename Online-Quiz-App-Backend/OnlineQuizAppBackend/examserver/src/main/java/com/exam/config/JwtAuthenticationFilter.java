package com.exam.config;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.exam.services.impl.UserDetailsServiceImpl;
import com.exam.util.JwtUtils;

import io.jsonwebtoken.ExpiredJwtException;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

	@Autowired
	private UserDetailsServiceImpl userDetailsServiceImpl;
	
	@Autowired
	private JwtUtils jwtUtil;
	
	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterchain)
			throws ServletException, IOException {
		

		final String requestTokenHeader=request.getHeader("Authorization");
		
		String username=null;
		String jwtToken=null;
		
		if(requestTokenHeader!=null&&requestTokenHeader.startsWith("Bearer ")) {
			jwtToken=requestTokenHeader.substring(7);
			System.out.println("Extracted jwtToken is "+jwtToken);
			try {
			username=this.jwtUtil.extractUsername(jwtToken);
			System.out.println("Extracted username is: "+username);
			}catch(ExpiredJwtException e) {
				System.out.println("jwt token is expired");
				e.printStackTrace();
			}catch(Exception e) {
				e.printStackTrace();
			}
		}
		else {
			System.out.println("token is invalid, it must start with bearer substring");
		}
		
		if(username!=null&&SecurityContextHolder.getContext().getAuthentication()==null) {
			
			 UserDetails userDetails =this.userDetailsServiceImpl.loadUserByUsername(username);

	            if (jwtUtil.validateToken(jwtToken, userDetails)) {

	                UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken =
	                        new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
	                usernamePasswordAuthenticationToken
	                        .setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
	                SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
	            }
	            else {
	    			System.out.println("token is not validated");
	    		}
		}
		else {
			System.out.println("Either username is null or security context holder is not equal to null");
		}
		
		filterchain.doFilter(request, response);
	}

}
