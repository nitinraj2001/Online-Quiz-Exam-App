package com.exam.model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="userRole")
public class UserRole {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long userRoleId;
	
	@ManyToOne(fetch=FetchType.EAGER)
	private User user;
	
	@ManyToOne
	private Role role;

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public UserRole() {
		super();
		// TODO Auto-generated constructor stub
	}

	public long getUserRoleId() {
		return userRoleId;
	}

	public void setUserRoleId(long userRoleId) {
		this.userRoleId = userRoleId;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
	

}