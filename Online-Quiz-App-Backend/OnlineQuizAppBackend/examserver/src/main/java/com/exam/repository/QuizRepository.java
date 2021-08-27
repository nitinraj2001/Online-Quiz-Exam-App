package com.exam.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.exam.model.exam.Quiz;

@Repository
public interface QuizRepository extends JpaRepository<Quiz, Long> {

}
