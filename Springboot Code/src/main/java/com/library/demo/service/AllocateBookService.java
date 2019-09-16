package com.library.demo.service;

import java.util.List;

import com.library.demo.model.AllocateBook;

public interface AllocateBookService {

	AllocateBook addBook(AllocateBook allocatebook);  
    List<AllocateBook> getBook();
}
