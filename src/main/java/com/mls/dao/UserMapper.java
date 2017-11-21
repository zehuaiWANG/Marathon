package com.mls.dao;

import com.mls.pojo.User;
import org.apache.ibatis.annotations.Param;

public interface UserMapper {
    int deleteByPrimaryKey(String username);

    int insert(User record);

    int insertSelective(User record);

    User selectByPrimaryKey(String username);

    int updateByPrimaryKeySelective(User record);

    int updateByPrimaryKey(User record);

    int login(@Param("username") String username, @Param("password") String password);

    int getComfirm(@Param("username") String username, @Param("forgetQues") String forgetQues, @Param("forgetAns") String forgetAns);
}