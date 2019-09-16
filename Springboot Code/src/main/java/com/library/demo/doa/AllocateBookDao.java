package com.library.demo.doa;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import com.library.demo.model.*;

@Service
public interface AllocateBookDao extends JpaRepository<AllocateBook, Long>{


	
}