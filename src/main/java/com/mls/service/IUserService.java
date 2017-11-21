package com.mls.service;

import com.mls.pojo.User;

public interface IUserService {
    int login(String username, String password);
    User getUserByName(String userame);
    int insertSelective(User record);
    int getComfirm(String username, String forgetQues, String forgetAns);
    int updateByPrimaryKey(User record);
}
