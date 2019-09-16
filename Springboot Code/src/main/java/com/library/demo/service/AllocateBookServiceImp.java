package com.library.demo.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.library.demo.doa.AllocateBookDao;
import com.library.demo.model.AllocateBook;

@Service  
@Transactional
public class AllocateBookServiceImp implements AllocateBookService{

	
	@Autowired  
    private AllocateBookDao dao;

	@Override
	public AllocateBook addBook(AllocateBook allocatebook) {

		return dao.save(allocatebook);  
	}

	@Override
	public List<AllocateBook> getBook() {
		List<AllocateBook> book=new ArrayList<AllocateBook>(); 
        Iterator<AllocateBook>iterator=dao.findAll().iterator();
        while(iterator.hasNext()) {
        	book.add(iterator.next());
        }
        return book;
	} 
	
	
	

}
