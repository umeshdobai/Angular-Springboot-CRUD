package com.library.demo.controller;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.library.demo.model.AllocateBook;
import com.library.demo.service.AllocateBookService;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/allocatebookstud")
public class AllocateBookController{

	@Autowired
	private AllocateBookService service;
	
	@PostMapping("/add")
	@CrossOrigin(origins="http://localhost:4200")
	  public AllocateBook createBook(@RequestBody AllocateBook book){ 
		try {
				return service.addBook(book);
			}
		catch(Exception e){
			e.printStackTrace();
			return null;
		}
	}
	
	@GetMapping("/get")
	@CrossOrigin(origins="http://localhost:4200")
	public List<AllocateBook> getDetails( ){	
		return (List<AllocateBook>)service.getBook();
	}
}
