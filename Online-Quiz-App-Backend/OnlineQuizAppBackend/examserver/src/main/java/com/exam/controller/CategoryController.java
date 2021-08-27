package com.exam.controller;

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

import com.exam.model.exam.Category;
import com.exam.services.CategoryService;

@RestController
@RequestMapping("/category")
public class CategoryController {
	
	@Autowired
	private CategoryService categoryService;

	@PostMapping("/add-category")
	public ResponseEntity<?> addCategory(@RequestBody Category category){
		Category theCategory=this.categoryService.addCategory(category);
		return ResponseEntity.ok(theCategory);
	}
	
	@GetMapping("/{categoryId}")
	public Category getCategory(@PathVariable("categoryId") Long cid) throws Exception {
		Category category=this.categoryService.getCategoryById(cid);
		if(category==null) {
			throw new Exception("Category not found exception");
		}
		return category;
	}
	
	@GetMapping("/getAllCategory")
	public ResponseEntity<?> getAllCategory() throws Exception{
		Set<Category> categories=this.categoryService.getCategories();
		if(categories==null) {
			throw new Exception("there is no category in the database");
		}
		return ResponseEntity.ok(categories);
	}
	
	@PutMapping("/updateCategory")
	public ResponseEntity<?> updateCategory(@RequestBody Category category) {
		Category thecategory=this.categoryService.updateCategory(category);
		return ResponseEntity.ok(thecategory);
	}
	
	@DeleteMapping("/{categoryId}")
	public void deleteCategory(@PathVariable("categoryId") Long cid) throws Exception {
		Category category=this.categoryService.getCategoryById(cid);
		if(category==null) {
			throw new Exception("Category not found exception");
		}
		this.categoryService.deleteCategory(cid);
	}
	
}
