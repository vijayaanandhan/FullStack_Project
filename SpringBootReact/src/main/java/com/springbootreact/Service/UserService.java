package com.springbootreact.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springbootreact.Entity.UserEntity;
import com.springbootreact.Repository.UserRepository;

@Service
public class UserService {

	
	@Autowired
	UserRepository userpo;
	
	public UserEntity insertIntoTheTable(UserEntity ue) {
		 return userpo.save(ue);
	}

	public List<UserEntity> getdata() {
		
		return  userpo.findAll();
	}

}
