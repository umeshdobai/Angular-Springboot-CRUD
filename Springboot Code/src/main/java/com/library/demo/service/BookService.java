package com.library.demo.service;

import java.util.List;
import com.library.demo.model.System;

public interface BookService {

	System addBook(System system);  
    List<System> getBook();  
    System deleteBook(Long isbn);  
    Boolean updateBook(System system);  
}
