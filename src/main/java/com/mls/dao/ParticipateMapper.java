package com.mls.dao;

import com.mls.pojo.Participate;

public interface ParticipateMapper {
    int deleteByPrimaryKey(byte[] username);

    int insert(Participate record);

    int insertSelective(Participate record);

    Participate selectByPrimaryKey(byte[] username);

    int updateByPrimaryKeySelective(Participate record);

    int updateByPrimaryKey(Participate record);
}