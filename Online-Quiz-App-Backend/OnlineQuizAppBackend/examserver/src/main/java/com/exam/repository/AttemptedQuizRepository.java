package com.exam.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.exam.model.exam.AttemptedQuiz;

@Repository
public interface AttemptedQuizRepository extends JpaRepository<AttemptedQuiz, Long> {

}
