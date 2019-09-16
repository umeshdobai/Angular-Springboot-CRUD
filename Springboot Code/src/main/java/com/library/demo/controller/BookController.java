package com.library.demo.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.library.demo.model.System;
import com.library.demo.service.BookService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/system")
public class BookController {

	@Autowired
	private BookService bookservice;

	@GetMapping("hello")
	public List<System> getBook() {
		return (List<System>) bookservice.getBook();
	}

	@PostMapping("add")
	@CrossOrigin(origins = "http://localhost:4200")
	public System addBook(@RequestBody System book) {

		List<System> booklist = (List<System>) bookservice.getBook();
		for (int i = 0; i < booklist.size(); i++) {
			if (((Long) book.getIsbn()).equals(booklist.get(i).getIsbn())) {

				return null;
			}
		}
		return bookservice.addBook(book);
	}

	@DeleteMapping("del/{isbn}")
	@CrossOrigin(origins = "http://localhost:4200")
	public boolean deleteBook(@PathVariable Long isbn) {
		bookservice.deleteBook(isbn);
		return true;
	}

	
	 @PutMapping("upd/{isbn}")	  
	 @CrossOrigin(origins="http://localhost:4200") 
	 public boolean updateBook(@PathVariable Long isbn,@RequestBody System book){ 
		 return bookservice.updateBook(book); 
		 }
	 

}
