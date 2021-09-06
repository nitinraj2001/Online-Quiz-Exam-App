package com.exam.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.exam.model.exam.Category;
import com.exam.model.exam.Quiz;

@Repository
public interface QuizRepository extends JpaRepository<Quiz, Long> {

	List<Quiz> findQuizzesByCategory(Category category);
	
	List<Quiz> findByActive(boolean active);
	
	List<Quiz> findByCategoryAndActive(Category category, boolean active);
}
