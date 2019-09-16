package com.library.demo.service;

import java.util.*;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.library.demo.doa.SystemRepository;
import com.library.demo.model.System;


@Service  
@Transactional
public class BookServiceImp implements BookService {

	@Autowired  
    private SystemRepository dao; 
	
	@Override
	public System addBook(System system) {
		
		return dao.save(system);  
	}

	@Override
	public List<System> getBook() {
		List<System> book=new ArrayList<System>(); 
        Iterator<System>iterator=dao.findAll().iterator();
        while(iterator.hasNext()) {
        	book.add(iterator.next());
        }
        return book;
	}

	@Override
	public System deleteBook(Long isbn) {
		
		System book=dao.getOne((long) isbn);
    	if(book!=null) {
    		dao.delete(book);}
    	return book; 
	}

	@Override
	public Boolean updateBook(System system) {
		boolean status=false;  
        try {  
            dao.save(system);  
            status=true;  
        } catch (Exception e) {  
            e.printStackTrace();  
        }  
        return status;  
	}

	
}
