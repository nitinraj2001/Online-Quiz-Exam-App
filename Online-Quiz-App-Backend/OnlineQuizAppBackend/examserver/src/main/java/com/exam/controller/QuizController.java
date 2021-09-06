package com.exam.controller;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.exam.model.exam.Category;
import com.exam.model.exam.Quiz;
import com.exam.services.QuizService;

@RestController
@RequestMapping("/quiz")
@CrossOrigin("*")
public class QuizController {

	@Autowired
	private QuizService quizService;

	@PostMapping("/add")
	public ResponseEntity<Quiz> addQuiz(@RequestBody Quiz quiz){
		Quiz theQuiz=this.quizService.addQuiz(quiz);
		return ResponseEntity.ok(theQuiz);
	}
	
	@GetMapping("/{quizId}")
	public Quiz getQuiz(@PathVariable("quizId") Long qid) throws Exception {
		Quiz quiz=this.quizService.getQuizById(qid);
		if(quiz==null) {
			throw new Exception("Quiz not found exception");
		}
		return quiz;
	}
	
	@GetMapping("/getAllQuiz")
	public ResponseEntity<?> getAllCategory() throws Exception{
		Set<Quiz> quizzes=this.quizService.getQuizzes();
		if(quizzes==null) {
			throw new Exception("there is no quiz in the database");
		}
		return ResponseEntity.ok(quizzes);
	}
	
	@PutMapping("/updateQuiz")
	public ResponseEntity<Quiz> updateCategory(@RequestBody Quiz quiz) {
		Quiz thequiz=this.quizService.updateQuiz(quiz);
		return ResponseEntity.ok(thequiz);
	}
	
	@DeleteMapping("/{quizId}")
	public void deleteCategory(@PathVariable("quizId") Long qid) throws Exception {
		Quiz quiz=this.quizService.getQuizById(qid);
		if(quiz==null) {
			throw new Exception("Quiz not found exception");
		}
		this.quizService.deleteQuiz(qid);
	}
	
	@GetMapping("/Bycategory/{cid}")
	public ResponseEntity<?> getQuizzesByCategoryId(@PathVariable("cid") Long cid){
		Category category=new Category();
		category.setCid(cid);
		return ResponseEntity.ok(this.quizService.findQuizzesByCategoryId(category));
	}
	
	@GetMapping("/active")
	public ResponseEntity<?> getAllActiveQuizzes(){
		return ResponseEntity.ok(this.quizService.findAllActiveQuiz());
	}
	
	@GetMapping("/category/active/{cid}")
	public ResponseEntity<?> getAllActiveQuizzesOfCategory(@PathVariable("cid") Long cid){
		Category category=new Category();
		category.setCid(cid);
		return ResponseEntity.ok(this.quizService.findAllActiveQuizOfCategory(category));
	}
	
}
