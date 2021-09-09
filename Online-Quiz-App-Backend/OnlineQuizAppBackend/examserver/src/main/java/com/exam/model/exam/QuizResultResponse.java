package com.exam.model.exam;

import java.util.List;

public class QuizResultResponse {
	
	private Integer correctAnswers;
	
	private double marksObtained;
	
	private Integer attempted;
	
	private List<Question> questions;

	public Integer getCorrectAnswers() {
		return correctAnswers;
	}

	public void setCorrectAnswers(Integer correctAnswers) {
		this.correctAnswers = correctAnswers;
	}

	public double getMarksObtained() {
		return marksObtained;
	}

	public void setMarksObtained(double marksObtained) {
		this.marksObtained = marksObtained;
	}

	public Integer getAttempted() {
		return attempted;
	}

	public void setAttempted(Integer attempted) {
		this.attempted = attempted;
	}

	public List<Question> getQuestions() {
		return questions;
	}

	public void setQuestions(List<Question> questions) {
		this.questions = questions;
	}

	public QuizResultResponse(Integer correctAnswers, double marksObtained, Integer attempted,
			List<Question> questions) {
		super();
		this.correctAnswers = correctAnswers;
		this.marksObtained = marksObtained;
		this.attempted = attempted;
		this.questions = questions;
	}

	public QuizResultResponse() {
		
	}
	
	
	
	

}
