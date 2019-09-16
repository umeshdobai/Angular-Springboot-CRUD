package com.library.demo.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.library.demo.doa.AdminDao;
import com.library.demo.model.Admin;

@RestController
@RequestMapping("/admin")
public class AdminController {
	
		@Autowired
		AdminDao dao;
		
		
		@PostMapping("/get")
		@CrossOrigin(origins="http://localhost:4200")
		
		public Boolean getAdmin(@RequestBody Admin admin){
			boolean isPresent=false;
			System.out.println(admin.getUsername()+" "+admin.getPassword());
			
			
			BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
			List<Admin> adminList=(List<Admin>) dao.findAll();
				
				
			//Checking the username and password
			for(int i=0;i<adminList.size();i++) {
				if((admin.getUsername()).equals(adminList.get(i).getUsername())){
					System.out.println("inside username");
					if(passwordEncoder.matches(admin.getPassword(), adminList.get(i).getPassword())) {
						System.out.println("inside password");
						isPresent=true;
					}
				}
			}
			System.out.println(isPresent);
			return isPresent;
		}
		
		
}
