package com.exam.model.exam;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Transient;

@Entity
public class QuizQuestions {
	
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long quesId;
	
	private String content;
	
	private String option1;
	
	private String option2;
	
	private String option3;
	
    private String option4;
    
    private String answer;
    
    private Long quizId;
    
    @ManyToOne(fetch=FetchType.EAGER)
	private AttemptedQuiz attemptedQuiz;
	
	@Transient
	private String givenAnswer;

	public Long getQuesId() {
		return quesId;
	}

	public void setQuesId(Long quesId) {
		this.quesId = quesId;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getOption1() {
		return option1;
	}

	public void setOption1(String option1) {
		this.option1 = option1;
	}

	public String getOption2() {
		return option2;
	}

	public void setOption2(String option2) {
		this.option2 = option2;
	}

	public String getOption3() {
		return option3;
	}

	public void setOption3(String option3) {
		this.option3 = option3;
	}

	public String getOption4() {
		return option4;
	}

	public void setOption4(String option4) {
		this.option4 = option4;
	}

	public String getAnswer() {
		return answer;
	}

	public void setAnswer(String answer) {
		this.answer = answer;
	}

	public Long getQuizId() {
		return quizId;
	}

	public void setQuizId(Long quizId) {
		this.quizId = quizId;
	}

	public String getGivenAnswer() {
		return givenAnswer;
	}

	public void setGivenAnswer(String givenAnswer) {
		this.givenAnswer = givenAnswer;
	}

	public QuizQuestions(Long quesId, String content, String option1, String option2, String option3, String option4,
			String answer, Long quizId, String givenAnswer) {
		super();
		this.quesId = quesId;
		this.content = content;
		this.option1 = option1;
		this.option2 = option2;
		this.option3 = option3;
		this.option4 = option4;
		this.answer = answer;
		this.quizId = quizId;
		this.givenAnswer = givenAnswer;
	}

	public QuizQuestions() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	

}
