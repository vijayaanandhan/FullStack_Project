package com.springbootreact.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springbootreact.Entity.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity,Integer>{

}
