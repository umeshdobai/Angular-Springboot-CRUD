package com.library.demo.doa;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import com.library.demo.model.System;

@Service
public interface SystemRepository extends JpaRepository<System, Long>{



	
	
	
}
