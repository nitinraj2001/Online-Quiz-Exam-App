package com.exam.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.exam.model.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role,Long> {

}
