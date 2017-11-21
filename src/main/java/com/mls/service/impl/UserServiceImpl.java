package com.mls.service.impl;

import com.mls.dao.UserMapper;
import com.mls.pojo.User;
import com.mls.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("iUserService")
public class UserServiceImpl implements IUserService{
    @Autowired
    private UserMapper userMapper;

    public int login(String username, String password){
        return userMapper.login(username, password);
    }

    public User getUserByName(String username){
        return userMapper.selectByPrimaryKey(username);
    }

    public int insertSelective(User record){
        return  userMapper.insertSelective(record);
    }

    public int getComfirm(String forgetQues, String forgetAns, String username){
        return userMapper.getComfirm(forgetQues, forgetAns, username);
    }

    public int updateByPrimaryKey(User record){
        return userMapper.updateByPrimaryKey(record);
    }
}
