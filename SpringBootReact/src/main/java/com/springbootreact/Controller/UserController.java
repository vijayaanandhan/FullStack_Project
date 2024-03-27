package com.springbootreact.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springbootreact.Entity.UserEntity;
import com.springbootreact.Service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
	
	@Autowired
	UserService userservice;
	
	@PostMapping("/insert")
	public UserEntity insertTheData(@RequestBody UserEntity ue) {
		return userservice.insertIntoTheTable(ue);
	}
	
	@GetMapping("/get")
	public List<UserEntity> get()
	{
		return userservice.getdata();
	}


}
