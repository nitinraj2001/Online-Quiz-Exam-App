package com.exam.services;

import java.util.Set;

import org.springframework.stereotype.Service;

import com.exam.model.exam.Category;

@Service()
public interface CategoryService {
	
	public Category addCategory(Category category);
	
	public Category updateCategory(Category category);
	
	public Set<Category> getCategories();
	
	public void deleteCategory(Long cid) throws Exception;
	
	public Category getCategoryById(Long cid) throws Exception;

}
