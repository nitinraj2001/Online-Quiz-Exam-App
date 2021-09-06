package com.exam.services.impl;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exam.model.exam.Category;
import com.exam.model.exam.Quiz;
import com.exam.repository.QuizRepository;
import com.exam.services.QuizService;

@Service()
public class QuizServiceImpl implements QuizService {
	
	@Autowired 
	private QuizRepository quizRepository;

	@Override
	public Quiz addQuiz(Quiz quiz) {
		
		return this.quizRepository.save(quiz);
	}

	@Override
	public Quiz updateQuiz(Quiz quiz) {
		
		return this.quizRepository.save(quiz);
	}

	@Override
	public Set<Quiz> getQuizzes() {
		
		return new HashSet<>(this.quizRepository.findAll());
	}

	@Override
	public Quiz getQuizById(Long qid) throws Exception {
		Quiz quiz=this.quizRepository.findById(qid).get();
		if(quiz==null) {
			throw new Exception("Quiz not found exception");
		}
		return quiz;
	}

	@Override
	public void deleteQuiz(Long qid) throws Exception {
		
		Quiz quiz=this.quizRepository.findById(qid).get();
		if(quiz==null) {
			throw new Exception("Quiz not found exception");
		}
		
		this.quizRepository.deleteById(qid);

	}

	@Override
	public List<Quiz> findQuizzesByCategoryId(Category category) {
		
		List<Quiz> listOfQuizzesByCategory=this.quizRepository.findQuizzesByCategory(category);
		
		System.out.println(listOfQuizzesByCategory);
		
		return this.quizRepository.findQuizzesByCategory(category);
		
	}

	@Override
	public List<Quiz> findAllActiveQuiz() {
		
		return this.quizRepository.findByActive(true);
	}

	@Override
	public List<Quiz> findAllActiveQuizOfCategory(Category category) {
	
		return this.quizRepository.findByCategoryAndActive(category, true);
	}

}
