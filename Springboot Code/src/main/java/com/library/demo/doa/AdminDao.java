package com.library.demo.doa;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.library.demo.model.*;

@Repository
public interface AdminDao extends JpaRepository<Admin,Long>{

	
}
