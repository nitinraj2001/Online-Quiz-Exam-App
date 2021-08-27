package com.exam.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.exam.model.exam.Question;
import com.exam.model.exam.Quiz;
import com.exam.services.QuestionService;
import com.exam.services.QuizService;

@RestController
@RequestMapping("/question")
public class QuestionController {
	
	@Autowired 
	private QuestionService questionService;
	
	@Autowired
	private QuizService quizService;
	
	@PostMapping("/add-questions")
	public ResponseEntity<Question> addQuestion(@RequestBody Question question){
		return ResponseEntity.ok(this.questionService.addQuestion(question));
	}
	
	@PutMapping("/update-questions")
	public ResponseEntity<Question> updateQuestion(@RequestBody Question question){
		return ResponseEntity.ok(this.questionService.addQuestion(question));
	}
	
	@GetMapping("/{quizId}")
	public ResponseEntity<?> getAllQuestion(@PathVariable("quizId") Long quizId) throws Exception{
		Quiz quiz=this.quizService.getQuizById(quizId);
		Set<Question> question=quiz.getQuestion();
		List<Question> listOfQuestions=new ArrayList<>(question);
		if(listOfQuestions.size()>Integer.parseInt(quiz.getNumberOfQuestions())) {
			listOfQuestions=listOfQuestions.subList(0,Integer.parseInt(quiz.getNumberOfQuestions())+1);
		}
		return ResponseEntity.ok(listOfQuestions);
	}
	
	@GetMapping("/{quesId}")
	public Question getQuestion(@PathVariable("quesId") Long quesId) throws Exception {
		return this.questionService.getQuestionById(quesId);
	}
	
	@DeleteMapping("/{quesId}")
	public void deleteQuestion(@PathVariable("quesId") Long quesId) throws Exception{
		this.questionService.deletequestion(quesId);
	}
	
	
	
	

}
